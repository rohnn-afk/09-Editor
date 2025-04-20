'use client'

import React from 'react'
import { Button } from '../ui/button'
import Logo from '../ui/Logo'
import { useRouter } from 'next/navigation'

const Navbar = () => {

    const router = useRouter()

  return (
    <div className='h-14 w-2/3 mx-auto min-w-60 flex rounded-md hover:shadow-lg items-center justify-between pr-8 pl-4 bg-white shadow-md'>
        <Logo/>
        <nav>
            <Button onClick={()=>router.push('/login')} className='cursor-pointer'>Login</Button>
        </nav>
    </div>
  )
}

export default Navbar