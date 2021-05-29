import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.flickr.com/services',
    params: {
        method: 'flickr.photos.search',
        api_key: '5bd0084199fb2153b0c04ca5e20d8020',
        tags: "",
        extras: 'url_n, owner_name, date_taken, views',
        page: 1,
        format: 'json',
        nojsoncallback: 1,
        per_page: 30,
    }
})

export const imagesApi = {
    getPhotos(tag: string) {
        return instance.get<ResponseType>('/rest', {params: {tags: tag}})
    }
}


type ResponseType = {
    photos: PhotosType,
    status: string
}

export type PhotosType = {
    page: number
    pages: number
    perpage: number
    photo: Array<ImageType>
    total: number
}


export type ImageType = {
    datetaken: string
    datetakengranularity: string
    datetakenunknown: string
    farm: number
    height_n: number
    id: string
    isfamily: number
    isfriend: number
    ispublic: number
    owner: string
    ownername: string
    secret: string
    server: string
    title: string
    url_n: string
    views: string
    width_n: number
}