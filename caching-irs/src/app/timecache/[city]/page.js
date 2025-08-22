
export const fetchCache = 'default-cache'

export async function getTime() {
    const url = 'https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata'
    const response = await fetch(url, {
        cache: 'force-cache', next: {
            tags: ['timerTag']
        }
    })
    const data = await response.json()
    return data
}

export default async function TimeCachePage() {
    const data = await getTime()
    return <>
        <h1 className="font-bold">Time Now: {new Date(data.dateTime).toLocaleTimeString()}</h1>
    </>
}