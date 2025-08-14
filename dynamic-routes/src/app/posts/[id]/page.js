export async function fetchPostById(id) {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`
    const response = await fetch(url)
    return response.json()
}

export default async function PostDetailsPage(props) {
    const id = (await props.params).id
    const post = await fetchPostById(+id)
    return <div>
        <section>
            <h1>id:{post.id} userId: {post.userId}</h1>
            <p>{post.title}</p>
            <p>{post.body}</p>
        </section>
    </div>
}