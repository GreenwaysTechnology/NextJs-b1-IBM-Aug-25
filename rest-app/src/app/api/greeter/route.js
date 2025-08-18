import { NextResponse } from "next/server";

export async function GET(request){
    //return response
    return NextResponse.json({message:'Welcome to REST API'})
}