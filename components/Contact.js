import Link from 'next/link'

export default function Contact() {
  return (
    <>
      <div
        className={
          `
            overflow-hidden
            font-mono
            p-4
            mb-2
            min-w-[250px]
            md:max-w-[300px]
            h-[205px]
            border-4
            hover:text-science-blue
            hover:border-science-blue
            transition-all
          `
        }
      >
        <h2 className="font-mono text-lg font-bold mb-3">
          👋 Contact
        </h2>
        <p className="font-mono text-black mb-5 md:max-w-[250px]"></p>
        <ul className="text-gray-500">
          <li>
            <Link href="mailto:jaggedbytes@protonmail.com">
              <a className="text-science-blue underline" target="_blank">Email</a>
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/jacky-giang-93400b20/">
              <a className="text-science-blue underline" target="_blank">LinkedIn</a>
            </Link>
          </li>
          <li>
            <Link href="https://github.com/jaggedbytes">
              <a className="text-science-blue underline" target="_blank">Github</a>
            </Link>
          </li>
          <li className="mt-2 text-2xl transition-all hover:text-science-blue hover:translate-x-2 hover:scale-105">
            <Link href="https://y.at/🤠🐮🚀">
              <a target="_blank">🤠🐮🚀</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}