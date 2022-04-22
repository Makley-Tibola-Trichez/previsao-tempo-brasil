import { createContext } from "react";
import { PrevisaoTempoType } from "../previsaTempoSlice.types";

const PrevisaoTempoContext = createContext({} as PrevisaoTempoType);

export default PrevisaoTempoContext;
