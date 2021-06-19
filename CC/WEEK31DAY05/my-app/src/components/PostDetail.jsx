import React, { useState, useEffect } from "react";
import axios from 'axios'

const PostDetail = ({ id }) => {
  const [post, setPost] = useState({});

  //component will receive props
  useEffect(()=>{
    const fetchData = async()=>{
        const {data} = await axios({
            url:`https://jsonplaceholder.typicode.com/posts/${id}`,
            method:"Get"
        })
        console.log("SinglePost", data)
        setPost(data)
    }
    fetchData()
  },[id])

  return (
    <div>
      <h6>Id: {post.id} </h6>
      <h6>Title {post.title}</h6>
      <p>Body {post.body}</p>
    </div>
  );
};

export default PostDetail;
