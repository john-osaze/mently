import React from "react";
import Image from 'next/image';

import Menu from "../../public/svg/menu.svg"
import ImgMenu from "../../public/svg/img-1.svg"

export default function Welcome() {
	return (
		<>
			<div className="flex justify-between items-center px-6 py-3">
				<div></div>
				<div className="flex items-center">
					<button className="p-2 rounded-l">
						<Image src={Menu} alt="img-menu" width={25} height={25} unoptimized />
					</button>
					<button className="p-2 rounded-r">
						<Image src={ImgMenu} alt="menu" width={25} height={25} unoptimized />
					</button>
					<button className="ml-4 px-4 text-[#1F0954] flex items-center font-bold">
						<span>Manage Widgets</span>
					</button>
				</div>
			</div>

			<div className="mx-6 mb-6 bg-purple-600 rounded-lg p-4 text-white flex justify-between items-center">
				<div>
					<h1 className="text-2xl font-bold flex items-center inline">
						Welcome Aboard, Blessing <span className="ml-2">👋</span>
					</h1>
					<p className="mt-1 inline">We&apos;re thrilled to have you join Techrity Team!</p>
				</div>
				<button className="bg-white text-purple-800 px-4 py-2 rounded font-medium">
					Update Profile
				</button>
			</div>
		</>
	);
}
