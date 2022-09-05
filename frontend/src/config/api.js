import axios from './axios';

export const loginApi = async (body) => {
  const url = '/members/login';
  return axios.post(url, body);
};

export const signupApi = async (body) => {
  const url = '/members';
  return axios.post(url, body);
};

export const homeApi = async (body, filter) => {
  const url = `/home/${filter}`;
  return axios.get(url, body);
};

//! question

export const questionApi = async (body) => {
  const url = `/question`;
  return axios.get(url, body);
};

export const updateQuestionApi = async (body, id) => {
  const url = `/question/${id}`;
  return axios.patch(url, body);
};

export const deleteQuestionApi = async (id) => {
  const url = `/question/${id}`;
  return axios.delete(url);
};

// Vote update api
export const voteUpQueApi = async (id) => {
  const url = `/question/voteUp/${id}`;
  return axios.patch(url);
};

export const voteDownQueApi = async (id) => {
  const url = `/question/voteDown/${id}`;
  return axios.patch(url);
};

//! answer

export const answerApi = async (body) => {
  const url = '/answer';
  return axios.post(url, body);
};

export const updateAnswerApi = async (body, id) => {
  const url = `/answer/${id}`;
  return axios.patch(url, body);
};

export const answerSelectApi = async (id) => {
  const url = `/answer/select/${id}`;
  return axios.patch(url);
};

export const deleteAnswerApi = async (id) => {
  const url = `/answer/${id}`;
  return axios.delete(url);
};

// Vote update api

export const voteUpAnsApi = async (id) => {
  const url = `/answer/voteUp/${id}`;
  return axios.patch(url);
};

export const voteDownAnsApi = async (id) => {
  const url = `/answer/voteDown/${id}`;
  return axios.patch(url);
};
