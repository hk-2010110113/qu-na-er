import { request } from './http'
export function getCityData() {
    return request({
        //url: '/api/index.json',
        url: '/static/mock/city.json', 
    })
}