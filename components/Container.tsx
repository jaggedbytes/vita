import {PortableText, PortableTextComponents} from '@portabletext/react'

import React from 'react'
import Link from 'next/link'

const components: PortableTextComponents = {
  block: {
    normal: ({children}) => <p className="font-mono text-black md:max-w-[250px]">{children}</p>,
  },
  marks: {
    link: ({value, children}) => 
      <a href={value?.href} target="_blank" rel="noreferrer noindex nofollow" className="text-science-blue">
        {children}
      </a>,
  },
}

function Container(props) {
  const { name, heightOverride, message, topics, isGrid, hasLinks } = props

  return (
    <div
        className={
          `
            overflow-hidden
            font-mono
            p-4
            mb-2
            min-w-[300px]
            md:w-max
            ${ heightOverride }
            bg-white
            border-4
            hover:text-science-blue
            hover:border-science-blue
            transition-all
          `
        }
    >
      <h2 className="font-mono text-lg font-bold mb-3">{ name }</h2>
      <ul className="text-gray-500">
        { topics.map((listItem, index) => {
          return (
            <li
              key={listItem.name + "-containerListItem-" + index}
              className="
                underline
                last:mt-2
                last:text-2xl
                last:no-underline
                last:transition-all
                last:hover:translate-x-2
                last:hover:scale-105
              "
            >
              <PortableText
                value={listItem.description[0]}
                components={components}
              />
            </li>
          )})
        }
      </ul>
    </div>
  )
}

export default Container
