import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {getImages, ImagesStateType} from "../store/images-reducer";
import style from "../App.module.scss";
import Photo from "./photo";

const Search = () => {
    const dispatch = useDispatch()
    const {photo} = useSelector<AppRootStateType, ImagesStateType>(state => state.data)

    // useEffect(() => {
    //     dispatch(getImages(tag))
    // }, [])

    const [title, setTitle] = useState<string>('')

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)

    const onClickHandler = () => dispatch(getImages(title))

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key === 'Enter' && dispatch(getImages(title))
    }


    return (
        <div className={style.rect}>
            <input value={title} onChange={onInputChange} onKeyPress={onKeyPressHandler}/>
            <button onClick={onClickHandler}>Search</button>
            <div>
                {photo.map(p =>
                    <Photo key={p.id} img={p.url_n} title={p.title}/>
                )}
            </div>
        </div>
    )
}

export default Search;
