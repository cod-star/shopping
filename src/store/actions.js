export default {
  addCart(context,payload){
    return new Promise((resolve,reject) => {
      // let oldProduct = null
    // for(let item of state.cartList){
    //   if(item.iid === payload.iid){
    //     oldProduct = item
    //   }
    // }
    // 1.查找数组中是否有该商品
    let product = context.state.cartList.find(item => item.iid === payload.iid)

    // 2.判断Product
    if(product){
      // product.count += 1
      context.commit('addCounter',product)
      resolve('当前数量加1')
    }else{
      payload.count = 1
      // state.cartList.push(payload)
      context.commit('addToCart',payload)
      resolve("当前新增商品")
    }
    })
  }
}