import React from 'react'

function DrawerList(props) {
  return (
    <ul className="text-gray-500">
      { props.listItems.map((listItem, index) => {
        return (
          <li key={listItem.name + "-listItem-" + index} className="transition-colors hover:text-science-blue">{ listItem.name }</li>
        )})
      }
    </ul>
  )
}

export default DrawerList
