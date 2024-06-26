-- CreateEnum
CREATE TYPE "UtilityPercent" AS ENUM ('FORTY', 'THIRTY', 'TWENTY', 'FIFTEEN', 'TEN');

-- CreateEnum
CREATE TYPE "SubmittableAndPayTime" AS ENUM ('WEEK', 'TWO_WEEKS', 'THREE_WEEKS', 'MONTH', 'TWO_MONTHS');

-- CreateEnum
CREATE TYPE "EmployePosition" AS ENUM ('DEVELOPER_FULLSTACK', 'DEVELOPER_FRONTEND', 'DEVELOPER_BACKEND', 'ARQUITECT', 'MARKETER', 'UX_DESIGNER', 'CONTADOR');

-- CreateEnum
CREATE TYPE "Experience" AS ENUM ('INTER', 'JUNIOR', 'SEMI_SENIOR', 'SENIOR');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Client" (
    "id" SERIAL NOT NULL,
    "doc" TEXT,
    "name" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Module" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "days" INTEGER,
    "parentId" INTEGER,

    CONSTRAINT "Module_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Floro" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Floro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cotizacion" (
    "id" SERIAL NOT NULL,
    "code" INTEGER NOT NULL,
    "quotationNumber" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "hosting" BOOLEAN NOT NULL DEFAULT false,
    "utilityPercent" "UtilityPercent" NOT NULL DEFAULT 'THIRTY',
    "timeOver" "SubmittableAndPayTime" NOT NULL DEFAULT 'TWO_WEEKS',
    "submittable" "SubmittableAndPayTime" NOT NULL DEFAULT 'TWO_WEEKS',
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "clientId" INTEGER NOT NULL,

    CONSTRAINT "Cotizacion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Employe" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "position" "EmployePosition" NOT NULL DEFAULT 'DEVELOPER_FULLSTACK',
    "experience" "Experience" NOT NULL DEFAULT 'SEMI_SENIOR',

    CONSTRAINT "Employe_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "Module" ADD CONSTRAINT "Module_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Module"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cotizacion" ADD CONSTRAINT "Cotizacion_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
