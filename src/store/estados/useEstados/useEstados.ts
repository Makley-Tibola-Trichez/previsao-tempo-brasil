import { useContext } from "react";
import EstadosContext from "./estadosContext";

function useEstados() {
  return useContext(EstadosContext);
}

export default useEstados;
