const Footer = () => {
  return (
    <>
      <footer className="py-10 flex justify-center">
        <a
          href="https://www.linkedin.com/in/ema-desarrollo/"
          target="noreferrer"
          className="flex hover:text-green-400"
        >
          <p className="text-center font-bold">
            APV - Administrador de pacientes de{" "}
            <span className="text-indigo-600 hover:text-green-500">
              Veterinaria
            </span>
          </p>
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

export default Footer;
