import { createSlice } from "@reduxjs/toolkit";
import type { CidadeType } from "./cidadesSlice.types";
import CidadesType from "./cidadesSlice.types";

const initialState: CidadesType = {
  cidades: [] as CidadeType[],
};

const cidadesSlice = createSlice({
  name: "cidades",
  initialState,
  reducers: {
    setCidades: (state, action) => {
      state.cidades = action.payload;
    },
    clearCidades: (state) => {
      state.cidades = [];
    },
  },
});

export default cidadesSlice;
