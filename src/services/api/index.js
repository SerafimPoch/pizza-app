import { get, post } from "./methods";
import { store_links } from "./baseUrls";

export const getStore = () => {
  return get(store_links.storelist);
};

export const userInfo = () => {
  return get(store_links.userInfo, JSON.parse(localStorage.getItem("token")));
};

export const getTicket = () => {
  return get(store_links.ticket, JSON.parse(localStorage.getItem("token")));
};

export const createUserApi = userData => {
  return post(userData, store_links.userCreate);
};
