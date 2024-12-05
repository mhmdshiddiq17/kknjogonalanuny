import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const formatDate = (date: Date) => {
  return new Date(date).toLocaleDateString("id-ID", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

export const calculateAge = (birthDate: string) => {
  const today = new Date()
  const birthDateObj = new Date(birthDate)
  let age = today.getFullYear() - birthDateObj.getFullYear()
  const m = today.getMonth() - birthDateObj.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birthDateObj.getDate())) {
    age--
  }
  return age
}

// utils.js

// utils.js

export const isValidInput = (value: any) => {
  const regex = /^([1]|[1])$/; // Validasi untuk angka 1-11
  return regex.test(value); // Memastikan panjang input maksimal 2 karakter
};