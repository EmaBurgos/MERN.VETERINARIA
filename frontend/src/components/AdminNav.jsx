import { Link } from "react-router-dom";

const AdminNav = () => {
  return (
    <>
      <nav className="flex gap-3 justify-around">
        <Link
          to="/admin/perfil"
          className="font-bold uppercase text-gray-500 hover:text-black transition duration-300 border border-solid border-gray-300 p-1  rounded-md bg-gray-200 hover:bg-gray-300 "
        >
          Perfil
        </Link>
        <Link
          to="/admin/cambiar-password"
          className="font-bold uppercase text-gray-500  hover:text-black transition duration-300 border border-solid border-gray-300 p-1 rounded-md bg-gray-200 hover:bg-gray-300"
        >
          Cambiar contraseña
        </Link>
      </nav>
    </>
  );
};

export default AdminNav;
