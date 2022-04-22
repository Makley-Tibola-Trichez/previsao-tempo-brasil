import { createContext } from "react";
import EstadosType from "../estadosSlice.types";

const EstadosContext = createContext({} as EstadosType);

export default EstadosContext;
