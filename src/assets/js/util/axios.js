import axios from 'axios'

function request(config){
  console.log(config,'--------config');
  // 创建axios实例
  const instance = axios.create({
    // baseUrl,
    timeOut: 5000

  })

  // 发送真正的网络请求
  return instance(config)
}
// request();
// 调用
// import {request} from ''
// request({
//   url:''
// }).then(res => {
//   console.log(res);
// }).catch(err => console.log(err))