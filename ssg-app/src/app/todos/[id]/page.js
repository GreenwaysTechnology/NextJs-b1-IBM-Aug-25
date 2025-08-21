export async function fetchTodosByid(id) {
    const url = `https://jsonplaceholder.typicode.com/todos/${id}`
    const response = await fetch(url)
    return response.json()
}
export async function fetchTodos() {
    const url = `https://jsonplaceholder.typicode.com/todos`
    const response = await fetch(url)
    return response.json()
}

export default async function TodoDetailPage(props) {
    const todo = await fetchTodosByid(Number(props.params.id))
    return <div>
        <h2>id {todo.id}</h2>
        <p>title {todo.title}</p>
        <p>Status {todo.completed ? 'Ok' : 'Not Completed'}</p>
    </div>
}
// this function only called when you run npm run build command
export async function generateStaticParams() {
    const todos = await fetchTodos()
    //generate html pages for all todos(200 todos), if you have 200 records, 200 html files
    //to be generated
    return todos.map(todo => {
        let id = todo.id.toString()
        return {
            id:id //here id is going to be the name of the html file which is generated during build
        }
    })
}