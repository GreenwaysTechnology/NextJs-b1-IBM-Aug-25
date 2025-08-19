'use client'
export default function Client(){
    return <div>
        <h1>client {process.env.NEXT_PUBLIC_API_URL}</h1>
    </div>
}