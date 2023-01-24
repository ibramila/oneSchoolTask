import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Dashboard() {
  const users = axios.create({
    baseURL: "http://localhost:8080"
  });
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    users.get('/users').then((response) => {
      setPosts(response.data);
    });
  }, []);
  return (
    <div style={{ display: "flex", gap: "50px" }}>

      {posts.map((post) => {
        return (
          <div style={{ border: "1px solid black" }} className="post-card" key={post.id}>
            <h2 className="post-title">{post.name}</h2>
            <p className="post-body">{post.surname}</p>
            <p className="post-body">{post.subject}</p>
            <p className="post-body">{post.email}</p>
            <p className="post-body">{post.message}</p>
          </div>
        );
      })}
    </div>
  )
}

export default Dashboard