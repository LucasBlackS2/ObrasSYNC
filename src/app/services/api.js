import axios from "axios";
import { API_BASE_URL } from "./config";

const api = axios.create({
  baseURL: `${API_BASE_URL}/api`,
});

export async function loginUsuario(email, senha) {
  try {
    const response = await api.post("/loginUser", {
      email,
      senha,
    });

    return response.data;
  } catch (error) {
    console.log("Erro API:", error.response?.data || error.message);

    return {
      success: false,
      message: "Erro ao conectar com servidor",
    };
  }
}
