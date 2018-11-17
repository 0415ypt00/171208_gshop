/**
 * 暴露多个函数
 * **/
//1.根据经纬度获取位置详情
import ajax from './ajax'
export const reaAddress = (geohash)=>ajax(`/position/${geohash}`)

//2.获取食物分类额列表

export const reqFoodTypes = () => ajax('index_category');

//3.
export const reqShops = (longitude,latitude) => ajax('/shops',{longitude,latitude})
