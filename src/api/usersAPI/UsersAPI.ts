import axios from 'axios';

import { ContactsType, PhotosType, UserType } from '../../types/types';
import profile from "../../components/Content/ProfileContainer/Profile";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '8a454f7a-1d4b-4172-946f-21aec38f0fd7'
  }
});

export enum StatusCodeEnum {
  success = 0,
  error = 1
}

export enum StatusCodeCaptchaEnum {
  captcha = 10
}

type GetUsersResponseType = {
  items: Array<UserType>
  totalCount: number
  error: string
}

export const UserAPI = {
  getUsers(currentPage = 1, pageSize = 100) {
    return instance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
  },
  unfollow(id: number) {
    return instance.delete(`follow/${id}`)
      .then(response => response.data);
  },
  follow(id: number) {
    return instance.post(`follow/${id}`)
      .then(response => response.data);
  }
};

type GetProfileResponseType = {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: ContactsType
  photos: PhotosType
}

export const ProfileAPI = {
  getProfile(id: number) {
    return instance.get<GetProfileResponseType>(`profile/${id}`)
      .then(response => response.data);
  },
  getStatus(userID: number) {
    return instance.get<string>(`profile/status/${userID}`);
  },
  updateStatus(status: number) {
    return instance.put('profile/status/', { status: status });
  },
  updateFile(filePhoto: any) {
    const formData = new FormData();
    formData.append('image', filePhoto);
    return instance.put('profile/photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  },
  saveProfile(profile: any) {
    return instance.put(`profile`, profile);
  }
};

type AuthorisationResponseType = {
  data: {
    id: number
    email: string
    login: string
  }
  resultCode: StatusCodeEnum | StatusCodeCaptchaEnum
  messages: Array<string>
}

export const authorizationAPI = {
  authorization() {
    return instance.get<AuthorisationResponseType>('auth/me')
      .then(res => res.data);
  },
  getPhotoAuth(id: number) {
    return instance.get(`profile/${id}`)
        .then(res => res.data);
  },
  login(email: string, password: string, rememberMe = false) {
    return instance.post('auth/login', { email, password, rememberMe })
      .then(res => res.data);
  },
  logout() {
    return instance.delete('auth/login')
      .then(res => res.data);
  }
};




