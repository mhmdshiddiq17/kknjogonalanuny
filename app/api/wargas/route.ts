import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(){
    const session = await auth();
    if (!session || !session.user) redirect("/dashboard/product");
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
    
        return NextResponse.json(warga);
    } catch (e) {
        console.log(e);
        throw new Error("Failed to fetch warga data.");
    }
}