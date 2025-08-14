'use client'

import { useEffect, useState } from "react"

export default function FetchPost() {
    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        async function fetchPosts() {
            const url = 'https://jsonplaceholder.typicode.com/posts'
            const response = await fetch(url);
            const posts = await response.json()
            setPosts(myposts => {
                return posts.concat(myposts)
            })
        }
        fetchPosts()
    }, [])

    return <>
        <ul>
            {posts.map(post=>{
                return <li key={post.id}>
                    <span>{post.title}</span>
                </li>
            })}
        </ul>
    </>

}