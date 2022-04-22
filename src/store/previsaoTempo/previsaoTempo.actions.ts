import previsaoTempoSlice from "./previsaoTempoSlice";
import getPrevisaoTempo from "./thunks/getPrevisaoTempo";

const previsaoTempoActions = {
  ...previsaoTempoSlice.actions,
  getPrevisaoTempo,
};

export default previsaoTempoActions;
