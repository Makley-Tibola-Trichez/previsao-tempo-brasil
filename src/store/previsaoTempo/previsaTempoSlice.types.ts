import { Dispatch, SetStateAction } from "react";
import { PrevisaoTempoResponseType } from "../../api/api.types";

export type PrevisaoTempoType = {
  previsao: PrevisaoTempoResponseType | null;
  setGeocode: Dispatch<SetStateAction<number | null>>;
};
