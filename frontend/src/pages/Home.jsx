import React from 'react'
import Courses from '../components/Courses/Courses'
import HeroSection from '../components/HeroSection/HeroSection'
import OurProgramsIntro from '../components/OurProgramsIntro/OurProgramsIntro'
import ProgramsPart1 from "../components/OurProgramsPart1/ProgramsPart1"
import ProgramsPart2 from "../components/OurProgramsPart2/ProgramsPart2"
import ProgramsPart3 from "../components/OurProgramsPart3/ProgramsPart3"
import Teachers from "../components/OurTeachersIntro/Teachers"
import TeachersCards from "../components/TeachersCards/TeachersCards"

function Home() {
  return (
    <>
      <HeroSection />
      <Courses />
      <OurProgramsIntro/>
      <ProgramsPart1/>
      <ProgramsPart2/>
      <ProgramsPart3/>
      <Teachers/>
      <TeachersCards/>
    </>
  )
}

export default Home