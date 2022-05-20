const http = uni.$u.http

// post请求，获取菜单

// get请求，获取菜单，注意：get请求的配置等，都在第二个参数中，详见前面解释
export const getGoods = (params) => http.get('/api/index', {params})

export const userLogin = (data) => http.post('/api/auth/login', data)

export const getGoodsDetail = (data) => http.get('/api/goods', data)