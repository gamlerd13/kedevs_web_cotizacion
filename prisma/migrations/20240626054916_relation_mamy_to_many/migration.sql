-- CreateTable
CREATE TABLE "ModuleCotizacion" (
    "moduleId" INTEGER NOT NULL,
    "cotizacionId" INTEGER NOT NULL,

    CONSTRAINT "ModuleCotizacion_pkey" PRIMARY KEY ("moduleId","cotizacionId")
);

-- AddForeignKey
ALTER TABLE "ModuleCotizacion" ADD CONSTRAINT "ModuleCotizacion_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "Module"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModuleCotizacion" ADD CONSTRAINT "ModuleCotizacion_cotizacionId_fkey" FOREIGN KEY ("cotizacionId") REFERENCES "Cotizacion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
