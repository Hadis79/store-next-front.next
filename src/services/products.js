import http from "./http"
import { url } from './configUrl.json'

//get data for homePage carousell
export const getProductsApi = () => {
    return  http.get(`${url}/products`)
}

//get data in category for other routes
export const getProductsCategoryApi = ({ api }) => {
    return  http.get(`${url}/products/category/${api}`)
}