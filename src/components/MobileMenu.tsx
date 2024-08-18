"use client"
import { useState } from "react";

const MobileMenu = () => {
    const [open, setIsOpen] = useState(false);
    return (
        <div className="md:hidden">
            
            <div className="flex flex-col cursor-pointer gap-[4.5]" onClick={() => setIsOpen((prev) => !prev)}>
                <div className={`w-6 h-1 bg-blue-500 rounded-sm ${open ? 'rotate-45' : ''} origin-left ease-in-out duration-500`}></div>
                <div className={`w-6 h-1 bg-blue-500 rounded-sm ${open ? 'opacity-0' : ''} ease-in-out duration-500`}></div>
                <div className={`w-6 h-1 bg-blue-500 rounded-sm ${open ? '-rotate-45' : ''} origin-left ease-in-out duration-500`}></div>
            </div>
            {open && (
                <div className="absolute left-0 top-24 w-full h-[calc(100vh-96px)] bg-white flex flex-col items-center justify-center gap-8 font-medium text-xl">
                    <div className="flex flex-col gap-4 p-4">
                        <a href="#" className="text-blue-600">Home</a>
                        <a href="#" className="text-blue-600">Friends</a>
                        <a href="#" className="text-blue-600">Groups</a>
                        <a href="#" className="text-blue-600">Stories</a>
                        <a href="#" className="text-blue-600">Login</a>

                    </div>
                </div>
            )}
        </div>
    );
};

export default MobileMenu;