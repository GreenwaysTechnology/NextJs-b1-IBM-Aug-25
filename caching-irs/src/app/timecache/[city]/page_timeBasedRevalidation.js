
//route segment option
// export const fetchCache = 'default-cache'
export const revalidate = 2
export const fetchCache = 'default-cache'

export async function getTime() {
    const url = 'https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata'
    //cache will be cleared after every 2sec
    // const response = await fetch(url, { cache: 'force-cache', next: { revalidate: 2 } })
    const response = await fetch(url, { next: {revalidate: 2}})
    const data = await response.json()
    return data
}

export default async function TimeCachePage() {
    const data = await getTime()

    return <div className="m-20">
        <h1 className="font-bold">Time Now : {new Date(data.dateTime).toLocaleTimeString()}</h1>
    </div>
}