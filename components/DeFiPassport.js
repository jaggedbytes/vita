import React, { useState } from 'react'
import Link from 'next/link'

export default function DeFiPassport() {
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
            ${toggle? 'h-[315px]' : 'h-[70px]' }
            border-4
            hover:text-science-blue
            hover:border-science-blue
            transition-all
          `
        }
      >
        <h2 className="font-mono text-lg font-bold p-4 mb-3 cursor-pointer" onClick={ toggleDrawer }>
         { toggle? '🔼' : '🔽' } DeFi Passport
        </h2>
        <div className="px-4">
          <p className="font-mono text-black mb-5 max-w-[250px]">Oh, the blockchains I&apos;ve visited... 🚀</p>
          <div className="grid grid-cols-2 gap-1 text-gray-500">
            <div>
              <Link href="https://www.avax.network/">
                <a className="text-science-blue underline" target="_blank">Avalanche</a>
              </Link>
            </div>
            <div>
              <Link href="https://www.harmony.one/">
                <a className="text-science-blue underline" target="_blank">Harmony</a>
              </Link>
            </div>
            <div>
              <Link href="https://ethereum.org/en/">
                <a className="text-science-blue underline" target="_blank">Ethereum</a>
              </Link>
            </div>
            <div>
              <Link href="https://solana.com/">
                <a className="text-science-blue underline" target="_blank">Solana</a>
              </Link>
            </div>
            <div>
              <Link href="https://fantom.foundation/">
                <a className="text-science-blue underline" target="_blank">Fantom</a>
              </Link>
            </div>
            <div>
              <Link href="https://gnosis.io/">
                <a className="text-science-blue underline" target="_blank">Gnosis</a>
              </Link>
            </div>
            <div>
              <Link href="https://polygon.technology/">
                <a className="text-science-blue underline" target="_blank">Polygon</a>
              </Link>
            </div>
            <div>
              <Link href="https://near.org/">
                <a className="text-science-blue underline" target="_blank">NEAR</a>
              </Link>
            </div>
            <div>
              <Link href="https://cosmos.network/">
                <a className="text-science-blue underline" target="_blank">Cosmos</a>
              </Link>
            </div>
            <div>
              <Link href="https://www.terra.money/">
                <a className="text-science-blue underline" target="_blank">Terra</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}