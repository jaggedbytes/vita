import Link from 'next/link'
import Header from '../components/Header'
import SideNav from '../components/SideNav'
import Experience from '../components/Experience'
import Footer from '../components/Footer'

export function Home() {
  return (
    <>
      <div className="flex flex-col m-5">
        <Header />

        <div className="flex md:flex-row flex-col-reverse flex-wrap mt-10 max-w-[1200px]">
          <SideNav />
          <Experience />
        </div>
        
        <Footer />
      </div>
    </>
  )
}

export default Home