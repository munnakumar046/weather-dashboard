import { getWeather, getForcast } from "@/lib/data";
import Hourly from "./hourly";

export default async function HourlyPage({
  searchParams,
}: PageProps<"/hourly">) {
  const { city = "Patna" } = await searchParams;

  const promiseAll = await Promise.allSettled([
    getWeather(city),
    getForcast(city),
  ]);

  const promiseAllSettled = promiseAll.map((item) => {
    if (item.status === "fulfilled" && item.value.ok) {
      return item.value.json();
    }
    return null;
  });

  const [weather, forcast] = await Promise.all(promiseAllSettled);

  return <Hourly weather={weather} forcast={forcast} />;
}
