import React from 'react';
import { Post } from './Post';

export const PostsList = ({posts}) => {
    const postsContent = posts.map(post=>(
        <li><Post postInfo={post} /></li>
    ))

    return (
        <ul>
            {postsContent}
        </ul>
    )
}