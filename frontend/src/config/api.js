import axios from './axios';

export const loginApi = async (body) => {
  const url = '/members/login';
  return axios.post(url, body);
};

export const signupApi = async (body) => {
  const url = '/members';
  return axios.post(url, body);
};

export const homeApi = async (body) => {
  const url = '/home';
  return axios.get(url, body);
};

export const questionApi = async (body) => {
  const url = `/questions`;
  return axios.get(url, body);
};
