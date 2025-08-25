import { cookies } from "next/headers"

export async function POST(req) {
    const { username, password } = await req.json()

    //look up the user name and password from the db in realtime
    if (username === 'admin' && password === '123') {
        //generate sessionId in realtime but now we use dummy session Id
        const sessionToken = "user-123"
        //create cookie and append sessionId as part of cookie
        const cookieStore = await cookies()
        //set cookie information
        cookieStore.set("session", sessionToken, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            path: '/',
            maxAge: 60 * 60 //1 hour valid
        })
        return Response.json({ success: true })
    }
    return Response.json({ success: false, message: 'Invaild Credentials' }, { status: 401 })
}