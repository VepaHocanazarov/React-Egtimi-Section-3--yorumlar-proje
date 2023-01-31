
import React from 'react'
import { faker } from '@faker-js/faker'

const Comment = () => {
    return (
        <div className="comment">
            <a className="avatar" href='/'>
                <img alt='' src={faker.image.avatar()} />
            </a>
            <div className="content">
                <a className="author" href='/'>Vepa Hocanazarov</a>
                <div className="metadata">
                    <div className="date">2 days ago</div>
                    <div className="rating">
                        <i className="star icon"></i>
                        5 Yildiz
                    </div>
                </div>
                <div className="text">
                    Bu bir test mesajdir.
                </div>
            </div>
        </div>
    )
}

export default Comment
