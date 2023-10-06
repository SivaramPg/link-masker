import { NextResponse } from 'next/server'
import { kv } from '@vercel/kv'

export const runtime = 'edge'

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const slug = params.slug

    if (slug.length < 1 || slug.length > 21) throw new Error('Invalid Request')

    const url = await kv.get<string>(slug)

    if (!url) throw new Error('Invalid Request')

    return NextResponse.redirect(url, { status: 308 })
  } catch (error: any) {
    return new NextResponse(error?.message || 'Error', { status: 400 })
  }
}
