import axios from 'axios'
const request = axios.create({
    baseURL: 'https://conduit.productionready.io'
})
// 请求拦截器
// 添加请求拦截器
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
    config.headers.Authorization = `Token token数据`
    return config;
  }, function (error) {
    // 对请求错误做些什么（指发送请求之前的错误）
    return Promise.reject(error);
  });
// 响应拦截器
export default request