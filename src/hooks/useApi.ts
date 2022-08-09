// import axios from "axios";

// Como esta é uma API FAKE estou deixando comentado enquanto não crio a API de verdade e estou retornando respostas falsas.
// const api = axios.create({
//   baseURL: process.env.REACT_APP_API
// });

export const useApi = () => ({
  validadeToken: async (token: string) => {
    return {
      user: {
        id: 3,
        name: "Kauan",
        email: "kauanteste@teste.com"
      }
    };
    // Resposta fake por enquanto...
    // const response = await api.post('/validatetoken', { token });
    // return response.data;
  },

  signIn: async (email: string, password: string) => {
    return {
      user: {
        id: 3,
        name: "Kauan",
        email: "kauanteste@teste.com"
      },
      token: '123456789'
    };
    // Resposta fake por enquanto...
    // const response = await api.post('/signin', { email, password });
    // return response.data;
  },

  signOut: async () => {
    return { status: true };
    // Resposta fake por enquanto...
    // const response = await api.post('/signout');
    // return response.data;
  }

});
