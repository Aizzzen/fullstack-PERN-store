import axios from "axios";

// инстанс для запросов без авторизации
const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

// в header будет добавляться токен авторизации
const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

// автоматический токен для запроса authHost
// Интерцептор - функция, которая параметром принимает config
const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}
