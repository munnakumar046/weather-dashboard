import { getWeather, getForcast } from "@/lib/data";
import Cities from "./cities";

export default async function HourlyPage({
  searchParams,
}: PageProps<"/cities">) {
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

  return <Cities weather={weather} forcast={forcast} />;
}
