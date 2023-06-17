import {PortableText, PortableTextComponents} from '@portabletext/react'

import React from 'react'

const components: PortableTextComponents = {
  marks: {
    link: ({value, children}) => 
      <a href={value?.href} target="_blank" rel="noreferrer noindex nofollow" className="text-science-blue underline">
        {children}
      </a>
  },
}

function DrawerGrid(props) {
  return (
    <div className="grid grid-cols-2 gap-1 text-gray-500">
      { props.listItems.map((listItem, index) => {
        return (
          <div key={listItem.name + "-drawerGridListItem-" + index}>
            <PortableText
              value={listItem.description[0]}
              components={components}
            />
          </div>
        )})
      }
    </div>
  )
}

export default DrawerGrid
