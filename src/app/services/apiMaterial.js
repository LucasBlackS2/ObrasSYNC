import { API_BASE_URL } from "./config";

const API_URL = `${API_BASE_URL}/materiais`;

export async function cadastrarMaterial(material) {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(material),
    });

    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export async function listarMateriais() {
  try {
    const response = await fetch(API_URL);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}