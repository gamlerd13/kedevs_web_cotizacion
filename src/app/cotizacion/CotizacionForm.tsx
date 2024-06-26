"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import ClientForm from "./ClientForm";
import FloroForm from "./FloroForm";
function CotizacionForm() {
  const [clientFormOpen, setClientFormOpen] = useState<Boolean>(false);
  const [floroFormOpen, setFloroFormOpen] = useState<Boolean>(false);

  // list Modules
  const [modules, setModules] = useState([
    { id: 0, name: "modulo 0", days: 12 },
  ]);

  const onClickAddModule = () => {
    const newModule = {
      id: modules.length + 1, // O cualquier lógica para generar un nuevo ID
      name: `Module ${modules.length + 1}`,
      days: Math.floor(Math.random() * 10) + 1, // O cualquier lógica para generar datos del módulo
    };
    setModules([...modules, newModule]);
  };

  return (
    <div className="">
      {clientFormOpen && <ClientForm />}
      {floroFormOpen && <FloroForm />}

      <form className="space-y-5">
        <div className="col-span-12">
          <div className="">
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Cliente
            </label>
            <div className="flex gap-2">
              <select className="px-3 py-2 rounded-lg hover:bg-slate-300 min-w-40">
                <option value="">Seleccione cliente</option>
                <option value="">State01</option>
                <option value="">State02</option>
                <option value="">State03</option>
              </select>

              <button
                onClick={() => {
                  setClientFormOpen(!clientFormOpen);
                  setFloroFormOpen(false);
                }}
                type="button"
                className="py-2 px-3 rounded-lg border bg-slate-950 text-white"
              >
                Agregar Cliente
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-12">
          <div className="">
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Floro
            </label>
            <div className="flex gap-2">
              <select className="px-3 py-2 rounded-lg hover:bg-slate-300 min-w-40">
                <option value="">Selecciona floro</option>
                <option value="">Floro 1</option>
                <option value="">Floro 2</option>
                <option value="">Floro 3</option>
              </select>

              <button
                onClick={() => {
                  setFloroFormOpen(!floroFormOpen);
                  setClientFormOpen(false);
                }}
                type="button"
                className="py-2 px-3 rounded-lg border bg-slate-950 text-white"
              >
                Agregar Floro
              </button>
            </div>
          </div>
        </div>
        {/* Module */}
        <div className="col-span-12">
          <div className="flex justify-between p-2">
            <h1 className="font-medium">Modulos</h1>
            <div>
              <button
                onClick={() => {
                  setFloroFormOpen(!floroFormOpen);
                  setClientFormOpen(false);
                }}
                type="button"
                className="py-1 px-3 rounded-lg border bg-slate-950 text-white"
              >
                Agregar Modulo
              </button>
              <button
                onClick={() => {
                  onClickAddModule();
                }}
                type="button"
                className="py-1 px-3 rounded-lg border bg-slate-950 text-white"
              >
                Crear Modulo
              </button>
            </div>
          </div>
          <div className="rounded-lg border-2">
            {modules.length &&
              modules.map((e) => {
                return (
                  <div key={e.id}>
                    <CotizacionMap />
                  </div>
                );
              })}
          </div>
        </div>

        <button>Guardar</button>
      </form>
    </div>
  );
}

const CotizacionMap = () => {
  const [subModuleOpen, setSubModuleOpen] = useState(false);

  return (
    <div>
      {subModuleOpen && <ModuleFormBoth />}
      <label className="mb-1 block text-sm font-medium text-gray-700">
        Modulos
      </label>
      <div className="flex gap-2 ">
        <select className="px-3 py-2 rounded-lg hover:bg-slate-300 min-w-40">
          <option value="">Selecciona floro</option>
          <option value="">Floro 1</option>
          <option value="">Floro 2</option>
          <option value="">Floro 3</option>
        </select>

        <button
          onClick={() => {
            setSubModuleOpen(!subModuleOpen);
          }}
          type="button"
          className="py-2 px-3 rounded-lg border bg-slate-950 text-white"
        >
          Agregar Submodulo
        </button>
      </div>
    </div>
  );
};

const ModuleFormBoth = () => {
  return (
    <form action="" className="space-y-5">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 md:col-span-6">
          <label
            htmlFor="nameModule"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Nombre
          </label>
          <input
            type="text"
            id="nameModule"
            className=" w-full p-2 border-2 border-gray-200 rounded-md focus:bg-sky-50"
            placeholder="De mi mayor consideración: ..."
          />
        </div>
        <div className="col-span-12 md:col-span-6">
          <label
            htmlFor="days"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Dias
          </label>
          <input
            type="number"
            id="days"
            className=" w-full p-2 border-2 border-gray-200 rounded-md focus:bg-sky-50"
          />
        </div>
      </div>

      <div className="w-full">
        <div className="flex justify-center">
          <button
            type="submit"
            className="py-2 px-3 rounded-lg border bg-slate-950 text-white"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default CotizacionForm;
