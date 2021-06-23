import {Service} from "./api";

export const CartasService = {
  async getRespostas(quantidade=1) {
    const response = await  Service().get(`/respostas?quantidade=${quantidade}`);
    return response.data;
  },
  async getEscolhidas() {
    const response = await  Service().get('/escolhidas');
    return response.data;
  },
  async deleteEscolhidas() {
    await  Service().delete('/deleteEscolhidas');
  },
  async deleteRespostas() {
    await  Service().delete('/deleteRespostas');
  },
  async postEscolhida(carta) {
    await  Service().post('/escolher', carta);
  },
}
