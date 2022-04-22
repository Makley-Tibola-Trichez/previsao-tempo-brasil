import { createContext } from "react";
import { CidadeContextType } from "../cidadesSlice.types";

const CidadesContext = createContext({} as CidadeContextType);

export default CidadesContext;
