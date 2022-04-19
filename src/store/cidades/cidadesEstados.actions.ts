import cidadesSlice from "./cidadesEstadosSlice";
import getCidades from "./thunks/getCidades";
import getEstados from "./thunks/getEstados";
const cidadesActions = {
  ...cidadesSlice.actions,
  getCidades,
  getEstados,
};

export default cidadesActions;
