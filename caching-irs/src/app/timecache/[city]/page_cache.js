
//route segment option
//disable cache for this page
// export const fetchCache = 'force-no-store'

export async function getTime() {
    const url = 'https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata'
    //next js has extended fetch api to support server cache.
    //{cache:'force-cache'} - option only for next js not for regular apis

    const response = await fetch(url, { cache: 'force-cache' })
    // const response = await fetch(url, { cache: 'no-store' })
    const data = await response.json()
    return data
}

export default async function TimeCachePage() {
    const data = await getTime()

    return <div className="m-20">
        <h1 className="font-bold">Time Now : {new Date(data.dateTime).toLocaleTimeString()}</h1>
    </div>
}