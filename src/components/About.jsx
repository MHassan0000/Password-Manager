import React from 'react'

const About = () => {
    return (
        <div className="relative min-h-screen w-full overflow-x-hidden">
            <div className="-z-10 min-h-screen w-full fixed top-0 left-0 bg-gradient-to-br from-pink-400 via-purple-700 to-blue-600 animate-gradient-x"></div>
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16 relative z-10">
                <header className="text-center mb-10 sm:mb-16">
                    <h1 className="text-3xl sm:text-5xl font-extrabold text-white drop-shadow-lg animate-fade-in-up">
                        About Pwd Manager
                    </h1>
                    <p className="mt-3 sm:mt-4 text-pink-100 text-base sm:text-lg max-w-2xl mx-auto animate-fade-in-up">
                        A sleek, secure, and delightful password manager to simplify your digital life.
                    </p>
                </header>

                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    <div className="bg-white/20 backdrop-blur-2xl border border-white/30 rounded-3xl p-5 sm:p-6 shadow-2xl hover:scale-[1.01] transition">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="text-yellow-300">
                                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="2" opacity="0.2"/><path d="M12 2a10 10 0 0 1 10 10" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
                            </span>
                            <h3 className="text-white text-lg sm:text-xl font-bold">Security First</h3>
                        </div>
                        <p className="text-pink-100 text-sm sm:text-base">Your data is handled with care using robust API endpoints and best practices.</p>
                    </div>

                    <div className="bg-white/20 backdrop-blur-2xl border border-white/30 rounded-3xl p-5 sm:p-6 shadow-2xl hover:scale-[1.01] transition">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="text-yellow-300">
                                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="2" opacity="0.2"/><path d="M12 2a10 10 0 0 1 10 10" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
                            </span>
                            <h3 className="text-white text-lg sm:text-xl font-bold">Effortless UX</h3>
                        </div>
                        <p className="text-pink-100 text-sm sm:text-base">Clean, responsive UI powered by Tailwind ensures a smooth experience on any device.</p>
                    </div>

                    <div className="bg-white/20 backdrop-blur-2xl border border-white/30 rounded-3xl p-5 sm:p-6 shadow-2xl hover:scale-[1.01] transition sm:col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="text-yellow-300">
                                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="2" opacity="0.2"/><path d="M12 2a10 10 0 0 1 10 10" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
                            </span>
                            <h3 className="text-white text-lg sm:text-xl font-bold">Open & Extensible</h3>
                        </div>
                        <p className="text-pink-100 text-sm sm:text-base">Built with React + Vite and Tailwind v4—easy to extend with new features.</p>
                    </div>
                </section>

                <section className="mt-10 sm:mt-16 bg-white/10 border border-white/20 rounded-3xl p-6 sm:p-10 text-center">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">Our Mission</h2>
                    <p className="text-pink-100 text-sm sm:text-base max-w-3xl mx-auto">
                        We aim to provide a beautifully designed, lightweight password manager that keeps your credentials organized and accessible, without compromising on visual quality or responsiveness.
                    </p>
                </section>
            </div>
        </div>
    )
}

export default About


