// "use client"
import Link from "next/link"
import Image from 'next/image'
import { auth, signOut } from "@/auth"
// import { useState } from "react"

const Navbar = async() => {
    const session = await auth()
    // const [nav, setNav] = useState(false);

    // const handleNav = () => {
    //   setNav(!nav);
    // };

  return (
    <nav className="border-b border-gray-200 w-full">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
            <Link href="/">
                <Image src="/logo-kknjogonalan.png" alt="logo" width={100} height={36} priority/>
            </Link>
            <h1 className='w-full text-3xl font-bold ml-2 text-[#00df9a]'>HONEY.KISSMOW</h1>
            <div className="flex items-center gap-3">
                <ul className="hidden md:flex items-center gap-4 mr-5 font-semibold text-white">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="#footer">Articles</Link></li>
                    <li><Link href="/article">About</Link></li>
                    <li><Link href="/article">Gallery</Link></li>
                    {session && (
                        <>
                            <li><Link href="/product">Warga</Link></li>
                            <li><Link href="/dashboard">Dashboard</Link></li>
                            {session.user.role === "SUPER_ADMIN" ? (
                                <li><Link href="/user">Users</Link></li>
                            ) : null}
                        </>
                    )}
                </ul>
                {session && (
                <div className="flex gap-3 items-center">
                    <div className="flex flex-col justify-center -space-y-1 ">
                        <span className="font-semibold text-gray-600 text-right capitalize">{session.user.name}</span>
                        <span className="font-xs text-gray-400 text-right capitalize">{session.user.role}</span>
                    </div>
                    <button type="button" className="text-sm ring-2 bg-gray-100 rounded-full">
                        <Image src={session.user.image || "/noavatar.png"} alt="avatar" width={64} height={64} className="w-8 h-8 rounded-full"/>
                    </button>
                </div>
                )}
                {session ? (
                    <form action={async() => {
                        "use server";
                        await signOut({redirectTo: "/login"});
                    }}>
                        <button type="submit" className="bg-indigo-400 text-white px-4 py-2 rounded-md hover:bg-indigo-500">Sign Out</button>
                    </form>
                ) : (
                    <Link href="/login" className='bg-[#00df9a] w-[150px] rounded-md font-medium my-6 mx-auto text-center py-3 text-black'>Masuk</Link>
                )}
            </div>
        </div>
    </nav>
//     <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
//         <Link href="/">
//             <Image src="/logo-kknjogonalan.png" alt="logo" width={60} height={36} priority/>
//         </Link>
//         <ul className="hidden md:flex items-center gap-4 mr-5 font-semibold text-white hover:text-slate-400">
//                    <li><Link href="/">Home</Link></li>
//                      <li><Link href="/article">Articles</Link></li>
//                      <li><Link href="/article">About</Link></li>
//                      <li><Link href="/article">Gallery</Link></li>
//                      {session && (
//                         <>
//                             <li><Link href="/product">Warga</Link></li>
//                             <li><Link href="/dashboard">Dashboard</Link></li>
//                             {session.user.role === "SUPER_ADMIN" ? (
//                                 <li><Link href="/user">Users</Link></li>
//                             ) : null}
//                         </>
//                     )}
//                         </ul>
//                         {session && (
//                 <div className="flex gap-3 items-center">
//                     <div className="flex flex-col justify-center -space-y-1 ">
//                         <span className="font-semibold text-gray-600 text-right capitalize">{session.user.name}</span>
//                         <span className="font-xs text-gray-400 text-right capitalize">{session.user.role}</span>
//                     </div>
//                     <button type="button" className="text-sm ring-2 bg-gray-100 rounded-full">
//                         <Image src={session.user.image || "/noavatar.png"} alt="avatar" width={64} height={64} className="w-8 h-8 rounded-full"/>
//                     </button>
//                 </div>
//                 )}
//                 {session ? (
//                     <form action={async() => {
//                         "use server";
//                         await signOut({redirectTo: "/login"});
//                     }}>
//                         <button type="submit" className="bg-indigo-400 text-white px-4 py-2 rounded-md hover:bg-indigo-500">Sign Out</button>
//                     </form>
//                 ) : (
//                     <Link href="/login" className="bg-indigo-400 text-white px-10 py-2 rounded-md w-36 hover:bg-indigo-500">Sign In</Link>
//                 )}
//                         </div>
//   )
//     {/* <ul className='hidden md:flex'>
//       <li className='p-4'>Home</li>
//       <li className='p-4'>Company</li>
//       <li className='p-4'>Resources</li>
//       <li className='p-4'>About</li>
//       <li className='p-4'>Contact</li>
//     </ul>
//     <div onClick={handleNav} className='block md:hidden'>
//         {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
//     </div>
//     <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
//       <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
//         <li className='p-4 border-b border-gray-600'>Home</li>
//         <li className='p-4 border-b border-gray-600'>Company</li>
//         <li className='p-4 border-b border-gray-600'>Resources</li>
//         <li className='p-4 border-b border-gray-600'>About</li>
//         <li className='p-4'>Contact</li>
//     </ul>
//   </div>
//   )
// } */}
  )
    }
export default Navbar
