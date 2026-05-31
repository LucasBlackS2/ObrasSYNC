import { API_BASE_URL } from "./config";

export async function atualizarEtapa(
  id,
  etapa,
  nomeEtapa,
  concluida
) {
  try {
    const response = await fetch(`${API_BASE_URL}/cronograma/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        etapa,
        nomeEtapa,   // precisa bater com o campo da entidade
        concluida,
      }),
    });

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Erro ao atualizar etapa:", error);
    throw error;
  }
}
