import React, { Suspense } from 'react'


const Welcome = React.lazy(() => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 10000, import('../components/greeter'))
    })
})

export default function Dashboard() {

    return <div>
        <h1>Header</h1>
        <p>This is static content</p>
        {/* Welcome is delayed content for that only i wan to wrap suspense the rest i dont */}
        <Suspense fallback={<h1>Welcome is Loading...</h1>}>
            <Welcome />
        </Suspense>
        <p>This is static content</p>
        <h1>Footer</h1>

    </div>
}