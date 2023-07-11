import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      <main className="container mx-auto md:grid md:grid-cols-2 mt-12 gap-10 p-5 items-center">
        <Outlet />
      </main>
      <footer className="bg-gray-200 text-center py-4">
        <a
          className="mr-1 text-indigo-600 hover:text-blue-400 font-bold"
          href="https://www.linkedin.com/in/ema-desarrollo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Emanuel Burgos
        </a>
        Desarrollador Web Fullstack 💙. © 2023 Todos los derechos reservados.
      </footer>
    </>
  );
};

export default AuthLayout;
