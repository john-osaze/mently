"use client";
import React from "react";
import Image from "next/image";

export const DashboardSidebar = () => {
    return (
        <aside className="w-[17%] max-md:ml-0 max-md:w-full">
            <nav className="flex overflow-hidden relative flex-col px-4 pt-52 w-full text-base whitespace-nowrap aspect-[0.205] pb-[904px] text-stone-300 max-md:py-24">
                <Image
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/126861b7485ce73de9e355c7b1c7725ca776d67e?placeholderIfAbsent=true&apiKey=90dcac741cde4de98ca9cc5989ba22be"
                    width={100}
                    height={100}
                    alt="Sidebar background"
                    className="object-cover absolute inset-0 size-full"
                />
                <button className="flex relative gap-8 items-center px-8 py-4 rounded-lg max-md:px-5">
                    <span className="flex shrink-0 self-stretch my-auto w-5 h-5" />
                    <span className="self-stretch my-auto w-[81px]">Programs</span>
                </button>
            </nav>
        </aside>
    );
};
