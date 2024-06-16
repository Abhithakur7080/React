import axios from 'axios';
import React, { useEffect, useState } from 'react'

const DataFetching = () => {
    // const [posts, setPosts] = useState([]);
    const [post, setPost] = useState({});
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    // useEffect(() => {
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //     .then(res => {
    //         console.log(res.data);
    //         setPosts(res.data)
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })
    // }, [])

    // useEffect(() => {
    //     axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    //     .then(res => {
    //         console.log(res.data);
    //         setPost(res.data)
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })
    // }, [id])
    
    const handleClick = () => {
        setIdFromButtonClick(id)
    }
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(res => {
            console.log(res.data);
            setPost(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    }, [idFromButtonClick])
  return (
    <div>
        <h1 style={{textAlign: "center"}}>Posts</h1>
        <input type="text" value={id} onChange={e => setId(e.target.value)}/>
        <button type='button' onClick={handleClick}>Fetch Post</button>
        <div>{post.title}</div>
        {/* <ul>
            {
                posts.map(post => <li key={post.id}>{post.title}</li>)
            }
        </ul> */}
    </div>
  )
}

export default DataFetching