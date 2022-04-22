import { useContext } from "react";
import CidadesContext from "./cidadesContext";

function useCidades() {
  return useContext(CidadesContext);
}

export default useCidades;
