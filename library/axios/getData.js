import axios from 'axios'

export const getCategory = (categoryName) => {
    return new Promise((resolve , reject ) => {
        axios.get(`api/category/${categoryName}`)
            .then( res => {
                resolve(res.data)
            })
            .catch( e => {
                reject(e.response)
            })
    })
}