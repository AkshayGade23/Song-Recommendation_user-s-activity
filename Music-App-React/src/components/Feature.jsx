import React from 'react'

function Feature({ icon, title }) {
    return (
        <div className="feature flex items-center justify-center flex-col relative text-center mx-12">

            {/* icon */}
            <div className="icon bg-[#081730] rounded-2xl p-4">
                <img src={require(`../img/${icon}.png`)} alt="" className='w-[3rem]' />
            </div>

            <span className='mt-5'>{title}</span>

            <span className='mt-4 text-[#707070]'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit eaque quaerat velit veniam cumque nostrum voluptatum quas illum excepturi eveniet eveniet.
            </span>

            <span className='text-[#E600FF] underline mt-[3rem] hover:cursor-pointer'>Learn More</span>
        </div>
    )
}

export default Feature