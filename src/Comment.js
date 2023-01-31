
import React from 'react'
import { faker } from '@faker-js/faker'

const Comment = ({name,day,star,comment}) => {
    return (
        <div className="comment">
            <a className="avatar" href='/'>
                <img alt='' src={faker.image.avatar()} />
            </a>
            <div className="content">
                <a className="author" href='/'>{name}</a>
                <div className="metadata">
                    <div className="date"> {day} days ago</div>
                    <div className="rating">
                        <i className="star icon"></i>
                        {star} Yildiz
                    </div>
                </div>
                <div className="text">
                   {comment}
                </div>
            </div>
        </div>
    )
}

export default Comment
