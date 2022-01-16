import Header from '../components/Header'
import SideNav from '../components/SideNav'
import Experience from '../components/Experience'
import Boomerang from '../components/assets/Boomerang'
import Footer from '../components/Footer'

export function Home() {
  return (
    <>
      <div className="flex flex-col mb-5">
        <Header />

        <div className="flex md:flex-row flex-col-reverse flex-wrap mx-5 mt-10 max-w-[1200px]">
          <SideNav />
          <Experience />
        </div>

        <Boomerang />

        <Footer />
      </div>
    </>
  )
}

export default Home