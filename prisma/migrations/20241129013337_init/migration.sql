-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('USER', 'ADMIN_RT01', 'ADMIN_RT02', 'ADMIN_RT03', 'ADMIN_RT04', 'ADMIN_RT05', 'ADMIN_RT06', 'SUPER_ADMIN');

-- CreateEnum
CREATE TYPE "JenisKelamin" AS ENUM ('Laki_Laki', 'Perempuan');

-- CreateEnum
CREATE TYPE "StatusPerkawinan" AS ENUM ('Belum_Kawin', 'Kawin', 'Cerai');

-- CreateEnum
CREATE TYPE "StatusWarga" AS ENUM ('Aktif', 'Tidak_Aktif');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "email_verified" TIMESTAMP(3),
    "image" TEXT,
    "password" TEXT,
    "role" "UserRole" DEFAULT 'USER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "accounts" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "provider_account_id" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sessions" (
    "id" TEXT NOT NULL,
    "session_token" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "verification_tokens" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "RT" (
    "id" SERIAL NOT NULL,
    "nomor" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RT_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Warga" (
    "id" TEXT NOT NULL,
    "nik" TEXT,
    "namaLengkap" TEXT NOT NULL,
    "jenisKelamin" "JenisKelamin" NOT NULL,
    "tempatLahir" TEXT,
    "tanggalLahir" TIMESTAMP(3) NOT NULL,
    "agama" TEXT NOT NULL,
    "pendidikan" TEXT,
    "pekerjaan" TEXT,
    "statusPerkawinan" "StatusPerkawinan",
    "statusWarga" "StatusWarga",
    "rtId" INTEGER,

    CONSTRAINT "Warga_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "accounts_provider_provider_account_id_key" ON "accounts"("provider", "provider_account_id");

-- CreateIndex
CREATE UNIQUE INDEX "sessions_session_token_key" ON "sessions"("session_token");

-- CreateIndex
CREATE UNIQUE INDEX "verification_tokens_identifier_token_key" ON "verification_tokens"("identifier", "token");

-- CreateIndex
CREATE UNIQUE INDEX "Warga_nik_key" ON "Warga"("nik");

-- AddForeignKey
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Warga" ADD CONSTRAINT "Warga_rtId_fkey" FOREIGN KEY ("rtId") REFERENCES "RT"("id") ON DELETE SET NULL ON UPDATE CASCADE;
