export async function fetchData(endpoint: string, options = {}) {
  const appKey = process.env.OPEN_WEATHER_APP_KEY;

  const queryString = new URLSearchParams(options).toString();

  return fetch(endpoint + `?appid=${appKey}&${queryString}`);
}
