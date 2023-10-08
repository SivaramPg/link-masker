'use client'

import Image from 'next/image'
import { useClipboard } from 'use-clipboard-copy'

export function LinkElement({ uniqueId }: { uniqueId: string }) {
  const { copy, copied } = useClipboard({ copiedTimeout: 500 })

  return (
    <div className="w-full h-auto flex items-center justify-between border-2 border-black bg-gray-100 rounded-md overflow-hidden">
      <div className="bg-blue-400 text-white w-fit h-full p-4 font-bold text-xl border-r-2 border-black">
        Result
      </div>

      <a
        href={`/m/${uniqueId}`}
        target="_blank"
        className="p-4 underline underline-offset-4 text-indigo-700 font-bold text-lg truncate"
      >
        {new URL(`/m/${uniqueId}`, window.location.origin)
          .toString()
          .replaceAll('https://', '')}
      </a>
      {copied ? (
        <Image
          src={'/icons/clipboard-tick.svg'}
          alt="copy-success"
          width={32}
          height={32}
          className="mr-2 cursor-normal"
          priority
        />
      ) : (
        <Image
          src={'/icons/copy.svg'}
          alt="copy-success"
          width={32}
          height={32}
          className="mr-2 cursor-pointer"
          priority
          onClick={() =>
            copy(new URL(`/m/${uniqueId}`, window.location.href).toString())
          }
        />
      )}
    </div>
  )
}
