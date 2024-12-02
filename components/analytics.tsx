import React from 'react';
import Image from 'next/image';
import { FaInstagram } from "react-icons/fa";
import Link from 'next/link';

const Analytics = () => {
  return (
    <div className='w-full bg-white min-h-screen py-32 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <Image className='mx-auto my-4' src="/logo-kknjogonalan.png" width={350} height={300} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>DATA ANALYTICS DASHBOARD</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-black'>Proyek Akhir KKN JOGONALAN UNY 2024</h1>
          <p className='text-black'>
          Sistem aplikasi ini merupakan proyek akhir dari KKN Jogonalan UNY 2024, yang dirancang untuk memberikan solusi inovatif dan efektif dalam meningkatkan partisipasi masyarakat serta mendukung pengembangan komunitas lokal. Melalui aplikasi ini, diharapkan dapat terjalin komunikasi yang lebih baik antara warga dan penyelenggara, serta memfasilitasi akses informasi dan layanan yang bermanfaat bagi semua pihak yang terlibat.
          </p>
          <Link href="https://www.instagram.com/honey.kissmow" className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 flex items-center justify-center hover:bg-slate-600'><FaInstagram className='mr-2'/>Instagram Kami</Link>
        </div>
      </div>
    </div>
  );
};

export default Analytics;