import FingerprintJS from "@fingerprintjs/fingerprintjs";
import authService from "@/services/auth.service";
import documentsService from "@/services/documents.service";
import downloadDocumentService from "@/services/downloadDocument.service";
import { getSRC } from "../../utils/getHash";
import localStorageService from "@/services/localStorage.service";

const initialState = localStorageService.getLogin()
  ? {
      isLoggedIn: true,
      login: localStorageService.getLogin(),
      password: localStorageService.getPassword(),
      IMEI: localStorageService.getIMEI(),
      user: [],
      loginError: "",
      documents: localStorageService.getAllDocuments(),
      isShowLoader: false,
      showLoginForm: false,
    }
  : {
      isLoggedIn: false,
      login: "",
      password: "",
      IMEI: "",
      user: [],
      loginError: "",
      documents: [],
      isShowLoader: false,
      showLoginForm: false,
    };

export default {
  state() {
    return initialState;
  },
  getters: {
    // получение документов
    getDocuments(state) {
      return state.documents;
    },
    // получение инфо об авторизации
    isLoggedIn(state) {
      return state.isLoggedIn;
    },
    // получение логина
    getLogin(state) {
      return state.login;
    },
    // получение пароля
    getPassword(state) {
      return state.password;
    },
    // получение отпечатка браузера
    getIMEI(state) {
      return state.IMEI;
    },
    getUser(state) {
      return state.user;
    },
    // получение ошибки авторизации
    getLoginError(state) {
      return state.loginError;
    },
    getIsShowLoader(state) {
      return state.isShowLoader;
    },
    getShowLoginForm(state) {
      return state.showLoginForm;
    },
  },
  mutations: {
    // внесение в стейт введенных данных
    updateLogin(state, login) {
      state.login = login;
    },
    updatePassword(state, password) {
      state.password = password;
    },
    updateIMEI(state, amount) {
      state.IMEI = amount;
    },
    // внесение в стейт документов
    updateDocuments(state, data) {
      state.documents = data;
    },
    // внесение в стейт инфо об авторизации
    updateIsLoggedin(state, data) {
      state.isLoggedIn = data;
    },
    updateUser(state, data) {
      state.user = data;
    },

    updateLoginError(state, data) {
      state.loginError = data;
    },
    updateShowLoader(state, data) {
      state.isShowLoader = data;
    },
    updateShowLoginForm(state, data) {
      state.showLoginForm = data;
    },
  },
  actions: {
    // выполнение авторизации и внесение данных в стейт
    async login(ctx, payload) {
      try {
        ctx.commit("updateShowLoader", true);
        const content = await authService.login(payload);

        const data = content[0];

        if (data && data.id_login !== 0) {
          const reqData = {
            login: data.id_login,
            TK: data.TK,
            IMEI: payload.IMEI,
          };
          ctx.dispatch("fetchDocuments", reqData);
          localStorageService.setData(payload);
          ctx.commit("updateUser", data);

          ctx.commit("updateIsLoggedin", true);
          ctx.commit("updateShowLoginForm", false);
        } else {
          ctx.commit(
            "updateLoginError",
            "Логин и/или пароль введены неправильно!"
          );
          ctx.commit("updateShowLoader", false);
        }
      } catch (error) {
        ctx.commit("updateLoginError", error.message);
      }
    },

    // API запрос отпечатка браузера и внесение в стейт использована библиотека FingerprintJS
    async fetchIMEI(ctx) {
      const fpPromise = await FingerprintJS.load();

      const result = await fpPromise.get();

      ctx.commit("updateIMEI", result.visitorId);
    },
    // Загрузка документов, трансформация и внесение в стейт
    async fetchDocuments(ctx, payload) {
      try {
        const content = await documentsService.get(payload);

        if (content) {
          const arr = await Promise.all(
            content.map(async (value) => {
              const endHash = await ctx.dispatch("getHashDocument", value);
              return { ...value, hash: endHash };
            })
          );

          ctx.commit("updateDocuments", arr);
          localStorageService.setAllDocuments(arr);
          ctx.commit("updateShowLoader", false);
        }
      } catch (error) {
        console.log(error.message);
      }
    },
    // Зарос на получение хэша для загрузки документа
    async getHashDocument(ctx, data) {
      try {
        const payload = {
          id_document: data.id_document,
          doc_type: data.doc_type,
          login: ctx.state.login,
          IMEI: ctx.state.IMEI,
          TK: ctx.state.user.TK,
        };
        if (payload) {
          const content = await downloadDocumentService.get(payload);
          const hash = await content;

          return getSRC(hash);
        }
      } catch (error) {
        console.log(error.message);
      }
    },
    enteredLogin(ctx, data) {
      ctx.commit("updateLogin", data);
      ctx.commit("updateLoginError", "");
    },
    enteredPassword(ctx, data) {
      ctx.commit("updatePassword", data);
      ctx.commit("updateLoginError", "");
    },
    toggleLoginform(ctx, data) {
      ctx.commit("updateShowLoginForm", data);
    },
    logOut(ctx) {
      localStorageService.removeAuthData();
      ctx.state = {
        isLoggedIn: false,
        login: "",
        password: "",
        IMEI: "",
        user: [],
        loginError: "",
        documents: [],
        isShowLoader: false,
        showLoginForm: false,
      };
    },
  },
};
