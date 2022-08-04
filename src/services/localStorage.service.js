const LOGIN = "login";
const PASSWORD = "password";
const IMEI = "IMEI";
const DOCUMENTS = "documents";

export function setData(payload) {
  localStorage.setItem(LOGIN, payload.login);
  localStorage.setItem(PASSWORD, payload.password);
  localStorage.setItem(IMEI, payload.IMEI);
}

export function setAllDocuments(payload) {
  return localStorage.setItem(DOCUMENTS, JSON.stringify(payload));
}

export function getLogin() {
  return localStorage.getItem(LOGIN);
}

export function getAllDocuments() {
  return JSON.parse(localStorage.getItem(DOCUMENTS));
}

export function getPassword() {
  return localStorage.getItem(PASSWORD);
}

export function getIMEI() {
  return localStorage.getItem(IMEI);
}

export function removeAuthData() {
  localStorage.removeItem(LOGIN);
  localStorage.removeItem(PASSWORD);
  localStorage.removeItem(IMEI);
  localStorage.removeItem(DOCUMENTS);
}

const localStorageService = {
  setData,
  setAllDocuments,
  removeAuthData,
  getLogin,
  getPassword,
  getIMEI,
  getAllDocuments,
};
export default localStorageService;
