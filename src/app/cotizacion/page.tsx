import React from "react";
import NavBar from "../components/NavBar";
import CotizacionForm from "./CotizacionForm";

function page() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center justify-between md:p-24 p-12">
        <header>
          <div>
            <h1>Formulario de cotización</h1>
          </div>
        </header>
        <main className="w-full lg:w-8/12">
          <div>
            <CotizacionForm />
          </div>
        </main>
        <footer>asdf</footer>
      </div>
    </>
  );
}

export default page;
