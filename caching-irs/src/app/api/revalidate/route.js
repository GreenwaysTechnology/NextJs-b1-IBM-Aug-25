import { revalidateTag } from "next/cache"
import { NextResponse } from "next/server"

export async function GET(request, { params }) {
    //get the tag of the revalidation
    const tag = request.nextUrl.searchParams.get('timerTag') || 'timerTag'
    //call revalidate api
    revalidateTag(tag)
    return NextResponse.json({ revalidate: true, now: new Date(), cache: 'no-store' })

}
