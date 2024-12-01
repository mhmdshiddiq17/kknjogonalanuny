"use client";

import Link from 'next/link'
import { useFormState } from 'react-dom'
import { signInCredentials } from '@/lib/actions'
import { LoginButton } from '../button';

const FormLogin = () => {
    const [state, formAction] = useFormState(signInCredentials, null);

  return (
    <form action={formAction} className='space-y-6'>
        {state?.message ? (            
            <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-100" role='alert'>
                <span className='font-medium'>{state?.message}</span>
            </div>
        ) : null}
        
        <div>
            <label htmlFor="email" className='block mb-2 text-sm font-medium text-gray-900'>Email</label>
            <input type="email" name='email' className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5' placeholder='johndoe@mail.com'/>
            <div aria-live='polite' aria-atomic="true">
                <span className='text-sm text-red-500 mt-2'>{state?.error?.email}</span>
            </div>
        </div>
        <div>
            <label htmlFor="password" className='block mb-2 text-sm font-medium text-gray-900'>Password</label>
            <input type="password" name='password' className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5' placeholder='*******'/>
            <div aria-live='polite' aria-atomic="true">
                <span className='text-sm text-red-500 mt-2'>{state?.error?.password}</span>
            </div>
        </div>
        
        <LoginButton />
        <p className='text-sm font-light text-gray-500'>Dont have an account? 
            <Link href="/register">
                <span className='font-medium pl-1 text-blue-600 hover:text-blue-700'>Sign Up Here</span>
            </Link>
        </p>
    </form>
  )
}

export default FormLogin