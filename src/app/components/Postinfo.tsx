import Image from 'next/image'
import React from 'react'

export default function Postinfo() {
  return (
    <div className='cursor-pointer w-4 h-4'>
        <Image src= "/icons/infoMore.svg" alt='' width={16} height={16}/>

    </div>
  )
}
