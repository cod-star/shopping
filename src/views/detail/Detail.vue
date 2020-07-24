<template>
  <div id="detail">
    <detail-nav class="detail-nav" />
    <scroll class="content" ref="scroll">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @imgLoad="imgload" />
      <detail-param-info :detail-params="DetailParams" />
      <detail-comment-info :comment-info="commentInfo" />
      <goods-list :goods="recommend" />
    </scroll>
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

import Scroll from "components/common/scroll/Scroll";
import GoodsList from "components/content/goods/GoodsList";

import { debounce } from "common/util.js";
import { itemListenerMixin } from "common/mixin.js";

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
    Scroll,
    GoodsList,
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
      const data = res.result;
      this.topImages = data.itemInfo.topImages;

      // 2.获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

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
  },
  mounted() {},
  methods: {
    imgload() {
      this.$refs.scroll.refresh();
    },
  },
};
</script>
<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background: #fff;
  height: 100vh;
}

.detail-nav {
  position: relative;
  z-index: 9;
  background: #fff;
}

.content {
  height: calc(100% - 44px);
}
</style>