import axios from "axios";
import { API_BASE_URL } from "./config";

const api = axios.create({
  baseURL: `${API_BASE_URL}/funcionarios`,
});

export async function funcionarios(nome, cargo, sexo, idade) {
  try {
    const response = await api.post(
      "/cadastro", // endpoint correto
      {
        nome,
        cargo,
        sexo,   // deve ser "MASCULINO" ou "FEMININO"
        idade,
      }
    );

    return {
      success: true,
      message: "Funcionário cadastrado com sucesso",
      data: response.data,
    };
  } catch (error) {
    return {
      success: false,
      message:
        error.response?.data?.message || "Erro ao conectar ao servidor",
    };
  }
}
