import {createClient} from "next-sanity"
import type {InferGetStaticPropsType, GetStaticProps} from 'next'

import Header from '../components/Header'
import SideNav from '../components/SideNav'
import Experience from '../components/Experience'
import Boomerang from '../components/assets/Boomerang'
import Footer from '../components/Footer'
import {Fragment} from "react"

type HeaderContent = {};
type ExperiencesContent = {};
type SideNavContent = {};
type FooterContent = {};

export default function Home({
  header,
  experiences,
  sideNavContent,
  footer,
}: InferGetStaticPropsType<typeof getStaticProps>) {;
  return (
    <Fragment>
      <div className="flex flex-col mb-5">
        <Header props={header} />

        <div className="flex md:flex-row flex-col-reverse flex-wrap mx-5 mt-10 max-w-[1200px]">
          <SideNav props={sideNavContent} />
          <Experience props={experiences} />
        </div>

        <Boomerang />

        <Footer props={footer} />
      </div>
    </Fragment>
  );
}

const client = createClient({
  projectId: "8vw5vu3u",
  dataset: "production",
  apiVersion: "2023-05-21",
  useCdn: false
});

export const getStaticProps: GetStaticProps<{
  header: HeaderContent;
  experiences: ExperiencesContent;
  sideNavContent: SideNavContent;
  footer: FooterContent;
}> = async () => {
  const header = await client.fetch(`*[_id == "1895876c-0e16-4293-b672-e5b0ef4503f9"]`);
  const experiences = await client.fetch(`*[_id == "14624aa0-f3bf-42df-9c8f-231cfeabd0c9"]`);
  const spellbook = await client.fetch(`*[_id == "147fbbc0-9f21-4e63-989e-effe2617ce0d"]`);
  const defiPassport = await client.fetch(`*[_id == "badafa67-969e-4779-b198-3677b86d0139"]`);
  const nftAndGames = await client.fetch(`*[_id == "f1682b8b-6946-48ee-9eb8-9ba81e53bdab"]`);
  const externalLinks = await client.fetch(`*[_id == "c8d1669e-23ed-4079-b569-a041215dbcbc"]`);
  const footer = await client.fetch(`*[_id == "2fe2154e-023f-400f-9632-6288d59be79b"]`);
  const sideNavContent = {spellbook, defiPassport, nftAndGames, externalLinks};

  return {
    props: {
      header,
      experiences,
      sideNavContent,
      footer
    }
  };
}
