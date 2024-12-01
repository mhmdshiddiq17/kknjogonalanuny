"use server"
import {prisma} from '@/lib/prisma'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'

export const getUsers = async() => {
    const session = await auth();
    if(!session || !session.user || session.user.role !== "SUPER_ADMIN") redirect("/dashboard");

    try{
        const users = await prisma.user.findMany();
        return users;
    }catch(e){
        console.log(e);
    }
}

export const getWargaByRT = async () => {
    const session = await auth();
    if (!session || !session.user) redirect("/dashboard");
    const role = session.user.role;

    try {
        let warga;
    
        // Check if the role is SUPER_ADMIN
        if (role === 'SUPER_ADMIN') {
            warga = await prisma.warga.findMany({
                include: { rt: { select: { nomor: true } } }
            });
        } else if (role.startsWith('ADMIN_RT')) {
            // Extract the RT number from the role
            const rtId = parseInt(role.replace('ADMIN_RT', ''), 10);
            
            // Ensure rtId is within the expected range
            if (rtId >= 1 && rtId <= 11) {
                warga = await prisma.warga.findMany({
                    where: { rtId },
                    include: { rt: { select: { nomor: true } } }
                });
            } else {
                // If rtId is out of the expected range, handle accordingly
                throw new Error("Invalid RT ID");
            }
        } else {
            // Default case for other roles (e.g., user)
            warga = await prisma.warga.findMany({
                where: { id: session.user.id },
                include: { rt: { select: { nomor: true } } }
            });
        }
    
        return warga;
    } catch (e) {
        console.log(e);
        throw new Error("Failed to fetch warga data.");
    }
};