import { useContext } from "react";
import PrevisaoTempoContext from "./previsaoTempoContext";

function usePrevisaoTempo() {
  return useContext(PrevisaoTempoContext);
}

export default usePrevisaoTempo;
