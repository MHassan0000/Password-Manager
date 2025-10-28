import React, { useState } from 'react'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="bg-gradient-to-tr from-pink-500 via-purple-600 to-blue-500 shadow-2xl py-3 px-2 animate-fade-in-down">
            <div className="navcontainer flex text-white justify-between items-center h-16 max-w-7xl mx-auto gap-2 sm:gap-6">
                <div className="logo font-extrabold text-2xl sm:text-3xl tracking-tight flex items-center gap-2 select-none">
                    <span className="text-yellow-300 animate-spin-slow">
                        <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="2" opacity="0.2"/><path d="M12 2a10 10 0 0 1 10 10" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
                    </span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-blue-200">&lt; Pwd /&gt;</span>
                </div>
                <button className="sm:hidden flex items-center px-2 py-1" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <ul className={`flex-col sm:flex-row flex sm:flex gap-2 sm:gap-10 justify-center items-center font-semibold text-base sm:text-lg absolute sm:static top-16 left-0 w-full sm:w-auto bg-gradient-to-tr from-pink-500 via-purple-600 to-blue-500 sm:bg-none z-40 transition-all duration-300 ${menuOpen ? 'flex' : 'hidden sm:flex'}`}>
                    <li><a className="hover:text-yellow-200 transition-colors duration-200 flex items-center gap-1 py-2 sm:py-0" href="#"><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M3 12l9-9 9 9" stroke="#fff" strokeWidth="2"/></svg>Home</a></li>
                    <li><a className="hover:text-pink-200 transition-colors duration-200 flex items-center gap-1 py-2 sm:py-0" href="#"><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="2"/><path d="M12 8v4l3 3" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>About</a></li>
                    <li><a className="hover:text-blue-200 transition-colors duration-200 flex items-center gap-1 py-2 sm:py-0" href="#"><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8.5" stroke="#fff" strokeWidth="2"/><path d="M7 10V7a5 5 0 0 1 10 0v3" stroke="#fff" strokeWidth="2"/></svg>Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar