//'use client'

import { createUser } from "@/app/actions/userAction"

//client code
// export default function UserForm() {
//     async function handleSubmit(evt) {
//         evt.preventDefault()
//         //invoke server actions
//         try {
//             //read form values
//             const user = {
//                 name: evt.target.name.value,
//                 email: evt.target.email.value
//             }
//             await createUser(user)

//         }
//         catch (err) {

//         }
//     }

//     return <form onSubmit={handleSubmit}>
//         <div>
//             <input type="text" name="name" placeholder="Name" required />
//         </div>
//         <div>
//             <input type="email" name="email" placeholder="Email" required />
//         </div>
//         <div>
//             <button type="submit">Create User</button>
//         </div>
//     </form>
// }

//server component
export default function UserForm() {

    return <form action={createUser} method="POST">
        <div>
            <input type="text" name="name" placeholder="Name" required />
        </div>
        <div>
            <input type="email" name="email" placeholder="Email" required />
        </div>
        <div>
            <button type="submit">Create User</button>
        </div>
    </form>
}
