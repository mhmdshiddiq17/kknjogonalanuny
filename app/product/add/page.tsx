"use client";
import React from 'react';
import styles from './addWarga.module.css';
import { addWarga } from '@/lib/actions';

const AddProductPage: React.FC = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(event.currentTarget); // Get form data

    try {
      const newWarga = await addWarga(undefined, formData); // Call the addWarga function
      alert("Data warga berhasil ditambahkan") // Log the newly added warga
    } catch (error) {
      console.error("Error adding warga:", error);
    }
  };


  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input type="text" placeholder='Nama Lengkap' name='namaLengkap' required />
        <input type="number" placeholder='NIK (OPTIONAL)' name='nik' />
        <select name="jenisKelamin" id="jenisKelamin" required>
          <option value="" >Jenis Kelamin</option>
          <option value="Laki-Laki">Laki - Laki</option>
          <option value="Perempuan">Perempuan</option>
        </select>
        <input type="text" placeholder='Tempat Lahir' name='tempatLahir' />
        <select name="agama" id="agama" required>
          <option value="" >Agama</option>
          <option value="Islam">Islam</option>
          <option value="Kristen">Kristen</option>
          <option value="Katolik">Katolik</option>
          <option value="Hindu">Hindu</option>
          <option value="Budha">Budha</option>
          <option value="Konghucu">Konghucu</option>
        </select>
        <select name="pendidikan" id="pendidikan" required>
          <option value="" >Pendidikan Terakhir</option>
          <option value="Tidak/belum sekolah">Tidak/belum sekolah</option>
          <option value="Belum tamat SD/Sederajat">Belum tamat SD/Sederajat</option>
          <option value="Tamat SD/Sederajat">Tamat SD/Sederajat</option>
          <option value="SLTP/Sederajat">SLTP/Sederajat</option>
          <option value="SLTA/sederajat">SLTA/sederajat</option>
          <option value="Diploma I/II">Diploma I/II</option>
          <option value="Akademi/Diploma III/Sarjana Muda">Akademi/Diploma III/Sarjana Muda</option>
          <option value="Diploma IV/Strata I">Diploma IV/Strata I</option>
          <option value="Strata II">Strata II</option>
          <option value="Strata III">Strata III</option>
        </select>
        <input type="text" placeholder='Pekerjaan' name='pekerjaan' />
        <input type="date" placeholder='Tanggal Lahir' name='tanggalLahir' required /> 
        <input type="number" placeholder='RT ID (1 - 11)' onChange={(e) => { if (e.target.value.length > 2) e.target.value = e.target.value.slice(0, 2) }} name='rtId' required min={1} max={11} />
        <button type='submit' className={styles.button}>Submit</button>
      </form>
    </div>
  );
}

export default AddProductPage;