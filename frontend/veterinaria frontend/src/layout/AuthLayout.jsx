import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      <div>Administrador de pacientes de Veterinaria</div>

      <Outlet />
    </>
  );
};

export default AuthLayout;
