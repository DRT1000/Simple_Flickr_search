import {Dispatch} from "redux";
import {imagesApi, ImageType, PhotosType} from "../api/api";

export type ImagesStateType = {
    loading: boolean
    photo: Array<ImageType>
    pages: number
    perpage: number
    total: null | number
    tag: string
}

const initialState: ImagesStateType = {
    loading: false,
    tag: "Canada",
    photo: [],
    pages: 1,
    perpage: 20,
    total: null
}

type ActionType = ReturnType<typeof setImages> | ReturnType<typeof setLoading>

export const imagesReducer = (state: ImagesStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case "SET-IMAGES":
            return {
                ...state,
                photo: action.data.photo.map(p => p),
                pages: action.data.pages,
                perpage: action.data.perpage,
                total: action.data.total
            }
        case "SET-LOADING":
            return {...state, loading: action.loading}
        default :
            return state
    }
}


//AC
export const setImages = (data: PhotosType) => ({type: 'SET-IMAGES', data} as const)
export const setLoading = (loading: boolean) => ({type: 'SET-LOADING', loading} as const)


//TC

export const getImages = (title: string) => {
    return (dispatch: Dispatch) => {
        dispatch(setLoading(true))
        imagesApi.getPhotos(title).then(res => {
            console.log(res.data)
            dispatch(setImages(res.data.photos))
            dispatch(setLoading(false))
        })

    }
}

