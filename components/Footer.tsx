import {PortableText, PortableTextComponents} from '@portabletext/react'

import Link from 'next/link'

const components: PortableTextComponents = {
  block: {
    normal: ({children}) => <p className="font-mono text-xs text-left leading-relaxed">{children}</p>,
  },
  marks: {
    link: ({value, children}) =>
      <a href={value?.href} target="_blank" rel="noreferrer noindex nofollow" className="text-science-blue underline">
        {children}
      </a>
  },
}

export default function Footer({props}) {
  return (
    <>
      <div className="mt-10 mx-5 text-gray-400">
        <PortableText
          value={props[0].description[0]}
          components={components}
        />
      </div>
    </>
  )
}