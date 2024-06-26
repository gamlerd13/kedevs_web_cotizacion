import Image from "next/image";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center justify-between p-12">
        <header>Aqui va el encabezado</header>
        <main>here is the main</main>
        <footer>asdf</footer>
      </div>
    </>
  );
}
