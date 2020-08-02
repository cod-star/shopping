<template>
  <div id="detail">
    <detail-nav class="detail-nav" @titleClick="titleClick" ref="nav" />
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentCilck">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @imgLoad="imgload" />
      <detail-param-info ref="params" :detail-params="DetailParams" />
      <detail-comment-info ref="comment" :comment-info="commentInfo" />
      <goods-list ref="recommend" :goods="recommend" />
    </scroll>
    <!-- 监听组件的原生事件 -->
    <better-top @click.native="backClick" v-show="isShow" />
    <detail-footer-bar @addCart="addToCart" />
  </div>
</template>
<script>
import DetailNav from "./childComps/DetailNav";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamsInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailFooterBar from "./childComps/DetailFooterBar";

import Scroll from "components/common/scroll/Scroll";
import GoodsList from "components/content/goods/GoodsList";
import BetterTop from "components/content/betterTop/BetterTop";

import { itemListenerMixin } from "common/mixin.js";
import { debounce } from "common/util.js";

import {mapActions} from 'vuex'

import {
  getDetail,
  Goods,
  Shop,
  GoodsParams,
  getRecommend,
} from "network/detail";

export default {
  name: "Detail",
  components: {
    DetailNav,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailFooterBar,
    Scroll,
    GoodsList,
    BetterTop,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      DetailParams: {},
      commentInfo: {},
      recommend: [],
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex: 0,
      isShow: false,
    };
  },
  // 混入式
  mixins: [itemListenerMixin],
  created() {
    // 2.iid数据
    this.iid = this.$route.params.iid;
    // 获取图片

    getDetail(this.iid).then((res) => {
      // 1.获取轮播图片
      // console.log(res);
      const data = res.result;
      this.topImages = data.itemInfo.topImages;

      // 2.获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // console.log(this.goods);

      // 3.店铺信息
      this.shop = new Shop(data.shopInfo);

      // 4.保存商品的详细信息
      this.detailInfo = data.detailInfo;

      // console.log(res);

      // 5.获取参数信息
      this.DetailParams = new GoodsParams(
        data.itemParams.info,
        data.itemParams.rule
      );

      // 6.获取评论
      this.commentInfo = 0 ? 0 : data.rate;
    });

    // 获取推荐数据
    getRecommend().then((res) => {
      // console.log(res);
      this.recommend = res.data.list;
    });

    // 4.给 getThemeTopY赋值
    // 点击导航条 滑到相应的位置
    this.getThemeTopY = debounce(() => {
      // 图片没有加载到
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);

      // console.log(this.themeTopYs);
    });

    // this.$nextTick(() => {
    //   // dom 获取到  但是图片没有加载到
    // 在  mounted 中数据还没有获取到
    //   this.themeTopYs = []
    //   this.themeTopYs.push(0);
    //   this.themeTopYs.push(this.$refs.params.$el.offsetTop);
    //   this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
    //   this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);

    //   console.log(this.themeTopYs);
    // });
  },
  mounted() {},
  // destroyed() {
  //   this.$bus.off('itemImageLoad',this.homeImageLister)
  // },
  methods: {
    ...mapActions(['addCart']),
    imgload() {
      // this.$refs.scroll.refresh();
      this.getThemeTopY();
    },
    titleClick(index) {
      // console.log(index);
      // 获取offset滑动位置 保存
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200);
    },
    contentCilck(position) {
      // console.log(position);
      // 1.获取y值
      const positionY = -position.y;
      // 2. positionY 与获取的主题的值做对比
      // [0,2393,4535,6535,Namber.MAX-VALUE]
      // 方法二: 可以在里面多加一个值
      let length = this.themeTopYs.length;
      for (let i = 0; i < length; i++) {
        // this.currentIndex !== i 防止过于频繁
        if (
          (this.currentIndex !== i &&
            i < length - 1 &&
            positionY > this.themeTopYs[i] &&
            positionY <= this.themeTopYs[i + 1]) ||
          (i === length - 1 && positionY >= this.themeTopYs[i])
        ) {
          this.currentIndex = i;
          // console.log(this.currentIndex);
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
      // 显示
      // 1.显示箭头的
      this.isShow = -position.y > 700;
    },
    //  返回顶部
    backClick() {
      // 直接运用这个scroll得方法
      this.$refs.scroll.scrollTo(0, 0);
    },
    // 添加购物车
    addToCart() {
      // 1.获取购物车展示的信息
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;

      // 2.将商品添加到购物车里
      // this.$store.commit("addCart", product);
      this.$store.dispatch('addCart',product).then(res => {
       
        this.$toast.show(res,2000)
        
      })

      // 3.商品获取成功后添加购物车成功
    },
  },
};
</script>
<style scoped>
#detail {
  position: relative;
  z-index: 10;
  background: #fff;
  height: 100vh;
}

.detail-nav {
  position: relative;
  z-index: 9;
  background: #fff;
}

.content {
  height: calc(100% - 44px - 49px);
}
</style>