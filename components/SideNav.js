import Spellbook from './Spellbook'
import DeFiPassport from './DeFiPassport'
import NFTsAndGames from './NFTsAndGames'
import Contact from './Contact'

export default function SideNav() {
  return (
    <div className="flex-col basis-full md:basis-3/12 mr-[32px]">
      <Spellbook />
      <DeFiPassport />
      <NFTsAndGames />
      <Contact />
    </div>
  )
}