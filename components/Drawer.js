import React, { useState } from 'react'
import DrawerList from './DrawerList'
import DrawerListWLinks from './DrawerListWLinks'
import DrawerGrid from './DrawerGrid'

function Drawer(props) {
  const { name, heightOverride, message, topics, isGrid, hasLinks } = props
  const [ toggle, setToggle ] = useState(false)

  function toggleDrawer() {
    setToggle(!toggle)
  }

  return (
    <div
        className={
          `
            overflow-hidden
            font-mono
            mb-2
            min-w-[250px]
            md:max-w-[300px]
            ${toggle? heightOverride : 'h-[70px]' }
            border-4
            hover:text-science-blue
            hover:border-science-blue
            transition-all
          `
        }
      >
        <h2 className="font-mono text-lg font-bold p-4 mb-3 cursor-pointer" onClick={ toggleDrawer }>
          { name } <span className="float-right">{ toggle? '🔼' : '🔽' }</span>
        </h2>
        <div className="px-4">
          <p className="font-mono text-black mb-5 max-w-[250px]">{ message }</p>
          { hasLinks? (isGrid? <DrawerGrid listItems={ topics } /> : <DrawerListWLinks listItems={ topics } />) : <DrawerList listItems={ topics } /> }
        </div>
    </div>
  )
}

export default Drawer
