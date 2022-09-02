import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const setCookie = (cookieName, cookie, option) => {
  return cookies.set(cookieName, cookie, { ...option });
};

export const getCookie = (cookieName) => {
  return cookies.get(cookieName);
};

export const removeCookie = (cookieName) => {
  return cookies.remove(cookieName);
};
