import httpService from "./http.service";

const authEndpoint = "api/client_login";

const authService = {
  login: async ({ login, password, IMEI }) => {
    const paramsData = {
      login: login,
      password: password,
      IMEI: IMEI,
      Name_app: "connect",
    };
    const { data } = await httpService.get(authEndpoint, {
      params: {
        json: paramsData,
      },
    });

    return data.content;
  },
};

export default authService;
