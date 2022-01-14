import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

function Intro() {
  return (
    <>
      <Head>
        <title>Jagged Bytes</title>
        <meta
          name="description"
          content="A collection of thoughts, experiments, and experiences"
        />
        <link
          rel="icon"
          href="/favicon.png"
        />
      </Head>
      <div className="basis-full">
        <Image 
          src="/jagged-bytes-logo.svg"
          alt="Logo"
          width={ 150 }
          height={ 100 }
        />
      </div>
      <div className="flex-initial mt-4 w-1/2 min-w-[300px] max-w-[500px]">
        <h1 className="font-mono text-2xl font-bold mb-4">
          Welcome to the digital brain bits of Jacky Giang, a.k.a. <span
            className="
              inline-block
              relative
              min-w-max
              text-science-blue
              after:content-['']
              after:absolute
              after:bottom-0
              after:left-0
              after:w-full
              after:h-1
              after:bg-science-blue
              after:transition-transform
              after:scale-x-100
              after:origin-bottom-left
            ">
              <Link href="https://twitter.com/0xBeanJackson">
                <a target="_blank">Bean Jackson.</a>
              </Link>
          </span>
        </h1>
        <p className="font-mono text-lg">On the road to becoming the best web developer that I can be while recklessly exposing myself to the wonders of Web 3.0. Am I doing too much? I sure hope so.</p>
      </div>
    </>
  )
}

export default Intro