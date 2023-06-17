import {PortableText, PortableTextComponents} from '@portabletext/react'

import Head from 'next/head'
import Link from 'next/link'
import Logo from './assets/Logo'

const components: PortableTextComponents = {
  block: {
    h1: ({children}) => <h1 className="font-mono text-2xl font-bold mb-8">{children}</h1>,
    normal: ({children}) => <p className="font-mono text-lg">{children}</p>,
  },
  marks: {
    link: ({value, children}) =>
      <a
        href={value?.href}
        target="_blank"
        rel="noreferrer noindex nofollow"
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
        "
      >
        {children}
      </a>
  },
}

export default function Intro({props}) {
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

      <Logo />
      
      <div className="flex-initial mt-4 mx-5 w-1/2 min-w-[300px] max-w-[500px]">
        {props[0].description.map((content, index) =>
          <PortableText
            key={"header-" + index}
            value={content}
            components={components}
          />
        )}
      </div>
    </>
  )
}