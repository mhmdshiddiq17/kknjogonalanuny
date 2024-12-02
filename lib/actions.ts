"use server"
import { prisma } from "./prisma";
import { RegisterSchema, SignInSchema } from "./zod"
import { hashSync } from "bcrypt-ts";
import {redirect} from "next/navigation"
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export const SignUpCredentials = async ( prevState: unknown,formData: FormData) => {
    const  validatedField = RegisterSchema.safeParse(Object.fromEntries(formData.entries()));

    if(!validatedField.success){
        return{
            error: validatedField.error.flatten().fieldErrors
        }
    }

    const {name, email, password} = validatedField.data;
    const hashedPassword = hashSync(password, 10);

    try{
        await prisma.user.create({
            data: {
                name, 
                email,
                password: hashedPassword
            }
        })
    }catch(e){
        return {message: "Failed to register user" + e}
    }

    redirect('/login');
} 

//Sign in
export const signInCredentials = async( prevState: unknown,formData: FormData) => {
    const  validatedField = SignInSchema.safeParse(Object.fromEntries(formData.entries()));

    if(!validatedField.success){
        return{
            error: validatedField.error.flatten().fieldErrors
        }
    }

    const {email, password} = validatedField.data;

    try{
        await signIn("credentials", {email, password, redirectTo: '/dashboard'})
    }catch(e){
        if(e instanceof AuthError){
            switch (e.type){
                case "CredentialsSignin":
                    return {message: "Invalid Credentials"}
                default: 
                    return {message: "Something went wrong"}
            }
        }
        throw e;
    }
}

export const addWarga = async (prevState: unknown, formData: FormData) => {
    const { namaLengkap, agama, jenisKelamin, pekerjaan, pendidikan, rtId, tanggalLahir, tempatLahir, nik } = Object.fromEntries(formData.entries());



    try {
        const newWarga = await prisma.warga.create({
            data: {
                nik: nik ? nik.toString() : undefined,
                namaLengkap: namaLengkap.toString(),
                agama: agama.toString(),
                tempatLahir: tempatLahir.toString(),
                jenisKelamin: jenisKelamin.toString(), // Adjust type as necessary
                pekerjaan: pekerjaan.toString(),
                pendidikan: pendidikan.toString(),
                rtId: Number(rtId),
                tanggalLahir: new Date(tanggalLahir as string), // Ensure the date is in the correct format
            },
        });
        return newWarga;

    } catch (error) {
        console.error("Error adding warga:", error);
        throw new Error("Could not add warga data.");
    }
    redirect('/product');
};

export const deleteWarga = async(userId: string) => {
    try {
        const deletedUser = await prisma.warga.delete({
            where: {
                id: userId, // Ganti 'id' dengan field yang sesuai jika perlu
            },
        });
        console.log('User deleted:', deletedUser);
    } catch (error) {
        console.error('Error deleting user:', error);
    }
    redirect("/product");
}