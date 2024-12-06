"use client";

import { useFormStatus } from "react-dom"
import { Button } from "./ui/button";
import toast from "react-hot-toast";

export const RegisterButton = () => {
    const {pending} = useFormStatus();
    return (
        <button type='submit' className='w-full text-white bg-blue-700 font-medium rounded-lg px-5 py-2.5 text-center uppercase hover:bg-blue-800' disabled={pending}>{pending ? "Registering..." : "Register"}</button>
    )
}
export const LoginButton = () => {
    const { pending } = useFormStatus();


    return (
        <Button 
            type='submit' 
            className='w-full mt-6 rounded-full bg-indigo-500 hover:bg-indigo-700'
            disabled={pending}
            onClick={() => {toast.success("Login Success")}}
        >
            {pending ? (
                <>
                    <div className="loader"></div>
                    <span className="ml-2">Authenticating...</span>
                </>
            ) : (
                "Masuk"
            )}
        </Button>
    );
};