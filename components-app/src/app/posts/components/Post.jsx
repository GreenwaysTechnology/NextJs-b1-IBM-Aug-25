'use client'

import { useState } from "react"

export default function Post() {
    const [posts, setPosts] = useState([{
        id: 1, title: 'React', body: 'This is React Post'
    },
    {
        id: 2, title: 'Next.js', body: 'This is Next.js Post'
    }
    ])
    const [isEditing, setIsEditing] = useState(false)

    const [form, setForm] = useState({ title: '', body: '', id: null })

    const handleSubmit = (evt) => {
        //dont reload the form by submitting form automatically, we have to prevent 
        evt.preventDefault()
        //here you have handle either add or update logic
        isEditing ? updatePost() : addPost()
    }
    const addPost = () => {
        //new Post
        const newPost = { id: Date.now(), title: form.title, body: form.body }
        console.log(newPost)
        //add new Post into an Array
        setPosts([...posts, newPost])
        setForm({ title: '', body: '', id: null })
    }
    const updatePost = () => {
        console.log('update Post')
        setPosts(posts.map(post => (post.id === form.id ? form : post)))
        setForm({ title: '', body: '', id: null })
        setIsEditing(false)
    }

    //handle Edit
    const handleEdit = (post) => {
        console.log(post)
        setIsEditing(true)
        setForm({ title: post.title, body: post.body, id: post.id })

    }
    const handleDelete = (id) => {
        console.log('Delete')
        setPosts(posts.filter(post => post.id !== id))
    }
    return <div>
        {/* Form : To add new Post or Edit existing Post */}
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" onChange={e => {
                    setForm({ ...form, title: e.target.value })
                }} placeholder="Title" value={form.title} />
            </div>
            <div>
                <textarea onChange={e => {
                    setForm({ ...form, body: e.target.value })
                }} placeholder="Body" value={form.body} />
            </div>
            <div>
                <button type="submit">{isEditing ? "Update" : "Add"} Post</button>
            </div>
        </form>

        {/* List of Posts */}
        <ul>
            {posts.map(post => {
                return <li key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <button onClick={() => {
                        handleEdit(post)
                    }}>Edit</button>
                    <button onClick={() => {
                        handleDelete(post.id)
                    }}>Delete</button>
                </li>
            })}
        </ul>
    </div>
}