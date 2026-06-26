import { Button, Card, Meter } from "@heroui/react";
import {
  DropletIcon,
  Eye,
  MapPin,
  Moon,
  PlusIcon,
  Sun,
  Wind,
} from "lucide-react";
import moment from "moment";

type DashboardProps = {
  forcast: any;
  weather: any;
};

export default function Dashboard({ forcast, weather }: DashboardProps) {
  console.log("forcast", forcast);
  if (!forcast || !weather) return null;

  const currentDate = moment().format("dddd, DD MMMM YYYY");
  const sunrise = moment.unix(weather.sys.sunrise).format("hh:mm A");
  const sunset = moment.unix(weather.sys.sunset).format("hh:mm A");

  return (
    <div className="">
      <div className="grid grid-cols-12 gap-6 h-full">
        {/* LEFT SIDE */}
        <Card className="col-span-12 sm:col-span-8 p-6 h-full flex flex-col justify-between">
          {/* Location */}
          <div className="flex flex-row gap-2 text-accent whitespace-nowrap">
            <MapPin className="w-5 h-5" />
            <span className="font-headline-md text-headline-md">
              {weather?.name}, {weather?.sys?.country}
            </span>
          </div>

          <span>{currentDate}</span>

          {/* Temperature */}
          <div>
            <span className="text-6xl font-bold text-accent">
              {weather.main.temp}°
            </span>
            <span className=" bottom-0 right-0 text-xl font-semibold">C</span>
          </div>
          <span className="text-3xl font-bold">
            {weather.weather[0].description}
          </span>

          {/* Footer cards */}
          <div className="grid grid-cols-9 gap-6 mt-6">
            <Card className="col-span-3 rounded-2xl p-3">
              <div className="flex items-center gap-4">
                <div className="size-5 text-accent">
                  <DropletIcon />
                </div>
                <div className="flex flex-col">
                  <span>Humidity: </span>
                  <span className="font-bold">{weather?.main.humidity}%</span>
                </div>
              </div>
            </Card>

            <Card className="col-span-3 rounded-2xl p-3">
              <div className="flex items-center gap-2">
                <div className="size-5 text-accent">
                  <Wind />
                </div>
                <div className="flex flex-col whitespace-nowrap">
                  <span>WIND SPEED</span>
                  <span className="font-bold">{weather.wind.speed} m/s</span>
                </div>
              </div>
            </Card>

            <Card className="col-span-3 rounded-2xl p-3">
              <div className="flex items-center gap-4">
                <div className="size-5 text-accent">
                  <Eye />
                </div>
                <div className="flex flex-col">
                  <span>VISIBILITY</span>
                  <span className="font-bold">
                    {weather?.visibility / 1000} km
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </Card>

        {/* RIGHT SIDE */}
        <Card className="col-span-12 sm:col-span-4 p-3 space-y-3">
          {/* Title */}
          <div className="text-center">
            <span className="text-lg font-semibold">Daily Insight</span>
          </div>

          {/* Air Quality */}
          <Card className="p-2 space-y-1">
            <div className="flex items-center justify-between gap-2">
              <span className="text-sm whitespace-nowrap">
                Air Quality Index
              </span>
              <Button size="sm">MODERATE</Button>
            </div>
            <div className="text-sm font-semibold">48 AQI</div>
            <div className="text-xs">
              Air quality is acceptable for most people.
            </div>
          </Card>

          {/* Sunrise / Sunset */}
          <Card className="flex flex-col sm:flex-row justify-center items-center gap-4 p-2">
            <div className="flex flex-col items-center text-center gap-1">
              <div className="size-5 text-accent flex items-center justify-center">
                <Sun />
              </div>
              <span className="text-xs">SUNRISE</span>
              <span className="font-bold text-sm whitespace-nowrap">
                {sunrise}
              </span>
            </div>

            <div className="flex flex-col items-center text-center gap-1">
              <div className="size-5 text-accent flex items-center justify-center">
                <Moon />
              </div>
              <span className="text-xs">SUNSET</span>
              <span className="font-bold text-sm whitespace-nowrap">
                {sunset}
              </span>
            </div>
          </Card>

          {/* UV Index */}
          <Card className="p-2 space-y-1">
            <div className="text-center text-xs font-medium">UV INDEX</div>
            <div className="flex items-center justify-center gap-2">
              <span className="whitespace-nowrap font-bold text-xs">
                6 High
              </span>
              <Meter aria-label="Storage usage" className="w-24 h-2" value={45}>
                <Meter.Track>
                  <Meter.Fill />
                </Meter.Track>
              </Meter>
            </div>
          </Card>
        </Card>
      </div>
      <div className="flex justify-between m-2">
        <div>
          <h2 className="text-2xl font-semibold">5-Day Forecast</h2>
        </div>
        <div>
          <span className="text-sm text-accent">View 14 Days</span>
        </div>
      </div>

      {/* city wise temp */}

      <div className="overflow-x-auto py-6">
        <div className="flex gap-4 min-w-max">
          {forcast.list.map((d: any, index: number) => (
            <Card
              key={index}
              className="p-3 text-center w-40 flex flex-col gap-2 shrink-0"
            >
              <span className="font-bold">{weather.name}</span>
              <span className="text-2xl">{d.main.temp}°C</span>
              <span className="text-sm">{d.weather[0].description}</span>
              <span className="text-xs text-gray-500">
                Humidity: {d.main.humidity}%
              </span>
            </Card>
          ))}
        </div>
      </div>
      {/* day wise temp */}

      <div className="grid grid-cols-4 gap-4">
        {forcast.list.slice(0, 4).map((item: any, idx: number) => {
          const day = moment(item.dt_txt).format("dddd");
          const temp = Math.round(item.main.temp);
          const condition = item.weather[0].main;

          // choose icon based on condition
          const Icon =
            condition === "Clear"
              ? Sun
              : condition === "Clouds"
                ? Moon
                : DropletIcon;

          return (
            <Card key={idx} className="p-2 text-center">
              <span className="text-sm font-medium">{day}</span>
              <Icon className="mx-auto size-5 text-accent" />
              <span className="font-bold">{temp}°</span>
            </Card>
          );
        })}
      </div>

      <Button
        variant="primary"
        isIconOnly
        size="lg"
        className="fixed right-4 bottom-4"
      >
        <PlusIcon />
      </Button>
    </div>
  );
}
