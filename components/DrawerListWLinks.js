import React from 'react'
import Link from 'next/link'

function DrawerListWLinks(props) {
  const { listItems } = props

  return (
    <ul className="text-gray-500">
      { Object.entries(listItems).map((listItem) => {
        return (
          <li key={ listItem[0] }>
            <Link href={ listItem[1] }>
              <a className="text-science-blue underline" target="_blank">{ listItem[0] }</a>
            </Link>
          </li>
        )})
      }
    </ul>
  )
}

export default DrawerListWLinks
