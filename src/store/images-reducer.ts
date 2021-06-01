import {Dispatch} from "redux";
import {imagesApi, ImageType, PhotosType} from "../api/api";

export type ImagesStateType = {
    page: number
    loading: boolean
    photo: Array<ImageType>
    pages: number
    perPage: number
    total: null | number
    tag: string
}

const initialState: ImagesStateType = {
    page: 1,
    loading: false,
    tag: "",
    photo: [],
    pages: 1,
    perPage: 20,
    total: null
}

type ActionType = ReturnType<typeof setImages>
    | ReturnType<typeof setLoading>
    | ReturnType<typeof setPage>
    | ReturnType<typeof setTag>

export const imagesReducer = (state: ImagesStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case "SET-IMAGES":
            return {
                ...state,
                photo: action.data.photo.map(p => p),
                pages: action.data.pages,
                perPage: action.data.perpage,
                total: action.data.total
            }
        case "SET-LOADING":
            return {...state, loading: action.loading}
        case "SET-PAGE":
            return {...state, page: action.page}
        case "SET-TAG":
            return {...state, tag: action.tag}
        default :
            return state
    }
}


//AC
export const setImages = (data: PhotosType) => ({type: 'SET-IMAGES', data} as const)
export const setLoading = (loading: boolean) => ({type: 'SET-LOADING', loading} as const)
export const setPage = (page: number) => ({type: 'SET-PAGE', page} as const)
export const setTag = (tag: string) => ({type: 'SET-TAG', tag} as const)


//TC
export const getImages = (title: string) => {
    return (dispatch: Dispatch) => {
        dispatch(setLoading(true))
        imagesApi.getPhotos(title)
            .then(res => {
                console.log(res.data)
                dispatch(setImages(res.data.photos))
                dispatch(setPage(1))
                dispatch(setLoading(false))
            })
    }
}

export const getNextPage = (page: number, title:string) => {
    return (dispatch: Dispatch) => {
        dispatch(setLoading(true))
        imagesApi.nextPage(title, page)
            .then(res => {
                console.log(res.data)
                dispatch(setImages(res.data.photos))
                dispatch(setPage(page))
                dispatch(setLoading(false))
            })
    }
}

