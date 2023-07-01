import React from 'react'
import { forwardRef } from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import InputOption from './InputOption'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

const Post=forwardRef(({name,description, message, photUrl},ref) =>{
  return (
    <div ref={ref} className='post'>
        <div className='post__header'>
        <Avatar src={photUrl}></Avatar>
            <div className='post__info'>
                <h2>
                   {name}
                </h2>
                <p>{description}</p>
            </div>
        </div>

        <div className='post__body'>
            <p>{message}</p>
        </div>
        <div className='post__buttons'>
            <InputOption Icon={ThumbUpAltIcon} title="Like" color="grey"></InputOption>
            <InputOption Icon={InsertCommentIcon} title="Comment" color="grey"></InputOption>
            <InputOption Icon={ShareIcon} title="Share" color="grey"></InputOption>
            <InputOption Icon={SendIcon} title="Send" color="grey"></InputOption>
        </div>
    </div>
  )
})

export default Post