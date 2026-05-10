import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.1.103:8080/cadastro",
});

export async function cadastrarUser(
  nome,
  email,
  senha
) {
  try {

    const response = await api.post(
      "/cadastroUser",
      {
        nome,
        email,
        senha,
      }
    );

    return response.data;

  } catch (error) {

    return {
      success: false,
      message:
        error.response?.data?.message ||
        "Erro ao conectar",
    };
  }
}