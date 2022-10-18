import axios from "axios";

let instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "8a454f7a-1d4b-4172-946f-21aec38f0fd7"
    }
})

export const getUsers = (currentPage=1, pageSize=100) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
}

export const authorization = () => {
    return instance.get('auth/me')
        .then(response => response.data)
}

export const  unfollowAPI = (id) => {
    return instance.delete(`follow/${id}`)
        .then(response => response.data)
}

export const  followAPI = (id) => {
    return  instance.post(`follow/${id}`)
        .then(response => response.data)
}

export const  getProfileAPI = (id) => {
    return  instance.get(`profile/${id}`)
        .then(response => response.data)
}

