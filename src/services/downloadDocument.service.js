import httpService from "./http.service";

const endpoint = "api/test";

const downloadDocumentService = {
  get: async ({ login, TK, IMEI, id_document, doc_type }) => {
    const paramsData = {
      id_login: login,
      id_people: login,
      TK: TK,
      IMEI: IMEI,
      Name_app: "connect",
      Name_event: "get_pic_path",
      id_document: id_document,
      doc_type: doc_type,
    };

    const { data } = await httpService.get(endpoint, {
      params: {
        json: paramsData,
      },
    });

    return data.content.body[0].hash;
  },
};

export default downloadDocumentService;
