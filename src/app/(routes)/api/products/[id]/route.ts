import { NextRequest, NextResponse } from "next/server"
export async function GET(request : NextRequest,{ params }: { params: { id: number } }) {
    const res = await fetch(process.env.PATH_URL_BACKEND+`/products/${params.id}`, {
      next: { revalidate: 10 } ,
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const result = await res.json()
    return NextResponse.json(result)
  }
  