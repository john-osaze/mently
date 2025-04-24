import React from "react";

import {
    MoreVertical,
    Calendar,
    Clock,
    ChevronRight,
    Activity,
} from 'lucide-react';

import Image from "next/image";


export const GroupCall = () => {
    return (
        <div className="mx-6 mb-6">
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                    <span className="mr-2">
                        <Activity size={18} />
                    </span>
                    <h2 className="text-gray-500 font-medium">Group Calls</h2>
                </div>
                <div className="flex items-center">
                    <a href="#" className="text-purple-600 text-sm mr-2">See all</a>
                    <MoreVertical size={18} className="text-gray-400" />
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
                {/* Meeting Card 1 */}
                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                    <div className="h-24 bg-gray-200 relative">
                        <Image src="/img/card-img-1.png" alt="Meeting banner" className="w-full h-full object-cover" width={100} height={100}/>
                    </div>
                    <div className="p-3">
                        <div className="mb-2">
                            <span className="inline-flex items-center bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                                Ongoing
                            </span>
                        </div>
                        <h3 className="font-medium mb-1">Weekly Meeting - Product Demo Review with Testers</h3>
                        <div className="flex items-center text-xs text-gray-500 mb-3">
                            <Calendar size={12} className="mr-1" />
                            <span>Mon, Jul 30, 2024</span>
                            <div className="mx-2 w-1 h-1 bg-gray-300 rounded-full"></div>
                            <Clock size={12} className="mr-1" />
                            <span>9:00 - 11:00AM</span>
                        </div>
                        <div className="flex items-center mb-3">
                            <div className="w-4 h-4 rounded-full bg-gray-300 mr-1"></div>
                            <span className="text-xs text-gray-500">UX Strategy Study group</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="px-3 py-1 border border-purple-500 text-purple-500 rounded text-sm">
                                View Participants
                            </button>
                            <button className="px-3 py-1 bg-purple-600 text-white rounded text-sm flex items-center">
                                Join Now
                                <ChevronRight size={16} className="ml-1" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Meeting Card 2 */}
                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                    <div className="h-24 bg-gray-200 relative">
                        <Image src="/img/card-img-2.png" alt="Meeting banner" className="w-full h-full object-cover" width={100} height={100}/>
                    </div>
                    <div className="p-3">
                        <div className="mb-2">
                            <span className="inline-flex items-center bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mr-1"></span>
                                Upcoming
                            </span>
                        </div>
                        <h3 className="font-medium mb-1">Weekly Meeting - Product Demo Review with Testers</h3>
                        <div className="flex items-center text-xs text-gray-500 mb-3">
                            <Calendar size={12} className="mr-1" />
                            <span>Mon, Jul 30, 2024</span>
                            <div className="mx-2 w-1 h-1 bg-gray-300 rounded-full"></div>
                            <Clock size={12} className="mr-1" />
                            <span>9:00 - 11:00AM</span>
                        </div>
                        <div className="flex items-center mb-3">
                            <div className="w-4 h-4 rounded-full bg-gray-300 mr-1"></div>
                            <span className="text-xs text-gray-500">UX Strategy Study group</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="px-3 py-1 border border-purple-500 text-purple-500 rounded text-sm">
                                View Participants
                            </button>
                            <button className="px-3 py-1 bg-purple-600 text-white rounded text-sm flex items-center">
                                Join Now
                                <ChevronRight size={16} className="ml-1" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Meeting Card 3 */}
                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                    <div className="h-24 bg-gray-200 relative">
                        <Image src="/img/card-img-2.png" alt="Meeting banner" className="w-full h-full object-cover" width={100} height={100}/>
                    </div>
                    <div className="p-3">
                        <div className="mb-2">
                            <span className="inline-flex items-center bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                                Ongoing
                            </span>
                        </div>
                        <h3 className="font-medium mb-1">Weekly Meeting - Product Demo Review with Testers</h3>
                        <div className="flex items-center text-xs text-gray-500 mb-3">
                            <Calendar size={12} className="mr-1" />
                            <span>Mon, Jul 30, 2024</span>
                            <div className="mx-2 w-1 h-1 bg-gray-300 rounded-full"></div>
                            <Clock size={12} className="mr-1" />
                            <span>9:00 - 11:00AM</span>
                        </div>
                        <div className="flex items-center mb-3">
                            <div className="w-4 h-4 rounded-full bg-gray-300 mr-1"></div>
                            <span className="text-xs text-gray-500">UX Strategy Study group</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="px-3 py-1 border border-purple-500 text-purple-500 rounded text-sm">
                                View Participants
                            </button>
                            <button className="px-3 py-1 bg-purple-600 text-white rounded text-sm flex items-center">
                                Join Now
                                <ChevronRight size={16} className="ml-1" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
