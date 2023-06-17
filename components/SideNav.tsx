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

      <Drawer
        name={props.defiPassport[0].name}
        heightOverride="h-[315px]"
        message={props.defiPassport[0].description}
        topics={props.defiPassport[0].relatedContent}
        isGrid={true}
        hasLinks={true}
      />

      <Drawer
        name={props.nftAndGames[0].name}
        heightOverride="h-[345px]"
        message={props.nftAndGames[0].description}
        topics={props.nftAndGames[0].relatedContent}
        isGrid={false}
        hasLinks={true}
      />

      <Container
        name={props.externalLinks[0].name}
        heightOverride="h-[265px]"
        message={props.externalLinks[0].description}
        topics={props.externalLinks[0].relatedContent}
        isGrid={false}
        hasLinks={true}
      />
    </div>
  )
}