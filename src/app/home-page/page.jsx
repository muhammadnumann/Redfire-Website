import React from 'react'
import Carousel from './components/Carousel'
import OurPremiumServices from './components/OurPremiumServices'
import AboutCompany from './components/AboutCompany'
import WorkFlow from './components/WorkFlow'
import OurProjects from './components/OurProjects'
import WhyChooseUs from './components/WhyChooseUs'

function Home_Page() {
    return (
        <div>
            <Carousel />
            <OurPremiumServices />
            <AboutCompany />
            <WorkFlow />
            <OurProjects />
            <WhyChooseUs />
        </div>
    )
}

export default Home_Page