'use client'
import { cn } from '@/lib/utils'
import React from 'react'
import {TypeAnimation} from 'react-type-animation'

type AnimatedTextProps = {
    className? : string,
    HomeScreenClassName? : string
}

const AnimatedText = ({className , HomeScreenClassName} : AnimatedTextProps) => {
  return (
    <div className={cn('mx-auto text-2xl lg:text-5xl my-y flex flex-col gap-3 lg:gap-5 font-bold text-center',className)}>
        <h1 className='text-primary drop-shadow-md'>Build Space</h1>
        <div className={cn('w-fit',HomeScreenClassName)}>
        <TypeAnimation
      sequence={[
        'Your Team.',
        1000, 
        'Your Ideas.',
        1000,
        'Your Editor.',
        1000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />

        </div>
    </div>
  )
}

export default AnimatedText