import { useContext } from "react";
import AuthContext from "../contentx/AuthProvider";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
