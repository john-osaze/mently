import React from "react";
import Image from "next/image";

import {
	FileText,
	Users,
	MoreVertical,
	Plus,
	Menu,
} from 'lucide-react';


const activities = [
	{
		id: 1,
		title: "KYC Verification",
		description: "45 new persons just signed up on Mently.",
		time: "25 minutes Ago",
		imageSrc: "/api/placeholder/80/80",
		alt: "Woman with braided hair"
	},
	{
		id: 2,
		title: "New User Sign Up!",
		description: "45 new persons just signed up on Mently.",
		time: "25 minutes Ago",
		imageSrc: "/api/placeholder/80/80",
		alt: "Woman with long hair"
	},
	{
		id: 3,
		title: "Withdrawal Request",
		description: "Mardian requested a withdrawal.",
		time: "25 minutes Ago",
		imageSrc: "/api/placeholder/80/80",
		alt: "Man with glasses"
	}
];

export const ApplicationMentorRecents = () => {
	return (
		<div className="mx-6 mb-6 flex gap-x-4">
			{/* Applications Section */}
			<div className="max-w-md">
				<div className="flex justify-between items-center mb-4">
					<div className="flex items-center">
						<span className="mr-2">
							<FileText size={18} />
						</span>
						<h2 className="text-gray-500 font-medium">Applications</h2>
					</div>
					<div className="flex items-center">
						<a href="#" className="text-purple-600 text-sm mr-2">See all</a>
						<MoreVertical size={18} className="text-gray-400" />
					</div>
				</div>

				<div className="bg-white rounded-lg border border-gray-200 p-4">
					<div className="border-b border-gray-100 pb-4 mb-4">
						<div className="flex items-center justify-between mb-3">
							<div className="flex items-center">
								<input type="checkbox" className="mr-3 w-4 h-4" />
								<div className="w-8 h-8 rounded-full bg-gray-200 mr-3"></div>
								<div>
									<h3 className="font-medium">Maxwell Smith</h3>
									<p className="text-xs text-gray-500">maxwellsmith@gmail.com</p>
								</div>
							</div>
							<div className="flex space-x-2">
								<button className="px-3 py-1 bg-red-50 text-red-500 rounded text-sm">
									Reject
								</button>
								<button className="px-3 py-1 bg-purple-600 text-white rounded text-sm">
									Accept
								</button>
							</div>
						</div>
						<div className="flex items-center space-x-3 text-xs">
							<span className="bg-gray-100 text-gray-600 px-2 py-1 rounded">Product Designer</span>
							<span className="bg-gray-100 text-gray-600 px-2 py-1 rounded">Space&apos;s Experience</span>
							<div className="flex items-center">
								<div className="w-4 h-3 bg-green-200 mr-1"></div>
								<span>Lagos, Nigeria</span>
							</div>
							<span className="text-gray-500">GMT +1</span>
						</div>
					</div>

					<div className="border-b border-gray-100 pb-4 mb-4">
						<div className="flex items-center justify-between mb-3">
							<div className="flex items-center">
								<input type="checkbox" className="mr-3 w-4 h-4" />
								<div className="w-8 h-8 rounded-full bg-gray-200 mr-3"></div>
								<div>
									<h3 className="font-medium">Adeati Samuel</h3>
									<p className="text-xs text-gray-500">maxwellsmith@gmail.com</p>
								</div>
							</div>
							<div className="flex space-x-2">
								<button className="px-3 py-1 bg-red-50 text-red-500 rounded text-sm">
									Reject
								</button>
								<button className="px-3 py-1 bg-purple-600 text-white rounded text-sm">
									Accept
								</button>
							</div>
						</div>
						<div className="flex items-center text-xs">
							<span className="bg-gray-100 text-gray-600 px-2 py-1 rounded mr-2">Product Designer</span>
						</div>
					</div>

					<div className="border-b border-gray-100 pb-4 mb-4">
						<div className="flex items-center justify-between mb-3">
							<div className="flex items-center">
								<input type="checkbox" className="mr-3 w-4 h-4" />
								<div className="w-8 h-8 rounded-full bg-gray-200 mr-3"></div>
								<div>
									<h3 className="font-medium">Maxwell Smith</h3>
									<p className="text-xs text-gray-500">maxwellsmith@gmail.com</p>
								</div>
							</div>
							<div className="flex space-x-2">
								<button className="px-3 py-1 bg-red-50 text-red-500 rounded text-sm">
									Reject
								</button>
								<button className="px-3 py-1 bg-purple-600 text-white rounded text-sm">
									Accept
								</button>
							</div>
						</div>
					</div>

					<div>
						<div className="flex items-center justify-between mb-3">
							<div className="flex items-center">
								<input type="checkbox" className="mr-3 w-4 h-4" />
								<div className="w-8 h-8 rounded-full bg-gray-200 mr-3"></div>
								<div>
									<h3 className="font-medium">Adeati Samuel</h3>
									<p className="text-xs text-gray-500">maxwellsmith@gmail.com</p>
								</div>
							</div>
							<div className="flex space-x-2">
								<button className="px-3 py-1 bg-red-50 text-red-500 rounded text-sm">
									Reject
								</button>
								<button className="px-3 py-1 bg-purple-600 text-white rounded text-sm">
									Accept
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Mentors Section */}
			<div className="max-w-md">
				<div className="flex justify-between items-center mb-4">
					<div className="flex items-center">
						<span className="mr-2">
							<Users size={18} />
						</span>
						<h2 className="text-gray-500 font-medium">Mentors</h2>
					</div>
					<div className="flex items-center">
						<button className="mr-2 bg-white rounded-full p-1 border border-gray-200">
							<Plus size={16} />
						</button>
						<a href="#" className="text-purple-600 text-sm mr-2">See all</a>
						<MoreVertical size={18} className="text-gray-400" />
					</div>
				</div>

				<div className="bg-white rounded-lg border border-gray-200 p-4">
					<div className="border-b border-gray-100 pb-4 mb-4">
						<div className="flex items-center justify-between">
							<div className="flex items-center">
								<div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
								<div>
									<h3 className="font-medium">Maxwell Smith</h3>
									<p className="text-xs text-gray-500">Product Designer</p>
								</div>
							</div>
							<button className="px-4 py-1 bg-purple-600 text-white rounded-full text-sm">
								Message
							</button>
						</div>
					</div>

					<div>
						<div className="flex items-center justify-between">
							<div className="flex items-center">
								<div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
								<div>
									<h3 className="font-medium">Adeati Samuel</h3>
									<p className="text-xs text-gray-500">Product Designer</p>
								</div>
							</div>
							<button className="px-4 py-1 bg-purple-600 text-white rounded-full text-sm">
								Message
							</button>
						</div>
					</div>
				</div>

				{/* Recent Activities Section */}
				<div className="mt-8 mb-6">
					<div className="bg-white rounded-3xl p-6 shadow-sm">
						<div className="flex justify-between items-center mb-6">
							<div className="flex items-center gap-3">
								<Menu size={24} className="text-gray-500" />
								<h2 className="text-2xl font-medium text-gray-400">Recent Activities</h2>
							</div>
							<div className="flex items-center gap-3">
								<span className="text-purple-700 font-medium">See all</span>
								<MoreVertical size={24} className="text-gray-500" />
							</div>
						</div>

						<div className="space-y-6">
							{activities.map((activity) => (
								<div key={activity.id} className="flex gap-4 pb-6 border-b border-gray-200 last:border-0">
									<div className="flex-shrink-0">
										<Image
											src={activity.imageSrc}
											alt={activity.alt}
											className="w-16 h-16 rounded-full object-cover border-2 border-yellow-400"
											width={100}
											height={100}
										/>
									</div>
									<div className="flex-grow">
										<h3 className="text-xl font-bold text-gray-900">{activity.title}</h3>
										<p className="text-gray-500 mb-1">{activity.description}</p>
										<span className="text-gray-500">{activity.time}</span>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
