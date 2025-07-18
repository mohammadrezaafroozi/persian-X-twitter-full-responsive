import Image from 'next/image'
import Feed from '../components/feed'

import Link from 'next/link'
import React from 'react'



export default function UserPage() {
    return (
        <div>
            {/* عنوان پروفایل */}
            <div className='flex items-center gap-8 sticky top-0 backdrop-blur-md p-4 z-10 bg-[#00000084]'>
                <Link href="/">
                    <Image className='rotate-180' src="icons/back.svg" alt="بازگشت" width={24} height={24} />
                </Link>
                <h1 className='font-bold text-lg'>
                    MohammadReza Afroozi
                </h1>
            </div>
            {/* اطلاعات */}
            <div>
                {/* بخش آواتار و کاور */}
                <div className='relative w-full'>
                    {/* کاور */}
                    <div className='w-full aspect-[3/1] relative'>
                        <Image src="/general/cover.jpg" width={600} height={200} alt=""  />
                    </div>
                    {/* لوگو یا آواتار */}
                    <div className='w-1/5 aspect-square absolute rounded-full overflow-hidden border-4 border-black bg-gray-300 right-4 -translate-y-1/2'>
                        <Image src="/general/avatar.png" width={110} height={110} alt=""  />
                    </div>
                </div>
                <div className='flex w-100 items-center justify-end gap-2 p-2'>
                    <div className='w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer'>
                        <Image src='icons/more.svg' alt="" width={20} height={20} />
                    </div>
                    <div className='w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer'>
                        <Image src='icons/explore.svg' alt="" width={20} height={20} />
                    </div>
                    <div className='w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer'>
                        <Image src='icons/message.svg' alt="" width={20} height={20} />
                    </div>
                    <button className='py-2 px-4 bg-white text-black font-bold rounded-full'>دنبال کردن</button>
                </div>
                {/* اطلاعات کاربر */}
                <div className='p-4 flex flex-col gap-2'>
                    {/* نام و کاربری و ایدی */}
                    <div className="direction-ltr flex flex-col items-end">
                        <h2 className='text-2xl text-right font-bold'>MohammadReza</h2>
                        <span className='text-sm text-right text-textGray'>afroozi-dev@</span>
                    </div>
                    <p>
                       Front-End Developer
                       html, css, js, react, next js
                    </p>
                    {/* شغل موقعیت مکانی تاریخ */}
                    <div className='flex gap-4 text-textGray text-[15px]'>
                        <div className='flex items-center gap-2'>
                            <Image src='icons/userLocation.svg' alt="" width={20} height={20} />
                            <span>IRAN</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Image src='icons/date.svg' alt="" width={20} height={20} />
                            <span>تاریخ پیوستن 21 آوریل</span>
                        </div>
                    </div>
                    {/* امار دنبال شوندگان و دنبال کنندگان */}
                    <div className='flex gap-4'>
                        <div className='flex items-center gap-2'>
                            <span className='font-bold'>2745</span>
                            <span className='text-textGray text-[15px]'>دنبال کنندگان</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <span className='font-bold'>165</span>
                            <span className='text-textGray text-[15px]'>دنبال شوندگان</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* فید */}
            <Feed />
        </div>
    )
}