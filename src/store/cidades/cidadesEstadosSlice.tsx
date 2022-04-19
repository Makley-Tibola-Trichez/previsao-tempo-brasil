import { createSlice } from "@reduxjs/toolkit";
import type CidadesType from "./cidadesEstadosSlice.types";

const initialState: CidadesType = {
  estados: [],
  cidades: [],
};

const cidadesSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setEstados: (state, action) => {
      state.estados = action.payload;
    },
    setCidades: (state, action) => {
      state.cidades = action.payload;
    },
  },
});

export default cidadesSlice;
