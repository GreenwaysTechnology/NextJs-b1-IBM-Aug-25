import { createUser } from "@/app/actions/userAction"

export default async function UserPage(){
    const response = await createUser()
    return <div>
            {JSON.stringify(response)}
    </div>
}