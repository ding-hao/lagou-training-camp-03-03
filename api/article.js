import {request} from '@/plugins/request'
// 获取文章页签数据
export const getArticle = (params) => {
    return request({
        method: 'GET',
        url: '/api/articles',
        params
    })
}
// 获取你关注的文件页签数据
export const getFeedArticle = (params) => {
    return request({
        method: 'GET',
        url: '/api/articles/feed',
        // 数据格式： Token空格jwt.token.here
        headers: {
            Authorization: `Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTIxNjE3LCJ1c2VybmFtZSI6ImRhbW9uX2RpbmciLCJleHAiOjE2MDk2NzkwNTV9.TWgDytp3INbbS9xCrs7oqt_6rcznG6a7fMLEQdiGMLs`
        },
        params
    })
}
// 点赞
export const addFavorited = (slug) => {
    return request({
        method: 'POST',
        url: `/api/articles/${slug}/favorite`
    })
}
// 取消点赞
export const deleteFavorited = (slug) => {
    return request({
        method: 'DELETE',
        url: `/api/articles/${slug}/favorite`
    })
}
// 获取文章详情
export const getArticles = slug => {
  return request({
    method: 'GET',
    url: `/api/articles/${slug}`
  })
}