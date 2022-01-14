import React, { useState } from 'react'

export default function Spellbook() {
  const [ toggle, setToggle ] = useState(false)

  function toggleDrawer() {
    setToggle(!toggle)
  }

  return (
    <>
      <div
        className={
          `
            overflow-hidden
            font-mono
            mb-2
            min-w-[250px]
            md:max-w-[300px]
            ${toggle? 'h-[365px]' : 'h-[70px]' }
            border-4
            hover:text-science-blue
            hover:border-science-blue
            transition-all
          `
        }
      >
        <h2 className="font-mono text-lg font-bold p-4 mb-3 cursor-pointer" onClick={ toggleDrawer }>
          { toggle? '🔼' : '🔽' } Spellbook
        </h2>
        <div className="px-4">
          <p className="font-mono text-black mb-5 max-w-[250px]">Do my services interest you? 🔮</p>
          <ul className="text-gray-500">
            <li className="transition-colors hover:text-science-blue">Next.js</li>
            <li className="transition-colors hover:text-science-blue">Ruby on Rails</li>
            <li className="transition-colors hover:text-science-blue">tailwindcss</li>
            <li className="transition-colors hover:text-science-blue">HTML/CSS/JS</li>
            <li className="transition-colors hover:text-science-blue">Stack Overflow</li>
            <li className="transition-colors hover:text-science-blue">YouTube</li>
            <li className="transition-colors hover:text-science-blue">Google</li>
            <li className="transition-colors hover:text-science-blue">Tarot Readings</li>
          </ul>
        </div>
      </div>
    </>
  )
}