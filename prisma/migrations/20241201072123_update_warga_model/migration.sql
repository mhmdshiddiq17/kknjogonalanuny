/*
  Warnings:

  - The `jenisKelamin` column on the `Warga` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `statusPerkawinan` column on the `Warga` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `statusWarga` column on the `Warga` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Warga" DROP COLUMN "jenisKelamin",
ADD COLUMN     "jenisKelamin" TEXT,
DROP COLUMN "statusPerkawinan",
ADD COLUMN     "statusPerkawinan" TEXT,
DROP COLUMN "statusWarga",
ADD COLUMN     "statusWarga" TEXT;
