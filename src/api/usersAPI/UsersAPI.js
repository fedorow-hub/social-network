import axios from "axios";

let instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "8a454f7a-1d4b-4172-946f-21aec38f0fd7"
    }
})

export const UserAPI = {
    getUsers (currentPage=1, pageSize=100) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    unfollow (id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
    follow (id) {
        return  instance.post(`follow/${id}`)
            .then(response => response.data)
    }
}

export const ProfileAPI = {
    getProfile (id) {
        return  instance.get(`profile/${id}`)
            .then(response => response.data)
    },
    getStatus (userID) {
        return  instance.get(`profile/status/${userID}`)
    },
    updateStatus (status) {
        return instance.put(`profile/status/`, {status: status})
    },
    updateFile (filePhoto) {
        let formData = new FormData();
        formData.append("image", filePhoto);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}

export const authorizationAPI = {
    authorization () {
        return instance.get('auth/me')
    },
    login (email, password, rememberMe = false) {
        return instance.post('auth/login', {email, password, rememberMe})
    },
    logout () {
        return instance.delete('auth/login')
    }
}




