import React from 'react'

function Boomerang() {
  return (
    <svg width="100%" height="100%" className="overflow-visible absolute -z-10">
      <line 
        className="
          opacity-0
          animate-boomerang
          origin-center
        stroke-black
          stroke-base
        "
        x1="30%"
        y1="100%"
        x2="25%"
        y2="100%"
        rotate={ 0 }
        style={{transformBox: 'fill-box'}}
      />
    </svg>
  )
}

export default Boomerang
