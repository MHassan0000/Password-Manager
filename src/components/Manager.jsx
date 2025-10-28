import React, { useState, useRef, useEffect } from 'react';

const Manager = () => {
    const [form, setform] = useState({});
    const [DetailsArr, setDetailsArr] = useState([]);
    const ref = useRef();
    const pwdref = useRef();
    const [showToast, setShowToast] = useState({ show: false, message: '', type: '' });
    const [animateRow, setAnimateRow] = useState(null);
    const [editingId, setEditingId] = useState(null);
    const [saving, setSaving] = useState(false);


    const fetchData = async () => {
        const response = await fetch("/api/pwds");
        const data = await response.json();
        setDetailsArr(data);
        console.log(data);


    }
    useEffect(() => {
        fetchData();
        
    }, [])

    const savepassword = async () => {
        if (!form.website || !form.username || !form.password) {
            setShowToast({ show: true, message: 'Please fill all fields.', type: 'error' });
            return;
        }

        const { _id, id, ...cleanForm } = form;
        const newEntry = { ...cleanForm };

        setSaving(true);
        try {
            if (editingId) {
                await fetch(`/api/pwds/${editingId}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(newEntry)
                })
            } else {
                const updatedArr = [...DetailsArr, newEntry];
                setDetailsArr(updatedArr);
                await fetch("/api/pwds", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(newEntry)
                })
            }
            await fetchData();
            setform({});
            setEditingId(null);
            setShowToast({ show: true, message: editingId ? 'Password updated!' : 'Password added!', type: 'success' });
        } catch (e) {
            setShowToast({ show: true, message: 'Something went wrong.', type: 'error' });
        } finally {
            setSaving(false);
        }
        setAnimateRow(null);
    }

    const handlechange = async (e) => {
        await setform({ ...form, [e.target.name]: e.target.value })
        console.log(form);
    }

    const deleteItem = async (id,itemcurrent) => {
        setAnimateRow(id);
        setTimeout(async() => {
            const updatedDetails = DetailsArr.filter(item => (item._id || item.id) !== id);
            setDetailsArr(updatedDetails);
            await fetch(`/api/pwds/${itemcurrent._id}`, { method: "DELETE" })
            fetchData();
            setShowToast({ show: true, message: 'Entry deleted.', type: 'success' });
            setAnimateRow(null);
        }, 350);
    }
    const editItem = (id,itemcurrent) => {
        const itemToEdit = DetailsArr.find(item => (item._id || item.id) === id);
        if (itemToEdit) {
            setform({ ...itemToEdit });
            setEditingId(itemcurrent._id || null);
        }
    }

    const copytext = (text) => {
        navigator.clipboard.writeText(text);
        setShowToast({ show: true, message: 'Copied to clipboard!', type: 'success' });
    }

    const showpwd = () => {
        if (ref.current) {
            ref.current.src = ref.current.src.includes("eye.png") ? "/eyecross.png" : "/eye.png";
        }
        if (ref.current.src.includes("eyecross.png")) {
            pwdref.current.type = "text";
        } else {
            pwdref.current.type = "password";
        }
    }

    useEffect(() => {
        if (showToast.show) {
            const timer = setTimeout(() => setShowToast({ show: false, message: '', type: '' }), 2000);
            return () => clearTimeout(timer);
        }
    }, [showToast]);

    return (
        <div className="relative min-h-screen w-full overflow-x-hidden">
            <div className="-z-10 min-h-screen w-full fixed top-0 left-0 bg-gradient-to-br from-pink-400 via-purple-700 to-blue-600 animate-gradient-x"></div>
            <div className="container flex flex-col justify-center items-center mx-auto text-center rounded-3xl gap-6 sm:gap-10 max-w-xs sm:max-w-3xl relative z-10 py-8 sm:py-16 px-1 sm:px-2 md:px-0">
                <div className="content flex flex-col justify-center items-center gap-2 sm:gap-3">
                    <h1 className="text-3xl sm:text-5xl font-extrabold text-white drop-shadow-lg animate-fade-in-up">
                        <div className="logo font-bold my-6 sm:my-10 flex items-center gap-2">
                            <span className='text-yellow-300 animate-spin-slow'>
                                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="2" opacity="0.2"/><path d="M12 2a10 10 0 0 1 10 10" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
                            </span>
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-blue-200 text-lg sm:text-2xl">&lt; Pwd /&gt;</span>
                        </div>
                    </h1>
                    <p className="text-base sm:text-lg text-pink-100 animate-fade-in-up">Here you can manage your Pwds!</p>
                </div>
                <form className="w-full flex flex-col gap-4 sm:gap-6 bg-white/20 p-4 sm:p-8 rounded-3xl shadow-2xl backdrop-blur-2xl border border-white/30 animate-fade-in-up" onSubmit={e => { e.preventDefault(); savepassword(); }}>
                    <input name="website" onChange={handlechange} value={form.website || ""} type="text" className="py-2 sm:py-3 px-3 sm:px-5 rounded-xl w-full bg-white/80 focus:outline-none focus:ring-2 focus:ring-pink-400 transition placeholder:text-pink-400 text-pink-900 font-semibold text-sm sm:text-base" placeholder="Enter your website url" />
                    <div className="inputs flex flex-col md:flex-row justify-center items-center w-full gap-3 sm:gap-6">
                        <input name="username" onChange={handlechange} value={form.username || ""} type="text" className="py-2 sm:py-3 px-3 sm:px-5 rounded-xl bg-white/80 w-full focus:outline-none focus:ring-2 focus:ring-pink-400 transition placeholder:text-pink-400 text-pink-900 font-semibold text-sm sm:text-base" placeholder="Enter your username" />
                        <div className="relative w-full md:w-1/2 mt-2 md:mt-0">
                            <input name="password" onChange={handlechange} value={form.password || ""} type="password" ref={pwdref} className="py-2 sm:py-3 px-3 sm:px-5 rounded-xl bg-white/80 w-full focus:outline-none focus:ring-2 focus:ring-pink-400 transition pr-8 sm:pr-10 placeholder:text-pink-400 text-pink-900 font-semibold text-sm sm:text-base" placeholder="Enter your password" />
                            <span onClick={showpwd} className="absolute cursor-pointer right-2 sm:right-3 top-2 sm:top-3"><img ref={ref} className="w-5 h-5 sm:w-6 sm:h-6" src="/eye.png" alt="invisible" /></span>
                        </div>
                    </div>
                    <button type="submit" disabled={saving} className={`flex gap-2 sm:gap-3 items-center justify-center px-4 sm:px-6 py-2 rounded-xl text-white font-bold shadow-md transition-transform duration-150 animate-bounce-once text-sm sm:text-base ${saving ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 hover:scale-105 active:scale-95'}`}>
                        <div>
                            <lord-icon
                                src="https://cdn.lordicon.com/gzqofmcx.json"
                                trigger="hover"
                                colors="primary:#000000"
                                style={{ width: "22px", height: "22px", minWidth: "22px", minHeight: "22px" }}
                            ></lord-icon>
                        </div>
                        {saving ? 'Saving...' : (editingId ? 'Update' : 'Add')}
                    </button>
                </form>
                <div className="passwords w-full animate-fade-in-up">
                    <h2 className='text-white font-bold text-lg sm:text-2xl mb-2 sm:mb-4'>Your Saved Passwords</h2>
                    {DetailsArr.length === 0 && <p className='text-pink-100 my-2 text-sm sm:text-base'>No saved passwords found.</p>}
                    {DetailsArr.length !== 0 &&
                        <div className="overflow-x-auto w-full">
                            <table className="table-auto text-pink-900 bg-white/30 w-[500px] sm:w-full my-4 sm:my-6 rounded-2xl overflow-hidden shadow-lg backdrop-blur-2xl border border-white/30 text-xs sm:text-base min-w-[400px]">
                                <thead className='bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 text-white'>
                                    <tr>
                                        <th className='py-2 sm:py-3 px-1 sm:px-2'>Website URL</th>
                                        <th className='py-2 sm:py-3 px-1 sm:px-2'>Username</th>
                                        <th className='py-2 sm:py-3 px-1 sm:px-2'>Password</th>
                                        <th className='py-2 sm:py-3 px-1 sm:px-2'>Actions</th> 
                                    </tr>
                                </thead>
                                <tbody className='text-white'>
                                    {DetailsArr.map((item, index) => (
                                        <tr key={item._id || item.id} className={`transition-all duration-500 ${animateRow === (item._id || item.id) ? 'animate-row-pop' : ''}`} onAnimationEnd={() => setAnimateRow(null)}>
                                            <td className='text-center py-2 sm:py-4 px-1 sm:px-2'>
                                                <div className='flex justify-center items-center gap-1 sm:gap-2'>
                                                    <a target="_blank" rel="noopener noreferrer" href={item.website} className="underline hover:text-yellow-200 transition-colors break-all max-w-[90px] sm:max-w-none">{item.website}</a>
                                                    <button type="button" className="cursor-pointer p-1 rounded hover:bg-yellow-100/20 transition" onClick={() => copytext(item.website)}>
                                                        <lord-icon
                                                            src="https://cdn.lordicon.com/cfkiwvcc.json"
                                                            trigger="hover"
                                                            style={{ width: "18px", height: "18px", minWidth: "18px", minHeight: "18px", filter: "invert(1)" }}>
                                                        </lord-icon>
                                                    </button>
                                                </div>
                                            </td>
                                            <td className='text-center py-2 sm:py-4 px-1 sm:px-2'>
                                                <div className='flex justify-center items-center gap-1 sm:gap-2'>
                                                    {item.username}
                                                    <button type="button" className="cursor-pointer p-1 rounded hover:bg-pink-100/20 transition" onClick={() => copytext(item.username)}>
                                                        <lord-icon
                                                            src="https://cdn.lordicon.com/cfkiwvcc.json"
                                                            trigger="hover"
                                                            style={{ width: "18px", height: "18px", minWidth: "18px", minHeight: "18px", filter: "invert(1)" }}>
                                                        </lord-icon>
                                                    </button>
                                                </div>
                                            </td>
                                            <td className='text-center py-2 sm:py-4 px-1 sm:px-2'>
                                                <div className='flex justify-center items-center gap-1 sm:gap-2'>
                                                    {item.password}
                                                    <button type="button" className="cursor-pointer p-1 rounded hover:bg-blue-100/20 transition" onClick={() => copytext(item.password)}>
                                                        <lord-icon
                                                            src="https://cdn.lordicon.com/cfkiwvcc.json"
                                                            trigger="hover"
                                                            style={{ width: "18px", height: "18px", minWidth: "18px", minHeight: "18px", filter: "invert(1)" }}>
                                                        </lord-icon>
                                                    </button>
                                                </div>
                                            </td>
                                            <td className='text-center py-2 sm:py-4 px-1 sm:px-2'>
                                                <div className="flex justify-center items-center gap-1 sm:gap-3">
                                                    <button type="button" className="cursor-pointer p-1 rounded hover:bg-pink-100/20 transition" onClick={() => editItem(item._id || item.id,item)}>
                                                        <lord-icon
                                                            src="https://cdn.lordicon.com/meaqueth.json"
                                                            trigger="hover"
                                                            style={{ width: "20px", height: "20px", minWidth: "20px", minHeight: "20px" }}>
                                                        </lord-icon>
                                                    </button>
                                                    <button type="button" className="cursor-pointer p-1 rounded hover:bg-red-100/20 transition" onClick={() => deleteItem(item._id || item.id,item)}>
                                                        <lord-icon
                                                            src="https://cdn.lordicon.com/oqeixref.json"
                                                            trigger="hover"
                                                            style={{ width: "20px", height: "20px", minWidth: "20px", minHeight: "20px" }}>
                                                        </lord-icon>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>}
                </div>
                {showToast.show && (
                    <div className={`fixed bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 px-4 sm:px-6 py-2 sm:py-3 rounded-xl shadow-lg z-50 text-white font-semibold transition-all duration-300 text-xs sm:text-base ${showToast.type === 'success' ? 'bg-gradient-to-r from-green-400 to-blue-400' : 'bg-gradient-to-r from-red-400 to-pink-400'}`}>{showToast.message}</div>
                )}
            </div>
        </div>
    )
}

export default Manager