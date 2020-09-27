import React from 'react';

export const Post = ({postInfo}) => {
    return(
        <div>
            <div>
                <label>Title: {postInfo.title}</label>
            </div>
            <div>
                <label>Body: {postInfo.body}</label>
            </div>
        </div>
    )
}