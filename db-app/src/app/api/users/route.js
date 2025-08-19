import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req) {
    const users = await prisma.user.findMany()
    return NextResponse.json(users)
}
//post 
export async function POST(req) {
    try {
        const user = await req.json()
        const res = await prisma.user.create({
            data: user
        })
        return NextResponse.json(res, {
            status: 201, headers: {
                'Content-Type': 'application/json', 'url': '/api/create'
            }
        })
    }
    catch (err) {
        return NextResponse.json({ err: err }, { status: err.status })
    }
}