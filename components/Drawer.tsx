import {PortableText, PortableTextComponents} from '@portabletext/react'

import React, { useState } from 'react'
import DrawerList from './DrawerList'
import DrawerListWLinks from './DrawerListWLinks'
import DrawerGrid from './DrawerGrid'

import * as ga from '../lib/ga'

const components: PortableTextComponents = {
  block: {
    normal: ({children}) => <p className="font-mono text-black mb-5 max-w-[250px]">{children}</p>,
  },
}

function Drawer(props) {
  const { name, heightOverride, message, topics, isGrid, hasLinks } = props
  const [ toggle, setToggle ] = useState(false)

  function toggleDrawer(event) {
    setToggle(!toggle)

    ga.event({
      action: "view_item_list",
      params: {
        "event_label": `${ event.target.innerText }`,
        "value": 1
      }
    })
  }

  return (
    <div
        className={
          `
            overflow-hidden
            font-mono
            mb-2
            min-w-[300px]
            md:w-max
            ${toggle? heightOverride : 'h-[67px]' }
            bg-white
            border-4
            hover:text-science-blue
            hover:border-science-blue
            transition-all
          `
        }
      >
        <h2 className="font-mono text-lg font-bold p-4 cursor-pointer" onClick={ (e) => toggleDrawer(e) }>
          { name } <span className="float-right">{ toggle? '🔼' : '🔽' }</span>
        </h2>
        <div className="px-4">
          <PortableText
            value={message}
            components={components}
          />
          { hasLinks? (isGrid? <DrawerGrid listItems={ topics } /> : <DrawerListWLinks listItems={ topics } />) : <DrawerList listItems={ topics } /> }
        </div>
    </div>
  )
}

export default Drawer
