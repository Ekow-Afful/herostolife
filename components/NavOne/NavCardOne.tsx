import Image from 'next/image'
import React from 'react'
import { FaArrowUp } from 'react-icons/fa6'
import { HiMiniMegaphone } from 'react-icons/hi2'

const NavCardOne = () => {
  return (
    <div className="flex flex-col gap-3 w-1/2 border-[#88868633] border-[1px] rounded-[12px] p-3">
    <div className="w-full h-full">
      <Image
        src="/me.jpg"
        alt="qwer"
        width={800}
        height={200}
        className=" object-cover object-[50%_70%] h-[130px] rounded-[12px]"
      />
    </div>

    <div className="px-2">
      <p className="text-[#888686] text-[13px]">October 23 2024</p>
      <p>THE FIRST IN THE HEROES TO LIFE SERIES DROPS</p>
    </div>

    <div className="flex w-full gap-2 justify-between items-start px-2">
      <div className="flex w-1/2 justify-start items-center gap-2 group cursor-pointer">
        <div className="text-[12px]">READ ARTICLE</div>
        <div className="rotate-45 group-hover:rotate-90 transition-all duration-100">
          <FaArrowUp />
        </div>
      </div>

      <div className="flex w-1/2 justify-start items-center gap-2 group cursor-pointer">
        <div className=" group-hover:-rotate-45 transition-all duration-100">
          <HiMiniMegaphone size={20} />
        </div>
        <div className="text-[12px]">MORE NEWS</div>
      </div>
    </div>
  </div>
  )
}

export default NavCardOne
