"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";


const menuList = [
  { id: 1, name: "خانه", link: "/", icon: "home.svg" },
  { id: 2, name: "کاوش", link: "/", icon: "explore.svg" },
  { id: 3, name: "آگاه‌سازی‌ها", link: "/", icon: "notification.svg" },
  { id: 4, name: "پیام‌ها", link: "/", icon: "message.svg" },
  { id: 5, name: "نشانک‌ها", link: "/", icon: "bookmark.svg" },
  { id: 6, name: "شغل‌ها", link: "/", icon: "job.svg" },
  { id: 7, name: "انجمن‌ها", link: "/test", icon: "community.svg" },
  { id: 8, name: "نمایه", link: "/test", icon: "profile.svg" },
  { id: 9, name: "بیشتر", link: "/test", icon: "more.svg" },
];

export default function Rightbar() {
  return (
    <div className="h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8">
      {/* nav section */}
      <div className="flex flex-col gap-4 text-lg items-center xxl:items-start">
        {/* logo */}
        <Link href="/">
          <Image src={"icons/logo.svg"} alt="logoX" width={24} height={24} />
        </Link>

        {/* nav items */}
        <div className="flex flex-col gap-4">
          {menuList.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="flex items-center gap-4 p-2 rounded-full hover:bg-[#141414]"
            >
              <Image src={`icons/${item.icon}`} alt={item.name} width={24} height={24} />
              <span className="hidden xxl:inline">{item.name}</span>
            </Link>
          ))}

          {/* post buttons - MODAL LINK! */}
          <Link
            href="/compose/post"
            className="bg-white text-black w-12 h-12 rounded-full flex items-center justify-center xxl:hidden"
          >
            <Image src="icons/post.svg" alt="new post" width={24} height={24} />
          </Link>

          <Link
            href="/compose/post"
            className="bg-white text-black rounded-full font-bold py-2 px-20 hidden xxl:block"
          >
            پست کردن
          </Link>
        </div>
      </div>

      {/* account section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image src="/general/avatar.png" alt="MohammadReza" width={100} height={100}  />
          </div>

          <div className="hidden xxl:flex flex-col">
            <span className="font-bold">MohammadReza</span>
            <span className="text-sm text-textGray">afroozi-dev@</span>
          </div>
        </div>
        <div className="hidden xxl:block cursor-pointer font-bold">...</div>
      </div>
    </div>
  );
}
