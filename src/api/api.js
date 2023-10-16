export async function apiCall(url) {
  const response = await fetch(url);
  return response.json();
}
