import React from 'react'
import JaggedBytes from '/public/assets/jagged-bytes.svg'

function Logo() {
  return (
    <div className="basis-full ml-5">
      <JaggedBytes
        className="
          animate-reanimate
          absolute
          top-[52px]
          left-[62px]
          w-[95px]
          scale-y-0
          translate-y-[8px]
          origin-bottom
        "
      />
      <svg width="300" height="120" className="absolute animate-bounce">
        <polyline 
          className="
            opacity-0
            animate-floret-pink
          stroke-deep-pink
            stroke-base
            fill-transparent
          "
          points="110,33 115,33"
          style={{transformBox: 'fill-box'}}
        />

        <polyline 
          className="
            opacity-0
            animate-floret-blue
            origin-center
          stroke-deep-pink
            stroke-base
            fill-transparent
          "
          points="113,33 118,33"
          style={{transformBox: 'fill-box'}}
        />
      </svg>

      <svg width="300" height="120">
        <polyline
          className="
            animate-tracer
          stroke-deep-pink
            stroke-base
            fill-transparent
          "
          points="10,115 150,115 150,45"
          strokeDasharray={ 220 }
          strokeDashoffset={ 220 }
        />

        <polyline 
          className="
            opacity-1
            animate-sprout
          stroke-science-blue
            stroke-base
            fill-transparent
          "
          points="152,48 147,48"
          style={{transformBox: 'fill-box'}}
        />

        <polyline
          className="
            animate-bounding-box
            origin-right
            stroke-black
            stroke-base
            fill-transparent
          "
          points="126,35 145,35 145,110 5,110 5,35 103,35"
          strokeDasharray={ 450 }
          strokeDashoffset={ -450 }
        />

        <polyline
          className="
            animate-lid
            origin-[0]
            stroke-black
            stroke-base
            fill-transparent
          "
          points="100,35 130,35"
          strokeDasharray={ 30 }
          strokeDashoffset={ -30 }
          style={{transformBox: 'fill-box'}}
          transform='rotate(0)'
        />
      </svg>
    </div>
  )
}

export default Logo
