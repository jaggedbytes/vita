import {PortableText, PortableTextComponents} from '@portabletext/react'

const components: PortableTextComponents = {
  marks: {
    link: ({value, children}) =>
      <a href={value?.href} target="_blank" rel="noreferrer noindex nofollow">
        {children}
      </a>
  },
}

export default function Experience({props}) {
  return (
    <>
      <div
        className="
          basis-full
          md:basis-7/12
          min-w-[300px]
          font-mono
          text-sm
          sm:text-base
          mb-8
          mr-8
          md:mr-0
          transition-all
          hover:text-deep-pink
        "
      >
        <h2 className="font-mono text-lg font-bold mb-3">
          {props[0].name}
        </h2>

        {props[0].relatedContent.map((content, index) => 
          <div
            key={"experience-" + index}
            className="
              grid
              grid-cols-4
              gap-2
              text-gray-500
              border-b-2
              px-2
              pt-3
              pb-4
              hover:text-deep-pink
              hover:border-slate-400
              transition-all
              hover:translate-x-1
            "
          >
            <div className="col-span-1 justify-self-end pr-2 text-xs md:text-base w-full">{content.name}</div>
            <div className="col-span-3">
              <PortableText
                value={content.description[0]}
                components={components}
              />
            </div>
          </div>
        )}

      </div>
    </>
  )
}