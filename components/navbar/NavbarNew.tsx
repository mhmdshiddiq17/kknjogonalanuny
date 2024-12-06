"use client"
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import Image from 'next/image'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react'
export default function NavbarNew() {
    const pathname = usePathname();
    const getLinkClasses = (path: any) => {
      return `rounded-md px-3 py-2 text-sm font-medium ${
        pathname === path ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
      }`;
    };


    const [session, setSession] = useState<any>([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchSession = async () => {
        const response = await fetch('/api/auth/session');
        const data = await response.json();
        
        if (response) {
          setSession(data);
        } else {
          console.log(data);
        }
        setLoading(false);
      };
  
      fetchSession();
    }, []);
    // console.log(session.user, "data")
  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex items-center px-2 lg:px-0">
            <div className="flex-shrink-0">
              <Image
                alt="Your Company"
                src="/logo-kknjogonalan.png"
                width={100}
                height={100}
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden lg:ml-6 lg:block">
                <div className="flex space-x-4">
                    <Link href="/" className={getLinkClasses('/')}>
                    Home
                    </Link>
                    <Link href="/login" className={getLinkClasses('/article')}>
                    Article
                    </Link>
                    <Link href="/register" className={getLinkClasses('/about')}>
                    About
                    </Link>
                    {session && (
                        <>
                            <li><Link href="/product" className={getLinkClasses('/product')}>Warga</Link></li>
                            <li><Link href="/dashboard" className={getLinkClasses('/dashboard')}>Dashboard</Link></li>
                            {session.user?.role === "SUPER_ADMIN" ? (
                                <li><Link href="/user" className={getLinkClasses('/user')}>Users</Link></li>
                            ) : null}
                        </>
                    )}
                </div>
            </div>
          </div>
          {session ? (
            <>
                <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
                    <div className="w-full max-w-lg lg:max-w-xs">
                    <label htmlFor="search" className="sr-only">
                        Search
                    </label>
                    <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <MagnifyingGlassIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                        id="search"
                        name="search"
                        type="search"
                        placeholder="Search"
                        className="block w-full rounded-md border-0 bg-gray-700 py-1.5 pl-10 pr-3 text-gray-300 placeholder:text-gray-400 focus:bg-white focus:text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
                        />
                    </div>
                    </div>
                </div>
                <div className="flex lg:hidden">
                    {/* Mobile menu button */}
                    <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                    <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                    </DisclosureButton>
                </div>
                <div className="hidden lg:ml-4 lg:block">
                    <div className="flex items-center">
                    <button
                        type="button"
                        className="relative flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">View notifications</span>
                        <BellIcon aria-hidden="true" className="h-6 w-6" />
                    </button>

                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-4 flex-shrink-0">
                        <div>
                        <MenuButton className="relative flex rounded-full bg-gray-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <img
                            alt=""
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            className="h-8 w-8 rounded-full"
                            />
                        </MenuButton>
                        </div>
                        <MenuItems
                        transition
                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                        <MenuItem>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                            Your Profile
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                            Settings
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                            Sign out
                            </a>
                        </MenuItem>
                        </MenuItems>
                    </Menu>
                    </div>
                </div>
            </>
          ) : (              
          <Link
            href="/login"
            className="ml-6 inline-flex items-center w-[120px] justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Masuk
          </Link>)}
        </div>
      </div>

      <DisclosurePanel className="lg:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
          <DisclosureButton
            as="a"
            href="#"
            className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
          >
            Dashboard
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="/dashboard/product"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Team
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Projects
          </DisclosureButton>
          <DisclosureButton
            as="a"
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Calendar
          </DisclosureButton>
        </div>
        <div className="border-t border-gray-700 pb-3 pt-4">
          <div className="flex items-center px-5">
            <div className="flex-shrink-0">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="h-10 w-10 rounded-full"
              />
            </div>
            <div className="ml-3">
              <div className="text-base font-medium text-white">Tom Cook</div>
              <div className="text-sm font-medium text-gray-400">tom@example.com</div>
            </div>
            <button
              type="button"
              className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-3 space-y-1 px-2">
            <DisclosureButton
              as="a"
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              Your Profile
            </DisclosureButton>
            <DisclosureButton
              as="a"
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              Settings
            </DisclosureButton>
            <DisclosureButton
              as="a"
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              Sign out
            </DisclosureButton>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
