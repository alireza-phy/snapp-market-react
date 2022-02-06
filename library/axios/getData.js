import axios from 'axios'

export const getCategory = (categoryName) => {
    return new Promise((resolve , reject ) => {
        axios.get(`/api/category/${categoryName}`)
            .then( res => {
                resolve(res.data)
            })
            .catch( e => {
                reject(e.response)
            })
    })
}
//
// export const getCategoryItems = (category) => {
//     return new Promise((resolve , reject ) => {
//         axios.get(`/api/categoryItems/${category}`)
//             .then( res => {
//                 resolve(res.data)
//             })
//             .catch( e => {
//                 reject(e.response)
//             })
//     })
// }



export const getAssortmentData = () => {
    return new Promise((resolve , reject ) => {
        axios.get('/api/assortmentCard')
            .then( res => {
                resolve(res.data)
            })
            .catch( e => {
                reject(e.response)
            })
    })
}