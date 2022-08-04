// функция возвращает ссылку для скачивания документа
import config from "../services/config.json";

export function getSRC(data) {
  return config.apiEndpoint + data;
}
