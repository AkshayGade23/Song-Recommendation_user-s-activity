import React from 'react'
import MusicPlayer from './MusicPlayer'

function Search() {
    return (
        <div className="search relative h-[65rem] px-[5rem] bg-[#081730] pt-[18rem] pb-[10rem] mt-[-15rem] z-[1] flex items-center justify-between rounded-b-[5rem]">
            {/* Left Side */}
            <div className="left flex-1">
                <img src={require("../img/backgraphics.png")} alt="" className='absolute top-[22rem] left-[-47rem]' />
                <img src={require("../img/d1.png")} alt="" className='absolute top-[26rem] w-[16rem]' />
                <img src={require("../img/d2.png")} alt="" className='absolute top-[32.7rem] w-[9rem] left-[7rem]' />
                <img src={require("../img/d3.png")} alt="" className='absolute top-[33rem] w-[9rem] left-[17rem]' />
                <img src={require("../img/d4.png")} alt="" className='absolute top-[50rem] w-[17rem] left-[2rem]' />
            </div>
            {/* Right Side */}
            <div className="right flex items-start flex-col justify-start flex-1 h-[100%] pt-[9rem] ">
                {/* Search Bar */}
                <div className="searchbar flex justify-start w-[100%]">
                    <input type="text" placeholder='Enter the keyword or URL' className='flex-[19] outline-none bg-[#020917] rounded-xl p-3 h-[3rem]'/>
                    {/* Search Icon */}
                    <div className="searchIcon flex flex-1 items-center rounded-xl ml-4 bg-gradient-to-bl from-[#F3071D] to-[#E600FF] p-4 h-[3rem]">
                        <img src={require("../img/search.png")} alt="" className='w-[1.5rem] '/>
                    </div>
                </div>

                {/* tild icon */}
                <div className="tild flex justify-start mt-7 items-center w-[100%]">
                    <img src={require("../img/Path 318.png")} alt="" className='w-[5rem]'/>
                </div>

                {/* Paragraph */}
                <div className="detail flex flex-col mt-5 text-4xl">
                    <span>Search Music By </span>
                    <span>
                        <b>
                            Name or Direct URL
                        </b>
                    </span>
                    <span className='text-sm mt-3 text-[#4D586A]'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Doloribus adipisci aliquam alias fuga  ut eum maxime <br /> reprehenderit quo exercitationem natus.
                    </span>
                </div>

                <MusicPlayer/>
            </div>
        </div>
    )
}

export default Search