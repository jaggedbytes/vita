import React from 'react'

function DrawerList(props) {
  const { listItems } = props

  return (
    <ul className="text-gray-500">
      { listItems.map((listItem) => {
        return (
          <li key={ listItem } className="transition-colors hover:text-science-blue">{ listItem }</li>
        )})
      }
    </ul>
  )
}

export default DrawerList
