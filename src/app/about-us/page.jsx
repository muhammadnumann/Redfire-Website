import Link from 'next/link'
import React from 'react'
import AboutRewards from "../../components/AboutPage/AboutRewards"
import ServicesAndExperience from '../../components/AboutPage/ServicesAndExperience'
import CompanyTeam from '../../components/AboutPage/CompanyTeam'
function About_us() {
    return (
        <div className=' w-full'>
            <div className=' h-[500px] max-md:h-[400px] max-sm:h-[300px] bg-no-repeat bg-cover bg-center object-contain w-full bg-about-us flex justify-center items-center '>
                <div>
                    <h1 className=' text-[55px] max-sm:text-3xl text-center text-white font-bold'>About Us</h1>
                    <div className='text-white justify-center font-semibold flex '>
                        <Link href={'/'} className=' hover:text-[#032e42]'>Home</Link>
                        <span className=' mx-2'>{">"}</span>
                        <Link href={'/services'} className=' hover:text-[#032e42]'>Services</Link>
                        <span className=' mx-2'>{">"}</span>
                        <Link href={'/services'} className=' hover:text-[#032e42]'>About Us</Link>
                    </div>
                </div>
            </div>
            <div className='px-5 py-20 max-lg:py-10'>
                <div className='max-w-[1140px] mr-auto ml-auto'>
                    <AboutRewards />
                    <ServicesAndExperience />
                </div>
            </div>
            <CompanyTeam />
        </div>
    )
}

export default About_us