import React from "react";

function ClientForm() {
  return (
    <form action="" className="space-y-5">
      <div className="grid grid-cols-12 gap-5">
        <div className="sm:col-span-6 col-span-12">
          <label
            htmlFor="clientName"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Nombre de la empresa
          </label>
          <input
            type="text"
            id="clientName"
            className=" w-full p-2 border-2 border-gray-200 rounded-md focus:bg-sky-50"
            placeholder="Netflix"
          />
        </div>
        <div className="sm:col-span-6 col-span-12">
          <label
            htmlFor="representative"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Nombre del Representante{" "}
            <span className="text-green-600">(Opcional)</span>
          </label>
          <input
            type="password"
            id="representative"
            className="w-full p-2 border-2 border-gray-200 rounded-md focus:bg-sky-50"
            placeholder="juan"
          />
        </div>
      </div>
      <div className="col-span-12">
        <label
          htmlFor="example9"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          Ruc o Documento <span className="text-green-600">(Opcional)</span>
        </label>
        <input
          type="text"
          id="example9"
          className="w-full p-2 border-2 border-gray-200 rounded-md focus:bg-sky-50"
          placeholder="2010..."
        />
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
}

export default ClientForm;
