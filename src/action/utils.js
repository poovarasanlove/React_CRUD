export function handleResponse(response, currentAction, resData, redirectTo) {
  if (response.ok) {
    return response.json();
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}