import React from 'react'

const Footer = () => {
    return (
        <footer className="w-full bg-gradient-to-tr from-pink-500 via-purple-600 to-blue-500 text-white py-6 px-2 sm:py-8 sm:px-4 shadow-2xl mt-10">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 text-xs sm:text-base">
                <div className="flex items-center gap-2 sm:gap-3">
                    <span className="text-2xl sm:text-3xl animate-spin-slow">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="2" opacity="0.2"/><path d="M12 2a10 10 0 0 1 10 10" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
                    </span>
                    <span className="font-extrabold text-lg sm:text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-blue-200 select-none">
                        &lt; Pwd /&gt;
                    </span>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                    <a href="#" className="hover:text-yellow-200 transition-colors duration-200 font-semibold">Home</a>
                    <a href="#" className="hover:text-pink-200 transition-colors duration-200 font-semibold">About</a>
                    <a href="#" className="hover:text-blue-200 transition-colors duration-200 font-semibold">Contact</a>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-200">
                    <span className="inline-flex items-center gap-1">
                        <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9 4.03 9 9 9z" stroke="#fff" strokeWidth="2" opacity="0.3"/><path d="M12 7v5l3 3" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
                        2023 Your Company
                    </span>
                    <span className="hidden sm:inline">|</span>
                    <span>All rights reserved.</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer