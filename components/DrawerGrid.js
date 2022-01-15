import React from 'react'
import Link from 'next/link'

function DrawerGrid(props) {
  const { listItems } = props
  return (
    <div className="grid grid-cols-2 gap-1 text-gray-500">
      { Object.entries(listItems).map((listItem) => {
        return (
          <div key={ listItem[0] }>
            <Link href={ listItem[1] }>
              <a className="text-science-blue underline" target="_blank">{ listItem[0] }</a>
            </Link>
          </div>
        )})
      }
    </div>
  )
}

export default DrawerGrid
