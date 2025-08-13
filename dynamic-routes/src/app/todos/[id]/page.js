import TODOS from "@/app/mock-data/todos";
import Link from "next/link";

export function fetchTodoById(id) {
    return TODOS.find(todo => todo.id === id)
}
export default async function TodosDetailsPage(props) {
    //console.log(props.params.id)
    const id = (await props.params).id
    const todo = fetchTodoById(+id)
    return <div>
        <h1>{todo.id}</h1>
        <h2>{todo.title}</h2>
        <h2>{todo.completed ? "Completed" : "InProgress"}</h2>
    </div>
}