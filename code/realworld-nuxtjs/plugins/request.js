import axios from 'axios'
export const request = axios.create({
  baseURL: 'https://conduit.productionready.io'
})
// 通过插件机制获取到上下文对象（query、params、req、res、app、store...）
// 插件导出函数必须作为 default 成员
export default ({ store }) => {

  // 请求拦截器
  // 任何请求都要经过请求拦截器，可以在这里做一些公共的业务处理，例如统一设置token
  request.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么

    // config的值
    // {
    //     url: '/api/tags',
    //     method: 'get',
    //     headers: {
    //       common: { Accept: 'application/json, text/plain, */*' },
    //       delete: {},
    //       get: {},
    //       head: {},
    //       post: { 'Content-Type': 'application/x-www-form-urlencoded' },
    //       put: { 'Content-Type': 'application/x-www-form-urlencoded' },
    //       patch: { 'Content-Type': 'application/x-www-form-urlencoded' }
    //     },
    //     baseURL: 'https://conduit.productionready.io',
    //     transformRequest: [ [Function: transformRequest] ],
    //     transformResponse: [ [Function: transformResponse] ],
    //     timeout: 0,
    //     adapter: [Function: httpAdapter],
    //     xsrfCookieName: 'XSRF-TOKEN',
    //     xsrfHeaderName: 'X-XSRF-TOKEN',
    //     maxContentLength: -1,
    //     maxBodyLength: -1,
    //     validateStatus: [Function: validateStatus]
    //   } 
    const {user} = store.state
    if(user && user.token) {
      config.headers.Authorization = `Token ${user.token}`
    }
    return config;
  }, function (error) {
    // 对请求错误做些什么（指发送请求之前的错误）
    return Promise.reject(error);
  });
}