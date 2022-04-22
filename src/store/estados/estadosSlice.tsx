import { createSlice } from "@reduxjs/toolkit";
import type EstadosType from "./estadosSlice.types";

const initialState: EstadosType = {
  estados: [],
};

const cidadesSlice = createSlice({
  name: "estados",
  initialState,
  reducers: {
    setEstados: (state, action) => {
      state.estados = action.payload;
    },
  },
});

export default cidadesSlice;
