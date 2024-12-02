"use client";

import {FcGoogle} from 'react-icons/fc'
import { useFormState } from 'react-dom'
import { signInCredentials } from '@/lib/actions'
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import Image from 'next/image';

const FormLogin = () => {
    const [state, formAction] = useFormState(signInCredentials, null);

  return (
    // <form action={formAction} className='space-y-6'>
    //     {state?.message ? (            
    //         <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-100" role='alert'>
    //             <span className='font-medium'>{state?.message}</span>
    //         </div>
    //     ) : null}
        
    //     <div>
    //         <label htmlFor="email" className='block mb-2 text-sm font-medium text-gray-900'>Email</label>
    //         <input type="email" name='email' className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5' placeholder='johndoe@mail.com'/>
    //         <div aria-live='polite' aria-atomic="true">
    //             <span className='text-sm text-red-500 mt-2'>{state?.error?.email}</span>
    //         </div>
    //     </div>
    //     <div>
    //         <label htmlFor="password" className='block mb-2 text-sm font-medium text-gray-900'>Password</label>
    //         <input type="password" name='password' className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5' placeholder='*******'/>
    //         <div aria-live='polite' aria-atomic="true">
    //             <span className='text-sm text-red-500 mt-2'>{state?.error?.password}</span>
    //         </div>
    //     </div>
        
    //     <LoginButton />
    //     <p className='text-sm font-light text-gray-500'>Dont have an account? 
    //         <Link href="/register">
    //             <span className='font-medium pl-1 text-blue-600 hover:text-blue-700'>Sign Up Here</span>
    //         </Link>
    //     </p>
    // </form>
    <main className='bg-[#26313c] h-screen flex items-center justify-center p-10 w-full'>
        <div className='grid w-full h-full grid-cols-1 box-anim bg-white md:grid-cols-2'>
            <div className='bg-[#16202a] text-white flex items-center justify-center flex-col'>
                <div className='my-4'>
                    <h1 className='text-3xl font-semibold'>Login</h1>
                    <p className='mt-2 text-xs text-slate-400'> {' '}See Your Growth and get consulting growth</p>
                </div>
                <form action={formAction}>
                    {state?.message ? (            
                        <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-100" role='alert'>
                            <span className='font-medium'>{state?.message}</span>
                        </div>
                    ) : null}
                    <Button variant="outline" className='flex items-center w-full gap-4 px-12 bg-transparent rounded-full'>
                        <FcGoogle />
                        Sign In With Google
                    </Button>
                    <Label htmlFor='email'>Email*</Label>
                    <Input className='mt-2 mb-4 bg-transparent rounded-full' type='email' id='email' placeholder='Email' name='email'/>
                        <div aria-live='polite' aria-atomic="true">
                        <span className='text-sm text-red-500 mt-2'>{state?.error?.email}</span>
                        </div>
                    <Label htmlFor='password'>Password*</Label>
                    <Input className='mt-2 mb-4 bg-transparent rounded-full' type='password' id='password' placeholder='Password' name='password'/>
                        <div aria-live='polite' aria-atomic="true">
                            <span className='text-sm text-red-500 mt-2'>{state?.error?.password}</span>
                        </div>
                    <Button type='submit' className='w-full mt-6 rounded-full bg-indigo-500 hover:bg-indigo-700'>
                        Login
                    </Button>
                </form>
                <p className='mt-4 text-xs text-slate-200'>@2024 KKN HONEY KISMO UNY</p>
            </div>
            <div className='relative hidden md:block'>
                <Image src="/logo-kknjogonalan.jpeg" className='object-cover' fill alt="backgroung Image"/>
            </div>
        </div>
    </main>
  )
}

export default FormLogin
