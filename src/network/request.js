import axios from 'axios'
export function request(config){

 // 1.创建axios的实例
  const instancel = axios.create({
    url: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  // 2.axios 的拦截器
    instancel.interceptors.request.use(config => {
      console.log(config);
      // config有一些信息不符合服务器要求
      // 比如每次发送请求时，都希望在界面显示一个请求的图标
      // 某些网络请求，必须要携带一些特殊的信息
      return config
    },err => {
     
    })

    // 响应拦截
    instancel.interceptors.response.use(res => {
      // 拦截后需要将拦截的下来处理的结果返回
      return res.data
    },err => {
      console.log(err);
    })
  // 3发送真正网络请求
  return instancel(config)

 
}