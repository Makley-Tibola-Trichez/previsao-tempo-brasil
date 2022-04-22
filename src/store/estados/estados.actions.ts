import cidadesSlice from "./estadosSlice";
import getEstados from "./thunks/getEstados";

const cidadesActions = {
  ...cidadesSlice.actions,
  getEstados,
};

export default cidadesActions;
