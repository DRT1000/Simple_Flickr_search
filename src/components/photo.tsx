import React from 'react';

type PropsType = {
    title: string
    img: string
}

const Photo = (props: PropsType) => {
    return <div>
        <div>{props.title}</div>
        <img src={props.img} alt='IMG'/>
    </div>
};

export default Photo;