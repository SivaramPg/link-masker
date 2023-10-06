import Image from 'next/image'

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-gray-300">
      <div className="container mx-auto px-4 py-20 flex flex-col gap-4 items-center justify-center">
        <h1 className="font-black text-7xl bg-gradient-to-l from-indigo-500 to-blue-500 bg-clip-text text-transparent inline-flex flex-col items-start justify-center">
          <Image
            src="/icons/mask.svg"
            alt=""
            width={105}
            height={105}
            fetchPriority="high"
            loading="eager"
            className="bg-gray-300 rounded-full -mb-6"
          />
          Link Masker
        </h1>
        <h2 className="font-medium text-xl">
          Mask your URLs in a fun & fast way!
        </h2>
      </div>
    </main>
  )
}
