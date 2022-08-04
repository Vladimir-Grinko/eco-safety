import httpService from "./http.service";

const endpoint = "api/test";

const documentsService = {
  get: async ({ login, TK, IMEI }) => {
    const paramsData = {
      id_login: login,
      id_people: login,
      TK: TK,
      IMEI: IMEI,
      Name_app: "connect",
      Name_event: "list_load",
    };
    const { data } = await httpService.get(endpoint, {
      params: {
        json: paramsData,
      },
    });

    return data.content.body;
  },
};

export default documentsService;
