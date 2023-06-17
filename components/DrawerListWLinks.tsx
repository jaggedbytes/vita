import {PortableText, PortableTextComponents} from '@portabletext/react'

import React from 'react'
import Link from 'next/link'

const components: PortableTextComponents = {
  marks: {
    link: ({value, children}) => 
      <a href={value?.href} target="_blank" rel="noreferrer noindex nofollow" className="text-science-blue underline">
        {children}
      </a>
  },
}

function DrawerListWLinks(props) {
  return (
    <ul className="text-gray-500">
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
    </ul>
  )
}

export default DrawerListWLinks
