import { useContext } from "react";
import CidadesEstadosContext from "./cidadesEstadosContext";

function useCidadesEstados() {
  return useContext(CidadesEstadosContext);
}

export default useCidadesEstados;
