import { useContext } from "react";
import sobreContext from "./sobreContext";

function useSobre() {
  return useContext(sobreContext);
}

export default useSobre;
