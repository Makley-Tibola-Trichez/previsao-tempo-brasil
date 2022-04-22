import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import appSlice from "./app/appSlice";
import EstadosSlice from "./estados/estadosSlice";
import CidadesSlice from "./cidades/cidadesSlice";
import sobreSlice from "./sobre/sobreSlice";
import PrevisaoTempo from "./previsaoTempo/previsaoTempoSlice";

const makeStore = () =>
  configureStore({
    reducer: {
      App: appSlice.reducer,
      Sobre: sobreSlice.reducer,
      Estados: EstadosSlice.reducer,
      Cidades: CidadesSlice.reducer,
      PrevisaoTempo: PrevisaoTempo.reducer,
    },
  });

const store = makeStore();

export type DispatchFunction = ReturnType<typeof store.dispatch>;
export type State = ReturnType<typeof store.getState>;

export type ThunkStatefulAction<
  ReturnType = void,
  Extra = unknown
> = ThunkAction<ReturnType, State, Extra, Action<string>>;

export default store;
