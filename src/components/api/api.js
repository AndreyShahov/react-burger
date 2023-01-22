
export const getIngredients = (config) => {
  return fetch(`${config.baseUrl}`, {
    headers: config.headers
  })
    .then(checkResponse);
}

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Что-то не так: ${res.status}`);
}

