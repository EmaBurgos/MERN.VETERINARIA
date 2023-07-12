import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      <main className="container mx-auto md:grid md:grid-cols-2 mt-12 gap-10 p-5 items-center">
        <Outlet />
      </main>
      <footer className="text-center py-4 flex justify-center mt-32">
        <a
          className="mr-1 text-indigo-600 hover:text-blue-400 font-bold"
          href="https://www.linkedin.com/in/ema-desarrollo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Emanuel Burgos
        </a>
        Desarrollador Web Fullstack 💙. © 2023 Todos los derechos reservados.
        <a
          href="https://www.linkedin.com/in/ema-desarrollo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="../../public/linkedin.png"
            alt="Linkedln"
            width="30"
            height="30"
            className="ml-1"
          />
        </a>
      </footer>
    </>
  );
};

export default AuthLayout;
