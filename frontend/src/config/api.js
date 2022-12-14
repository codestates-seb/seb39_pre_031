import Axios from './axios';

export const loginApi = async (body) => {
  const url = '/member/login';
  return Axios.post(url, body);
};

export const signupApi = async (body) => {
  const url = '/member';
  return Axios.post(url, body);
};

export const homeApi = async (filter) => {
  const url = `/home/${filter}`;
  return Axios.get(url);
};

//! find password
export const findPasswordApi = async (email) => {
  const url = `/member/${email}/find`;
  return Axios.post(url);
};

//! question

export const questionApi = async (body) => {
  const url = '/question';
  return Axios.post(url, body);
};

export const updateQuestionApi = async (id, body, header) => {
  const url = `/question/${id}`;
  return Axios.patch(url, body, header);
};

export const deleteQuestionApi = async (id, body, header) => {
  const url = `/question/${id}`;
  return Axios.delete(url, body, header);
};

export const getDetailQueApi = async (id) => {
  const url = `/question/${id}`;
  return Axios.get(url);
};

// question Vote update api
export const voteUpQueApi = async (id, body, header) => {
  const url = `/question/voteUp/${id}`;
  return Axios.patch(url, body, header);
};

export const voteDownQueApi = async (id, body, header) => {
  const url = `/question/voteDown/${id}`;
  return Axios.patch(url, body, header);
};

//! answer

export const answerApi = async (body, header) => {
  const url = '/answer';
  return Axios.post(url, body, header);
};

export const getAnswerApi = async (id) => {
  const url = `/answer/${id}`;
  return Axios.get(url);
};

export const updateAnswerApi = async (id, body, header) => {
  const url = `/answer/${id}`;
  return Axios.patch(url, body, header);
};

export const answerSelectApi = async (id) => {
  const url = `/answer/select/${id}`;
  return Axios.patch(url);
};

export const deleteAnswerApi = async (id, body, header) => {
  const url = `/answer/${id}`;
  return Axios.delete(url, body, header);
};

// answer Vote update api

export const voteUpAnsApi = async (id, body, header) => {
  const url = `/answer/voteUp/${id}`;
  return Axios.patch(url, body, header);
};

export const voteDownAnsApi = async (id, body, header) => {
  const url = `/answer/voteDown/${id}`;
  return Axios.patch(url, body, header);
};

export const postAskQueApi = async (body, header) => {
  const url = '/question/ask';
  return Axios.post(url, body, header);
};
