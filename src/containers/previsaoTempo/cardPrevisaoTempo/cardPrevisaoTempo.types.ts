import {
  DadosPrevisaoTempo,
  PrevisaoTempoResponseType,
} from "../../../api/api.types";

export type PrevisaoTempoEntrie<P = Record<string, DadosPrevisaoTempo>> = [
  string,
  P
];

export type CardPrevisaoTempoProps = {
  previsao: PrevisaoTempoResponseType;
};
