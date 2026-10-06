import Drawer from './Drawer'
import Container from './Container'

export default function SideNav({props}) {
  return (
    <div className="flex-col basis-full md:basis-3/12 mr-[32px]">
      <Drawer
        name={props.spellbook[0].name}
        heightOverride="h-[365px]"
        message={props.spellbook[0].description}
        topics={props.spellbook[0].relatedContent}
        isGrid={false}
        hasLinks={false}
      />

      <Container
        name={props.externalLinks[0].name}
        heightOverride="h-[265px]"
        message={props.externalLinks[0].description}
        topics={props.externalLinks[0].relatedContent.filter(
          (item) => item.name !== '🤠🐮🚀'
        )}
        isGrid={false}
        hasLinks={true}
      />
    </div>
  )
}