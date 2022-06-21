import Drawer from './Drawer'
import Container from './Container'

export default function SideNav() {
  return (
    <div className="flex-col basis-full md:basis-3/12 mr-[32px]">
      <Drawer
        name="Spellbook"
        heightOverride="h-[365px]"
        message="Do my services interest you? 🔮"
        topics=
        {
          [
            "Frontend Development",
            '"Just Enough" Backend',
            "Quality Assurance",
            "Sm/Md Biz IT Consultancy",
            "Project Management",
            "Yoga",
            "Choreo K-Pop Dancing",
            "Tarot Readings"
          ]
        }
        isGrid={false}
        hasLinks={false}
      />

      <Drawer
        name="DeFi Passport"
        heightOverride="h-[315px]"
        message="Oh, the blockchains I&apos;ve visited... 🚀"
        topics=
        {
          {
            "Avalanche": "https://www.avax.network/",
            "Harmony": "https://www.harmony.one/",
            "Ethereum": "https://ethereum.org/en/",
            "Solana": "https://solana.com/",
            "Fantom": "https://fantom.foundation/",
            "Gnosis": "https://gnosis.io/",
            "Polygon": "https://polygon.technology/",
            "NEAR": "https://near.org/",
            "Cosmos": "https://cosmos.network/",
            "Terra": "https://www.terra.money/"
          }
        }
        isGrid={true}
        hasLinks={true}
      />

      <Drawer
        name="NFTs & Games"
        heightOverride="h-[345px]"
        message="Are you seeing these, Anon? 👀"
        topics=
        {
          {
            "DeFi Kingdoms": "https://defikingdoms.com/",
            "Aavegotchi": "https://aavegotchi.com/",
            "Parallel": "https://parallel.life/",
            "The Missing Frontier": "https://missingfrontier.com/",
            "Ember Sword": "https://embersword.com/",
            "Ragnarok": "https://ragnarok.xyz/",
            "DystoPunks": "https://dystopunks.net/"
          }
        }
        isGrid={false}
        hasLinks={true}
      />

      <Container
        name="Links"
        heightOverride="h-[265px]"
        message=""
        topics=
        {
          {
            "Résumé": "https://jaggedbytes.s3.amazonaws.com/documents/resume-jacky-giang-2022.pdf",
            "Blog": "https://dev.to/jaggedbytes",
            "LinkedIn": "https://www.linkedin.com/in/jacky-giang-93400b20/",
            "Github": "https://github.com/jaggedbytes",
            "Email": "mailto:jaggedbytes@protonmail.com",
            "🤠🐮🚀": "https://y.at/🤠🐮🚀"
          }
        }
        isGrid={false}
        hasLinks={true}
      />
    </div>
  )
}