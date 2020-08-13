
const client_id = "ioOVbozXrSIZoQxccGD6Me2wNc_g_vXS2dbwh5cLwVk";

export async function PhotoGallery(keyword, page, perpage, sortby) {
  const res = await fetch(`https://api.unsplash.com/search/photos?client_id=${client_id}&query=${keyword}&order_by=${sortby}&per_page=${perpage}&page=${page}`, { method: 'get' });
  const json = await res.json();
  return json.results;
}

// return the token from the session storage
export const getToken = () => {
  return localStorage.getItem('token') || null;
}

// remove the token and user from the session storage
export const removeUserSession = () => {
  localStorage.removeItem('token');
}

// set the token and user from the session storage
export const setUserSession = (token, user) => {
  localStorage.setItem('token', token);
}