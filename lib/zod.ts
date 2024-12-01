import {object, string} from 'zod'


export const RegisterSchema = object({
    name: string().min(1, "Name must be more than 1 character"),
    email: string().email("Invalid Email"),
    password: string().min(8, "Password must be more than 8 characters").max(16, "Password must be less than 16 characters"),
    ConfirmPassword: string().min(8, "Password must be more than 8 characters").max(16, "Password must be less than 16 characters"),
}).refine((data) => data.password === data.ConfirmPassword, {
    message: "Passwords don't match",
    path: ["ConfirmPassword"]
})
export const SignInSchema = object({
    email: string().email("Invalid Email"),
    password: string().min(8, "Password must be more than 8 characters").max(16, "Password must be less than 16 characters"),
})