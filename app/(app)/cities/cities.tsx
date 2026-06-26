import MapSearch from "@/components/MapSearch";
import { Button, Card } from "@heroui/react";
import { Cloud, Sun } from "lucide-react";
import moment from "moment";

type CitiesProps = {
  forcast: any;
  weather: any;
};

export default function Cities({ forcast, weather }: CitiesProps) {
  //   console.log("forcast", forcast);
  if (!forcast || !weather) return null;

  const countrynameInEnglish = new Intl.DisplayNames(["en"], {
    type: "region",
  });

  return (
    <div className="space-y-6">
      {/* Cards */}
      <div className="grid grid-cols-12 gap-6">
        {forcast.list.slice(0, 4).map((city: any, index: number) => (
          <Card key={index} className="col-span-6 p-4 flex flex-col gap-4">
            {/* First Row */}
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold">
                  {countrynameInEnglish.of(forcast.city.country)},{" "}
                  {weather.name}
                </h1>
                <p className="text-sm text-gray-600">
                  {moment.unix(city.dt).format("hh:mm A")}
                </p>
              </div>
              <Sun className="w-8 h-8 text-yellow-500" />
            </div>

            {/* Second Row */}
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <h1 className="text-4xl font-bold">
                  {Math.round(city.main.temp)}°
                </h1>
                <div className="flex items-center gap-2 text-gray-700">
                  <Cloud className="w-5 h-5 text-yellow-200" />
                  <span>{city.weather[0].description}</span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-sm font-medium">
                  H: {Math.round(city.main.temp_max)}°
                </span>
                <span className="text-sm font-medium">
                  L: {Math.round(city.main.temp_min)}°
                </span>
                <div className="w-24 h-2 bg-gray-200 rounded mt-2">
                  <div
                    className="h-2 bg-blue-400 rounded"
                    style={{ width: `${city.main.temp_max}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </Card>
        ))}

        {/* Add Location Button */}
        {/* <Card className="col-span-6 p-4 flex flex-col gap-4">
          <div className="flex justify-center items-center mt-4">
            <Button variant="primary" className="px-6 py-2 rounded-lg">
              + Add Location
            </Button>
          </div>
        </Card> */}
      </div>

      {/* Global Highlights */}
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold">Global Highlights</h2>
      </div>
      <div>
        <div className="grid grid-cols-9 gap-6 mt-6">
          {/* first card */}
          <Card className="col-span-3 rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-4">
              <Sun className="w-6 h-6" />
              <span className="text-sm font-semibold">HOTTEST TODAY</span>
            </div>
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold">
                {weather?.name}, {weather?.sys?.country}
              </h1>
              <span className="text-3xl font-bold">{weather.main.temp}°C</span>
            </div>
          </Card>

          {/* second card */}
          <Card className="col-span-3 rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-4">
              <Sun className="w-6 h-6" />
              <span className="text-sm font-semibold">MOST RAIN</span>
            </div>
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold">Seattle</h1>
              <span className="text-3xl font-bold">
                {weather?.main.humidity}%
              </span>
            </div>
          </Card>

          {/* third Card */}
          <Card className="col-span-3 rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-4">
              <Sun className="w-6 h-6" />
              <span className="text-sm font-semibold">WINDIEST</span>
            </div>
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold">Wellington</h1>
              <span className="text-3xl font-bold">
                {weather.wind.speed} m/s
              </span>
            </div>
          </Card>
        </div>
      </div>

      {/* Map Card */}
      <MapSearch />
    </div>
  );
}
