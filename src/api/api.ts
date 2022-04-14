import { ParseResponse } from "./treatResponse";

export default class Api {
  static fetchPrevisaoTempo(url: string) {
    return apiRequest(url);
  }
  static fetchCidadesBrasil(url: string) {
    return apiRequest(url);
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
