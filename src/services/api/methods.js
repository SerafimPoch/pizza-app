import { base_api_url } from "./baseUrls";

export const get = async (endpoint, token) => {
  const headers = new Headers({ accept: "application/json" });
  if (token) {
    headers.append("Authorization", `Bearer ${token}`);
  }
  const response = await fetch(base_api_url + endpoint, { headers });
  const data = await response.json();
  return data;
};

export const post = async (userData, endpoint) => {
  const response = await fetch(base_api_url + endpoint, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: new Headers({ "content-type": "application/json" })
  });
  const data = await response.json();
  return data;
};
