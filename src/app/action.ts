'use server'

import { kv } from '@vercel/kv'
import { nanoid } from 'nanoid'

export async function shortenUrlAction(prevState: any, formData: FormData) {
  try {
    const url = formData.get('url')

    const uniqueId = nanoid()

    await kv.set(uniqueId, url?.toString(), {
      ex: 60 * 60 * 24 * 30, // Expires in 30 days
      nx: true,
    })

    return { uniqueId }
  } catch (error) {
    return { message: 'Failed to shorten' }
  }
}
