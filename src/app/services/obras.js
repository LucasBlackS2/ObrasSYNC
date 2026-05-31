import { API_BASE_URL } from './config';

export async function novaObras(obra) {
  const response = await fetch(`${API_BASE_URL}/NewObras`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obra),
  });

  if (!response.ok) {
    throw new Error('Erro ao cadastrar obra');
  }

  return await response.json();
}