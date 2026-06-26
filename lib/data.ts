import { fetchData } from "./fetch-data";

export async function getForcast(q: any) {
  return await fetchData("https://api.openweathermap.org/data/2.5/forecast", {
    q,
    units: "metric",
  });
}
export async function getWeather(q: any) {
  return await fetchData("https://api.openweathermap.org/data/2.5/weather", {
    q,
    units: "metric",
  });
}
