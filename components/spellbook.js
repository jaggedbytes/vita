import React from 'react'
import Link from 'next/link'

function Captivate(params) {
  console.log(params) 
}

// transition-all
// sm:hover:scale-125
// sm:hover:p-2
// sm:hover:border-4
// sm:hover:border-black
// sm:hover:bg-white
// sm:hover:translate-x-10

const Spellbook = (props) => {
  console.log(props)

  return (
    <>
      <div
        className="
          basis-3/12
          font-mono
          mb-8
          mr-8
          min-w-[200px]
        "
      >
        <button
          className="font-mono
            text-lg
            font-bold
            p-4
            mb-3
            border-4
          hover:text-science-blue
          hover:border-science-blue
            transition-all
          "
          onClick={ Captivate(id) }
        >
          { id }
          Spellboo
        </button>
        <div id="spellbook" style={{ display: 'none' }}>
          <p className="font-mono text-black text-sm md:text-base mb-2 max-w-[250px]">My services available to you 🔮</p>
          <ul className="text-sm md:text-base text-gray-500">
            <li className="transition-colors hover:text-science-blue">
              <Link href="https://nextjs.org/">
                <a target="_blank">Next.js</a>
              </Link>
            </li>
            <li className="transition-colors hover:text-science-blue">
              <Link href="https://rubyonrails.org/">
                <a target="_blank">Ruby on Rails</a>
              </Link>
            </li>
            <li className="transition-colors hover:text-science-blue">
              <Link href="https://tailwindcss.com/">
                <a target="_blank">tailwindcss</a>
              </Link>
            </li>
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

export default Spellbook