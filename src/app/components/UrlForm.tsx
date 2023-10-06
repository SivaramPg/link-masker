'use client'

// @ts-ignore
import { experimental_useFormState as useFormState } from 'react-dom'

import { ResetButton } from './ResetButton'
import { SubmitButton } from './SubmitButton'

import { shortenUrlAction } from '../action'
import { LinkElement } from './LinkElement'
import { useEffect, useRef } from 'react'

const initialState = {
  uniqueId: null,
}

export function UrlForm() {
  const [state, formAction] = useFormState(shortenUrlAction, initialState)
  const ref = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state?.uniqueId) {
      ref?.current?.reset()
    }
  }, [state?.uniqueId])

  return (
    <form
      ref={ref}
      action={formAction}
      className="mt-20 w-full max-w-screen-sm flex flex-col gap-4 items-center justify-center"
    >
      <input
        name="url"
        id="url"
        type="url"
        required
        className="w-full p-3 py-5 rounded-md font-bold text-xl border-2 border-slate-500 shadow-md"
        placeholder="Enter the URL to be masked ..."
      />
      <div className="w-full flex gap-4">
        <SubmitButton />
        <ResetButton />
      </div>
      {!!state?.uniqueId && <LinkElement uniqueId={state.uniqueId} />}
    </form>
  )
}
