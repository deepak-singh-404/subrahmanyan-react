import React from 'react'
import {Button} from 'react-bootstrap'

const Post = ({post, setId}) => {
    return (
        <div>
            <Button className="m-2" onClick={()=>setId(post.id)}>{post.title}</Button>
        </div>
    )
}

export default Post
