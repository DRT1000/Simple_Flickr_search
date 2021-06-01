import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {getImages, getNextPage, ImagesStateType} from "../store/images-reducer";
import style from "./search.module.scss"
import Photo from "./photo";
import {Button, LinearProgress, TextField} from "@material-ui/core";

const Search = () => {

    const dispatch = useDispatch()
    const {photo, loading, page, pages} = useSelector<AppRootStateType, ImagesStateType>(state => state.data)

    const [title, setTitle] = useState<string>('')

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)

    const onClickHandler = () => dispatch(getImages(title))

    const onNextPageClick = () => dispatch(getNextPage(page + 1, title))

    const onPreviousPageClick = () => dispatch(getNextPage(page - 1, title))

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key === 'Enter' && dispatch(getImages(title))
    }

    // useEffect(() => {
    //     dispatch(getImages("izrael"))
    // }, [])


    return <>
        {loading && <LinearProgress color={"primary"}/>}
        <div className={style.pageSearch}>
            <h1>Start search images</h1>
            <div className={style.pageSearch__input}>
                <TextField
                    size="small"
                    className={style.pageSearch__input__input}
                    variant="outlined"
                    value={title}
                    onChange={onInputChange}
                    autoFocus
                    onKeyPress={onKeyPressHandler}
                />
                <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    onClick={onClickHandler}>
                    Search
                </Button>
                <div className={style.pagination}>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={onPreviousPageClick}
                        disabled={page === 1}>
                        Back
                    </Button>
                    <Button
                        className={style.pagination__pages}
                        disabled={true}>
                        page {page} of {pages}
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        disabled={page >= pages}
                        onClick={onNextPageClick}>
                        Forward
                    </Button>
                </div>
            </div>
        </div>
        <div className={style.photoContainer}>
            {photo.map(p =>
                <Photo key={p.id} img={p.url_n} title={p.title}/>
            )}
        </div>
    </>
}

export default Search;
