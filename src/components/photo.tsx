import React from 'react';
import style from './photo.module.scss'

type PropsType = {
    title: string
    img: string
}

const Photo = React.memo((props: PropsType) => {
    return <div className={style.container}>
        <div className={style.container__img}>
            <img src={props.img} alt='IMG'/>
        </div>
        <div className={style.container__title}>{props.title}</div>
    </div>
})

export default Photo;