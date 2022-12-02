export type PhotosType = {
    small: string | null
    large: string | null
}
export type PostsType = {
    id: number
    message: string
}
export type ContactsType = {
    github: string | null
    vk: string | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    website: string | null
    youtube: string | null
    mainLink: string | null
}
export type UserType = {
    name: string
    id: number
    photos: PhotosType
    status: string | null
    followed: boolean
}
export type DialogsDataType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string | null
    contacts: ContactsType
    photos: PhotosType
    aboutMy: string
}
