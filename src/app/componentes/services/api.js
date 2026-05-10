import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api",
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
