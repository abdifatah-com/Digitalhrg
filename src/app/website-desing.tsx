'use client'

import Image from 'next/image'

const WebsiteDesign = () => {
  return (
    <div className="text-white">
      {/* Hero Section */}
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <h1 className="text-4xl md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
          Website Design <br /> that works
        </h1>
        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
          Creating, designing and developing websites that work for your business.
        </p>
      </div>

      {/* Gallery Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10 px-4 md:px-8">
        <div>
          <Image
            src="/website1.jpeg"
            width={500}
            height={500}
            priority
            className="h-auto max-w-full rounded-lg"
            alt="Website Project 1"
          />
        </div>
        <div>
          <Image
            src="/website2.jpeg"
            width={500}
            height={500}
            priority
            className="h-auto max-w-full rounded-lg"
            alt="Website Project 2"
          />
        </div>
        <div>
          <Image
            src="/website3.jpeg"
            width={500}
            height={500}
            priority
            className="h-auto max-w-full rounded-lg"
            alt="Website Project 3"
          />
        </div>
        <div>
          <Image
            src="/website4.jpeg"
            width={500}
            height={500}
            priority
            className="h-auto max-w-full rounded-lg"
            alt="Website Project 4"
          />
        </div>
      </div>
    </div>
  )
}

export default WebsiteDesign
