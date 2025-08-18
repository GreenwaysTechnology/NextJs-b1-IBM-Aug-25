import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req) {
    const users = await prisma.user.findMany()
    return NextResponse.json(users)
}