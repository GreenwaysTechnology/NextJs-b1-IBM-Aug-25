'use client'

import useSWR from 'swr'

function fetcher(...args) {
    return fetch(...args).then(res => res.json())
}
export default function FetchPostsUsingSWR() {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const { data, error, isLoading } = useSWR(url, fetcher)

    if (error) {
        return <div>
            <h1>Failed To Return</h1>
        </div>
    }
    if (isLoading) {
        return <h1>Loading....</h1>
    }
    return <div>
        {data.map(post => {
            return <div key={post.id}>
                <h2>{post.title}</h2>
            </div>
        })}
    </div>
}