import React from 'react'

const services = [
    {
        title: 'Password Vault',
        desc: 'Store and manage your website credentials in a clean, searchable list.',
        color: 'from-pink-400 via-purple-400 to-blue-400'
    },
    {
        title: 'One-Click Copy',
        desc: 'Quickly copy website, username, or password to clipboard when needed.',
        color: 'from-blue-400 via-indigo-400 to-purple-400'
    },
    {
        title: 'Inline Editing',
        desc: 'Update entries instantly with smooth animations and clear feedback.',
        color: 'from-purple-400 via-fuchsia-400 to-pink-400'
    },
    {
        title: 'Responsive UI',
        desc: 'Beautiful on phones, tablets, and desktops—thanks to Tailwind.',
        color: 'from-rose-400 via-pink-400 to-orange-300'
    }
]

const Services = () => {
    return (
        <div className="relative min-h-screen w-full overflow-x-hidden">
            <div className="-z-10 min-h-screen w-full fixed top-0 left-0 bg-gradient-to-br from-pink-400 via-purple-700 to-blue-600 animate-gradient-x"></div>
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16 relative z-10">
                <header className="text-center mb-10 sm:mb-16">
                    <h1 className="text-3xl sm:text-5xl font-extrabold text-white drop-shadow-lg animate-fade-in-up">
                        Services
                    </h1>
                    <p className="mt-3 sm:mt-4 text-pink-100 text-base sm:text-lg max-w-2xl mx-auto animate-fade-in-up">
                        Everything you need to organize, view, and maintain your passwords with ease.
                    </p>
                </header>

                <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {services.map((s) => (
                        <div key={s.title} className="bg-white/20 backdrop-blur-2xl border border-white/30 rounded-3xl p-5 sm:p-6 shadow-2xl">
                            <div className={`inline-flex items-center justify-center rounded-2xl px-3 py-2 text-white font-bold bg-gradient-to-r ${s.color} mb-4`}>
                                {s.title}
                            </div>
                            <p className="text-pink-100 text-sm sm:text-base">{s.desc}</p>
                        </div>
                    ))}
                </section>

                <section className="mt-10 sm:mt-16 text-center bg-white/10 border border-white/20 rounded-3xl p-6 sm:p-10">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">Need something else?</h2>
                    <p className="text-pink-100 text-sm sm:text-base max-w-3xl mx-auto">
                        This project is easy to extend—add export/import, tagging, or advanced filters as you grow.
                    </p>
                </section>
            </div>
        </div>
    )
}

export default Services


