import React from "react";

function FloroForm() {
  return (
    <form action="" className="space-y-5">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12">
          <label
            htmlFor="clientName"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Agregar descripción
          </label>
          <input
            type="text"
            id="clientName"
            className=" w-full p-2 border-2 border-gray-200 rounded-md focus:bg-sky-50"
            placeholder="De mi mayor consideración: ..."
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
}

export default FloroForm;
