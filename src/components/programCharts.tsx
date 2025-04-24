import React from 'react';
import { Menu, MoreVertical, Settings, ChevronDown, Users } from 'lucide-react';
import Image from 'next/image';

interface Mentor {
    id: number;
    name: string;
    avatar: string;
}

interface ProgramHost {
    id: number;
    name: string;
    avatar: string;
}

interface Program {
    id: number;
    title: string;
    description: string;
    type: 'Introduction' | 'Group Call';
    image: string;
    mentors?: Mentor[];
    host?: ProgramHost;
    actions: ('View Details' | 'Analysis' | 'Assign Mentor')[];
}

const ProgramCharts: React.FC = () => {
    const programs: Program[] = [
        {
            id: 1,
            title: "Fundamentals of User Interface & Experience",
            description: "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
            type: "Introduction",
            image: "/img/hero-2.png",
            mentors: [
                { id: 1, name: "Mentor 1", avatar: "/img/program-host-2.png" },
                { id: 2, name: "Mentor 2", avatar: "/img/program-host-2.png" },
                { id: 3, name: "Mentor 3", avatar: "/img/program-host-2.png" }
            ],
            actions: ["View Details", "Analysis"]
        },
        {
            id: 2,
            title: "Colour Hack Practical Group Call",
            description: "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
            type: "Group Call",
            image: "/img/hero-3.png",
            host: { id: 1, name: "Faith Obolo", avatar: "/img/program-host-2.png" },
            actions: ["View Details", "Analysis"]
        },
        {
            id: 3,
            title: "Colour Hack Practical Group Call",
            description: "This program is a hands-on guide designed for designers who want to master color theory and confidently apply it to their designs. This practical approach",
            type: "Group Call",
            image: "/img/hero-3.png",
            host: { id: 2, name: "Self", avatar: "/img/program-host-2.png" },
            actions: ["View Details", "Assign Mentor"]
        }
    ];

    return (
        <>
            <div className="bg-gray-50 p-4 max-w-xl">
                <div className="mb-4 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <Menu size={20} className="text-gray-500" />
                        <h1 className="text-xl text-gray-400 font-medium">Programs</h1>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-purple-700 font-medium text-sm">See all</span>
                        <MoreVertical size={20} className="text-gray-500" />
                    </div>
                </div>

                <div className="mb-4 flex justify-end gap-2">
                    <div className="text-sm px-4 py-1 text-gray-500">Filter</div>
                    <div className="flex items-center gap-1 text-sm bg-white rounded-md px-3 py-1 border border-gray-200">
                        <span>Active</span>
                        <ChevronDown size={16} />
                    </div>
                </div>

                <div className="space-y-4">
                    {programs.map((program) => (
                        <div key={program.id} className="bg-white rounded-xl overflow-hidden shadow-sm">
                            <div className="relative">
                                <Image
                                    src={program.image}
                                    alt={program.title}
                                    className="w-full object-cover"
                                    width={100}
                                    height={100}
                                />
                                <div className="absolute inset-0 bg-opacity-20 py-1 px-4 flex flex-col justify-between">
                                    <div className="self-end absolute">
                                        <Settings size={20} className="text-white" />
                                    </div>
                                    <h2 className="text-white text-[20px] font-bold w-65">{program.title}</h2>
                                    <div className="">
                                        <span className="inline-flex items-center bg-green-100 text-green-800 text-[10px] px-2 py-1 rounded-full">
                                            <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                                            {program.type}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4">
                                <p className="text-gray-700 text-[13px] mb-4">{program.description}</p>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        {program.mentors && (
                                            <div className="flex -space-x-2">
                                                {program.mentors.map((mentor) => (
                                                    <Image
                                                        key={mentor.id}
                                                        src={mentor.avatar}
                                                        alt={mentor.name}
                                                        className="w-6 h-6 rounded-full border-2 border-white"
                                                        width={100}
                                                        height={100}
                                                    />
                                                ))}
                                            </div>
                                        )}

                                        {program.mentors && <span className="text-[11px] text-gray-500">Mentors</span>}

                                        {program.host && (
                                            <div className="flex items-center gap-2">
                                                <Image
                                                    src={program.host.avatar}
                                                    alt={program.host.name}
                                                    className="w-6 h-6 rounded-full"
                                                    width={100}
                                                    height={100}
                                                />
                                                <span className="text-[11px] text-gray-500">Hosted By: {program.host.name}</span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex gap-2">
                                        {program.actions.map((action, index) => (
                                            <button
                                                key={index}
                                                className={`text-[11px] w-25 h-10 rounded-md ${action === "View Details"
                                                    ? "border border-purple-700 text-purple-700"
                                                    : "bg-purple-700 text-white"
                                                    }`}
                                            >
                                                {action}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Users Chart */}
            <div className="max-w-md">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                        <span className="mr-2">
                            <Users size={18} />
                        </span>
                        <h2 className="text-gray-500 font-medium">Users</h2>
                    </div>
                    <button className="flex items-center bg-white border border-gray-200 rounded px-3 py-1 text-sm">
                        <span>All</span>
                        <ChevronDown size={16} className="ml-2" />
                    </button>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-4 flex items-center justify-center">
                    <div className="w-48 h-48 relative">
                        <div className="w-full h-full rounded-full bg-blue-100"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-3xl font-bold">240</div>
                                <div className="text-gray-500 text-sm">Users</div>
                            </div>
                        </div>
                    </div>
                    <div className="ml-6">
                        <div className="flex items-center mb-2">
                            <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                            <span className="text-sm">Students</span>
                            <span className="ml-auto font-medium">200</span>
                        </div>
                        <div className="flex items-center mb-2">
                            <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                            <span className="text-sm">Mentors</span>
                            <span className="ml-auto font-medium">8</span>
                        </div>
                        <div className="flex items-center mb-2">
                            <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                            <span className="text-sm">Programs</span>
                            <span className="ml-auto font-medium">22</span>
                        </div>
                        <div className="flex items-center">
                            <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                            <span className="text-sm">Others</span>
                            <span className="ml-auto font-medium">10</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProgramCharts;