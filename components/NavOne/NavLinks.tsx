import { navLinks } from '@/constants'
import Link from 'next/link'
import React from 'react'

const NavLinks = () => {
  return (
    <div className="flex gap-[120px] justify-start items-start text-[#888686] text-[13px] pl-2">
        {navLinks.map((item) => (
          <div key={item.title} className="flex flex-col gap-2">
            <h3 className="hover:underline cursor-pointer">{item.title}</h3>
            <div className="flex flex-col gap-2 ">
              {item.links.map((link) => (
                <Link
                  key={link.title}
                  href={link.url}
                  className="hover:underline"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            
          </div>
        ))}
      </div>
  )
}

export default NavLinks
