//component :You can export using export or export default
import TODOS from "@/app/mock-data/todos"
// import TODOS from "../../mock-data/todos"

export function TodoList() {
    return <ul>
        {TODOS.map(todo => {
            return <li key={todo.id}>
                <span>{todo.title} {todo.status ? "Completed" : "In Progress"}</span>
            </li>
        })}
    </ul>
}