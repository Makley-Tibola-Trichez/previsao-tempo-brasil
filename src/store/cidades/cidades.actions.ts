import cidadesSlice from "./cidadesSlice";

import getCidades from "./thunks/getCidades";

const cidadesActions = {
  ...cidadesSlice.actions,
  getCidades,
};

export default cidadesActions;
