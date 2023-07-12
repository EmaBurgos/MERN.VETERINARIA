import { useContext } from "react";
import PacientesContext from "../contentx/PacientesProvider";

const usePacientes = () => {
  return useContext(PacientesContext);
};

export default usePacientes;
