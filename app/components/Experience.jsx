import { assets, workExperience } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Experience = () => {
    return (
        <div id='experience' className='w-full px-[12%] py-10 scroll-mt-20 bg-white '>

            <h4 className="text-center mb-2 text-lg font-Ovo">
                Where I’ve Worked
            </h4>
            <h2 className="text-center text-5xl sm:text-4xl md:text-5xl lg:text-[60px] font-Ovo">
                Professional Experience
            </h2>
            <p className="text-center max-w-2xl mx-auto mb-10 mt-5">
                Over the years, I’ve contributed to diverse projects across industries,
                building scalable, user-friendly applications and collaborating with dynamic teams to achieve impactful results.
            </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {workExperience.map(({ company, role, period, responsibilities }, index) => (
                    <div key={index} className='p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300'>
                        <h3>{company}</h3>
                        <p><strong>{role}</strong> — <em>{period}</em></p>
                        <ul>
                            {responsibilities.map((item, i) => (
                                <li key={i} className='flex items-center gap-2 text-gray-600 my-2'>
                                    <Image src={assets.right_arrow} alt='contact' className='w-4 ' /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience