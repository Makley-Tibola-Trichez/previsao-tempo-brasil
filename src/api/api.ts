import { ParseResponse } from "./treatResponse";

export default class Api {
  static fetchPrevisaoTempo(geocode: number) {
    return apiRequest(`https://apiprevmet3.inmet.gov.br/previsao/${geocode}`);
  }
  static fetchCidadesEstado(geocode: number) {
    return apiRequest(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${geocode}/municipios`
    );
  }
  static fetchEstadosBrasil() {
    return apiRequest(
      "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
    );
  }
  static fetchGithubProfile() {
    return apiRequest("https://api.github.com/users/makley-tibola-trichez");
  }
}

export const apiRequest = async (url: string) => {
  return await fetch(`${url}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then(ParseResponse);
};
