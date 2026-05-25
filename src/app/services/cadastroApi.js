import axios from "axios";
import { API_BASE_URL } from "./config";

const api = axios.create({
  baseURL: `${API_BASE_URL}/cadastro`,
});

export async function cadastrarUser(
  nome,
  email,
  senha
) {
  try {

    const response = await api.post(
      "/cadastro/cadastroUser",
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