import { base_api_url } from "./baseUrls";
import {store_links} from './baseUrls'

export const get = async (endpoint, token) => {
  const headers = new Headers({ accept: "application/json" });
  if (token) {
    headers.append("Authorization", `Bearer ${token}`);
  }
  const response = await fetch(base_api_url + endpoint, { headers });
  const data = await response.json();
  return data;
};

export const post = async userData => {
  const response = await fetch(base_api_url + store_links.userCreate, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: new Headers({ "content-type": "application/json" })
  });
  const data = await response.json();
  return data;
};


export const postLogin = async userData => {
  const response = await fetch(base_api_url + store_links.userLogin, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: new Headers({ "content-type": "application/json" })
  });
  const data = await response.json();
  return data;
};