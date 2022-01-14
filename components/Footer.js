import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <div className="mt-10 text-gray-400">
        <p className="font-mono text-xs text-left leading-relaxed">
          Made with <Link href="https://nextjs.org/"><a className="text-science-blue underline" target="_blank">Next.js</a></Link> &amp; <Link href="https://tailwindcss.com/"><a className="text-science-blue underline" target="_blank">tailwindcss</a></Link>.
          <br />
          © 2022 Jagged Bytes. All Rights Reserved 💗
        </p>
      </div>
    </>
  )
}