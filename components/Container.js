import React from 'react'
import Link from 'next/link'

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
      <p className="font-mono text-black mb-5 md:max-w-[250px]">{ message }</p>
      <ul className="text-gray-500">
        { Object.entries(topics).map((topic) => {
          return (
            <li
              key={ topic[0] }
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
              <Link href={ topic[1] }>
                <a className="text-science-blue" target="_blank">{ topic[0] }</a>
              </Link>
            </li>
          )})
        }
      </ul>
    </div>
  )
}

export default Container
