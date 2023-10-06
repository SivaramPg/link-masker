'use client'

import { cn } from '@/utils/cn'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'

export function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      className={cn(
        'w-full bg-green-400 shadow-md rounded-md p-3 font-bold text-xl',
        pending && 'opacity-50 cursor-not-allowed'
      )}
      disabled={pending}
      aria-disabled={pending}
    >
      Submit
    </button>
  )
}
