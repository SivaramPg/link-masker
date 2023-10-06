'use client'

import { cn } from '@/utils/cn'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'

export function ResetButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="reset"
      className={cn(
        'w-1/3 bg-red-400 shadow-md rounded-md p-3 font-bold text-xl',
        pending && 'opacity-50 cursor-not-allowed'
      )}
      disabled={pending}
      aria-disabled={pending}
    >
      Reset
    </button>
  )
}
