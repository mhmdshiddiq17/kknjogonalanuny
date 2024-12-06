"use client";

import {FcGoogle} from 'react-icons/fc'
import { useFormState } from 'react-dom'
import { signInCredentials } from '@/lib/actions'
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import Image from 'next/image';
import { LoginButton } from '../button';


const FormLogin = () => {
    const [state, formAction] = useFormState(signInCredentials, null);

  return (
    <main className='bg-[#26313c] h-screen flex items-center justify-center p-10 w-full'>
        <div className='grid w-full h-full grid-cols-1 box-anim bg-white md:grid-cols-2'>
            <div className='bg-[#16202a] text-white flex items-center justify-center flex-col'>
                <div className='my-4'>
                    <h1 className='text-3xl font-semibold'>Masuk Admin</h1>
                    <p className='mt-2 text-xs text-slate-400'> {' '}Sistem Pencatatan Warga Desa Jogonalan</p>
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
                    <LoginButton/>
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
