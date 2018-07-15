export const parseJwtClaims = jwtToken => {
  const base64Url = jwtToken.split(".")[1];
  const base64 = base64Url.replace("-", "+").replace("_", "/");
  return JSON.parse(window.atob(base64));
};

export const redirectReg = history => {
  setTimeout(() => {
    history.push("/login");
  }, 1000);
};

export const redirectLog = (success, history) => {
  setTimeout(() => {
    return success ? history.push("/user") : false;
  }, 1000);
};
