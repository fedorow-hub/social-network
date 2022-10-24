export type PhotosType = {
    small: string | null
    large: string | null
}
export type PostsType = {
    id: number
    message: string
}
export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
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
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}