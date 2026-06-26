import Dashboard from "@/components/Dashboard";
import { getForcast, getWeather } from "@/lib/data";
import { Metadata } from "next";
import Hourly from "../(app)/hourly/page";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "This is dashboard page for weather app",
};

export default async function Home({ searchParams }: PageProps<"/">) {
  const { city = "Patna" } = await searchParams;

  const promiseAll = await Promise.allSettled([
    getWeather(city),
    getForcast(city),
  ]);
  const promiseAllSettled = await promiseAll.map((item) => {
    if (item.status === "fulfilled" && item.value.ok) {
      return item.value.json();
    }
    return null;
  });

  const [weather, forcast] = await Promise.all(promiseAllSettled);

  return (
    <>
      <Dashboard weather={weather} forcast={forcast} />
      {/* <Hourly weather={weather} forcast={forcast} /> */}
    </>
  );
}
