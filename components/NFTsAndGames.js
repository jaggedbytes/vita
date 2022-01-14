import React, { useState } from 'react'
import Link from 'next/link'

export default function NFTsAndGames() {
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
            ${toggle? 'h-[345px]' : 'h-[70px]' }
            border-4
            hover:text-science-blue
            hover:border-science-blue
            transition-all
          `
        }
      >
        <h2 className="font-mono text-lg font-bold p-4 mb-3 cursor-pointer" onClick={ toggleDrawer }>
         { toggle? '🔼' : '🔽' } NFTs &amp; Games
        </h2>
        <div className="px-4">
          <p className="font-mono text-black mb-5 max-w-[250px]">Are you seeing these, Anon? 👀</p>
          <ul className="text-gray-500">
            <li>
              <Link href="https://defikingdoms.com/">
                <a className="text-science-blue underline" target="_blank">DeFi Kingdoms</a>
              </Link>
            </li>
            <li>
              <Link href="https://aavegotchi.com/">
                <a className="text-science-blue underline" target="_blank">Aavegotchi</a>
              </Link>
            </li>
            <li>
              <Link href="https://parallel.life/">
                <a className="text-science-blue underline" target="_blank">Parallel</a>
              </Link>
            </li>
            <li>
              <Link href="https://www.missingwatcher.com/">
                <a className="text-science-blue underline" target="_blank">The Missing Watcher</a>
              </Link>
            </li>
            <li>
              <Link href="https://embersword.com/">
                <a className="text-science-blue underline" target="_blank">Ember Sword</a>
              </Link>
            </li>
            <li>
              <Link href="https://www.treeverse.net/">
                <a className="text-science-blue underline" target="_blank">Treeverse</a>
              </Link>
            </li>
            <li>
              <Link href="https://dystopunksv2.com/">
                <a className="text-science-blue underline" target="_blank">DystoPunks</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}