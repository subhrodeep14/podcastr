import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LeftSideBar = () => {
  return (
    <section className='sticky left-0 top-0 flex w-fit flex-col  justify-between  border-none  bg-black-1 pt-8 text-white-1 max-md:hidden lg:w-[270px] lg:pl-8'>
        <nav className='flex flex-col gap-6'>
            <Link  href='/' passHref>
                <Image src='/icons/logo.svg' alt='logo' width={23} height={27}/>
          
            </Link>

            [{
              
            }]

        </nav>
    </section>
  )
}

export default LeftSideBar
