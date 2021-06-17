import {Service} from "./api";

export const CartasService = {
  async getRespostas() {
    const response = await  Service().get('/respostas');
    return response.data;
  },
}
