//directive is nothing but instructions to the compiler

"use client" // directive

import { useState } from "react"

export function Counter() {
    const [value, setValue] = useState(0)

    return <>
        <h1>Value : {value}</h1>
        <button onClick={() => {
            setValue(value + 1)
            console.log(value)
        }}>+</button>
    </>
}