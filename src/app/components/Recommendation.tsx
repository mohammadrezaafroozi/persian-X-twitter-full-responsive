import Image from 'next/image'
import React from 'react'


export default function Recommendation() {
    return (
        <div className='p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4'>
            {/* card کاربر */}
            <div className='flex justify-between items-center'>
                {/* عکس و اطلاعات حساب */}
                <div className='flex items-center gap-2'>
                    <div className='relative rounded-full overflow-hidden w-10 h-10'>
                        <Image src={"/general/avatar2.jpg"} alt="photo alt" width={100} height={100}  />
                    </div>
                    <div className="direction-ltr flex flex-col items-end">
                        <h2 className='text-md font-bold text-right'>parsa ghorbanian</h2>
                        <span className='text-textGray text-sm text-right'>parnian-webdesign@</span>
                    </div>
                </div>
                {/* دکمه */}
                <button className='py-1 px-4 font-semibold bg-white text-black rounded-full text-sm'>دنبال کردن</button>
            </div>

            <div className='flex justify-between items-center'>
                {/* عکس و اطلاعات حساب */}
                <div className='flex items-center gap-2'>
                    <div className='relative rounded-full overflow-hidden w-10 h-10'>
                        <Image src={"/general/avatar.png"} alt="sarabadani" width={100} height={100}  />
                    </div>
                    <div className="direction-ltr flex flex-col items-end">
                        <h2 className='text-md font-bold text-right'>MohammadReza</h2>
                        <span className='text-textGray text-sm text-right'>afroozi-dev@</span>
                    </div>
                </div>
                {/* دکمه */}
                <button className='py-1 px-4 font-semibold bg-white text-black rounded-full text-sm'>دنبال کردن</button>
            </div>

            <div className='flex justify-between items-center'>
                {/* عکس و اطلاعات حساب */}
                <div className='flex items-center gap-2'>
                    <div className='relative rounded-full overflow-hidden w-10 h-10'>
                        <Image src={"/general/avatar3.jpg"} alt="sarabadani" width={100} height={100} />
                    </div>
                    <div className="direction-ltr flex flex-col items-end">
                        <h2 className='text-md font-bold text-right'>Donald Trump</h2>
                        <span className='text-textGray text-sm text-right'>realdonaldtrump@</span>
                    </div>
                </div>
                {/* دکمه */}
                <button className='py-1 px-4 font-semibold bg-white text-black rounded-full text-sm'>دنبال کردن</button>
            </div>
        </div>
    )
}