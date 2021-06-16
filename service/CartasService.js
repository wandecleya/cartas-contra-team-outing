import {Service} from "./api";

export const CartasService = {
  async getRespostas() {
    return Service().get('/respostas');
  },
}
