"use client"
import { useState } from "react";

const MobileMenu = () => {
    const [open, setIsOpen] = useState(false);
    return (
        <div className="">
            
            <div className="flex flex-col cursor-pointer gap-[4.5]" onClick={() => setIsOpen((prev) => !prev)}>
                <div className="w-6 h-1 bg-blue-500 rounded-sm"></div>
                <div className="w-6 h-1 bg-blue-500 rounded-sm"></div>
                <div className="w-6 h-1 bg-blue-500 rounded-sm"></div>
            </div>
        </div>
    );
};

export default MobileMenu;