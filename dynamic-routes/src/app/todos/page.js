import TODOS from "@/app/mock-data/todos";
import Link from "next/link";

export function fetchTodos() {
    return TODOS
}

export default function TodoPage() {
    const todos = fetchTodos()

    return <>
        <ul>
            {todos.map(todo => {
                return <li key={todo.id}>
                    <Link href={{ pathname: `/todos/${todo.id}` }}>
                        <span>{todo.title}</span>
                    </Link>
                </li>
            })}
        </ul>
    </>
}