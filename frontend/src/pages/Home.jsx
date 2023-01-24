import React from 'react'
import Courses from '../components/Courses/Courses'
import HeroSection from '../components/HeroSection/HeroSection'
import Message from '../components/Message/Message'
import OurProgramsIntro from '../components/OurProgramsIntro/OurProgramsIntro'
import ProgramsPart1 from "../components/OurProgramsPart1/ProgramsPart1"
import ProgramsPart2 from "../components/OurProgramsPart2/ProgramsPart2"
import ProgramsPart3 from "../components/OurProgramsPart3/ProgramsPart3"
import Teachers from "../components/OurTeachersIntro/Teachers"
import Feedback from '../components/StudentFeedback/Feedback'
import TeachersCards from "../components/TeachersCards/TeachersCards"
import Why from '../components/WhyChooseYou/Why'

function Home() {
  return (
    <>
      <Courses />
      <OurProgramsIntro />
      <ProgramsPart1 />
      <ProgramsPart2 />
      <ProgramsPart3 />
      <Teachers />
      <TeachersCards />
      <Feedback />
      <Why />
      <Message />
    </>
  )
}

export default Home