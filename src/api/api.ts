import { ParseResponse } from "./treatResponse";

export default class Api {
  static fetchPrevisaoTempo(geocode: number) {
    return apiRequest(`${geocode}`);
  }
  static fetchCidadesEstado(geocode: number) {
    // TODO: obter cidades do estado selecionado
    return apiRequest(
      `https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${geocode}`
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
