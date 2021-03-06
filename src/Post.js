import { Avatar } from '@material-ui/core';
import React from 'react';
import InputOption from './InputOption';
import "./Post.css";

import {  ChatBubbleOutlineOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from '@material-ui/icons';

function Post({name, description, message, photoURL}) {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar />
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>  

            <div className="post__body">
                <p>{message}</p>
            </div>  

            <div className="post__buttons">
            <InputOption Icon={ThumbUpAltOutlined} title="Like" color="gray"/>
            <InputOption Icon={ChatBubbleOutlineOutlined} title="Comment" color="gray"/>
            <InputOption Icon={ShareOutlined} title="Share" color="gray"/>
            <InputOption Icon={SendOutlined} title="Send" color="gray"/>
            </div>        
        </div>
    )
}

export default Post
