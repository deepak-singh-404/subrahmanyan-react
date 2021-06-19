import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Post from './components/Post'
import PostDetails from './components/PostDetail'
import axios from 'axios'
import {Container, Col, Row, Button} from 'react-bootstrap'

function App() {
  const [posts, setPosts] = useState([])
  const [id,setId] = useState("")


  //ALternative of component did mount
  // it will run for the very first time, when the page render

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'Get'
      })
      console.log("posts", data)
      setPosts(data)
    }
    fetchData()
  }, [])
  return (
    <Container>
      <Row>
        <Header />
      </Row>
      <Row>
        <Col md={4}>
         <h5>Post Titles</h5>
          {posts.map(p=>
            <Post setId={setId} key={p.id} post={p} />
            )}
        </Col>
        <Col md={8}>
          {id && <> <h5>Post PostDetail</h5>
          <PostDetails id={id}  /></>}
        </Col>
      </Row>
    </Container>

  );
}

export default App;
