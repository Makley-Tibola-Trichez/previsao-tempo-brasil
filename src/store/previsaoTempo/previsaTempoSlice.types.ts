import { Dispatch, SetStateAction } from "react";

export type PrevisaoTempoType = {
  previsao: unknown;
  setGeocode: Dispatch<SetStateAction<number | null>>;
};
