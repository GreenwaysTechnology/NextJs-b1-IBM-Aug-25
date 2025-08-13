'use client'

import { useRouter } from "next/navigation"

export function DashBoardNavigator() {
    const router = useRouter()
    return <div>
        <button onClick={() => {
            router.push('/services')
        }}>Services</button>
        <button onClick={() => {
            router.push('/about')
        }}>About</button>
    </div>
}