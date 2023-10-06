import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="sticky left-0 top-0 right-0 bg-white w-full h-16 shadow-md font-sans z-50">
      <nav className="h-full container px-4 mx-auto flex items-center justify-between gap-4">
        <Link href="/" className="inline-flex items-center gap-2">
          <div className="font-black text-2xl md:text-3xl hover:drop-shadow-md flex gap-2 items-center justify-center">
            <Image
              src="/icons/mask.svg"
              alt=""
              width={40}
              height={40}
              fetchPriority="high"
              loading="eager"
            />
          </div>
        </Link>
      </nav>
    </header>
  )
}
