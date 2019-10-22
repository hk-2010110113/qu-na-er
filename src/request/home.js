import { request } from './http'

export function getHomeMultidata(params) {
    return request({
        //url: '/api/index.json',
        url: '/static/mock/index.json', 
        params:params
    })
}