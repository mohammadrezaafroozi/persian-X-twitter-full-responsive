import Image from 'next/image'
import React from 'react'


export default function Tags() {
  return (
    <div className='p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4'>
        <h2 className='text-xl font-bold text-textGrayLight'>چیزهایی که دارد رخ می‌دهد</h2>
        <div>
            <div className='flex items-center justify-between'>
                <span className='text-textGray font-sm'>تازه های ایران</span>
                <Image src="icons/infoMore.svg" alt="" width={16} height={16}/>
            </div>
            <h3 className='text-textGrayLight font-bold'>جنگ ایران اسراییل</h3>
            <span className='text-textGray text-sm'>20 هزارتا پست</span>
        </div>


        <div>
            <div className='flex items-center justify-between'>
                <span className='text-textGray font-sm'>ورزشی</span>
                <Image src="icons/infoMore.svg" alt="" width={16} height={16}/>
            </div>
            <h3 className='text-textGrayLight font-bold'>قهرمانی چلسی</h3>
            <span className='text-textGray text-sm'>100 هزارتا پست</span>
        </div>
        
        <div>
            <div className='flex items-center justify-between'>
                <span className='text-textGray font-sm'>جاوااسکریپت</span>
                <Image src="icons/infoMore.svg" alt="" width={16} height={16}/>
            </div>
            <h3 className='text-textGrayLight font-bold'>react js</h3>
            <span className='text-textGray text-sm'>50 هزارتا پست</span>
        </div>

        <div>
            <div className='flex items-center justify-between'>
                <span className='text-textGray font-sm'>React</span>
                <Image src="icons/infoMore.svg" alt="" width={16} height={16}/>
            </div>
            <h3 className='text-textGrayLight font-bold'>Next js</h3>
            <span className='text-textGray text-sm'>20 هزارتا پست</span>
        </div>
    </div>
  )
}