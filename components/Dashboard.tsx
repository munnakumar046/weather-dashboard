import { Button, Card, Meter } from "@heroui/react";

import {
  Droplet,
  DropletIcon,
  Eye,
  MapPin,
  Moon,
  PlusIcon,
  Sun,
  Wind,
} from "lucide-react";

interface weeklyData {
  day: string;
  temp: string;
  rain: string;
  humidity: string;
}

export default function Dashboard() {
  const Days: weeklyData[] = [
    { day: "monday", temp: "45°", rain: "1.5%", humidity: "35%" },
    { day: "monday", temp: "45°", rain: "1.5%", humidity: "35%" },
    { day: "monday", temp: "45°", rain: "1.5%", humidity: "35%" },
    { day: "monday", temp: "45°", rain: "1.5%", humidity: "35%" },
    { day: "monday", temp: "45°", rain: "1.5%", humidity: "35%" },
  ];
  return (
    <div className="">
      <div className="grid grid-cols-12 gap-6 h-full">
        {/* LEFT SIDE */}
        <Card className="col-span-8 p-6 h-full flex flex-col justify-between">
          {/* Location */}
          <div className="flex flex-row gap-2 text-accent whitespace-nowrap">
            <MapPin className="w-5 h-5" />
            <span className="font-headline-md text-headline-md">
              San Francisco, CA
            </span>
          </div>

          <span>Monday, 12 June 2023</span>

          {/* Temperature */}
          <div>
            <span className="text-6xl font-bold text-accent">24°</span>
          </div>
          <span className="text-3xl font-bold">Partly Cloudy</span>

          {/* Footer cards */}
          <div className="grid grid-cols-9 gap-6 mt-6">
            <Card className="col-span-3 rounded-2xl p-3">
              <div className="flex items-center gap-4">
                <div className="size-5 text-accent">
                  <DropletIcon />
                </div>
                <div className="flex flex-col">
                  <span>Humidity</span>
                  <span className="font-bold">45%</span>
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
                  <span className="font-bold">12km/h</span>
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
                  <span className="font-bold">10km</span>
                </div>
              </div>
            </Card>
          </div>
        </Card>

        {/* RIGHT SIDE */}
        <Card className="col-span-4 p-3 space-y-3">
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
                05:42 AM
              </span>
            </div>

            <div className="flex flex-col items-center text-center gap-1">
              <div className="size-5 text-accent flex items-center justify-center">
                <Moon />
              </div>
              <span className="text-xs">SUNSET</span>
              <span className="font-bold text-sm whitespace-nowrap">
                08:14 PM
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

      {/* day wise temp */}

      <div className="overflow-x-auto py-6">
        <div className="flex gap-4 min-w-max">
          {Days.map((d, index) => (
            <Card
              className="p-3 text-center w-40 flex flex-col gap-2 shrink-0"
              key={index}
            >
              <span>{d.day}</span>
              <Sun className="mx-auto size-5 " />
              <span className="text-2xl font-bold">{d.temp}</span>
              <div className="flex items-center justify-center gap-1 text-sm">
                <Droplet className="w-4 h-4 text-accent" />
                <span>{d.rain}</span>
              </div>
              <span className="text-xs text-gray-500">{d.humidity} Hum</span>
            </Card>
          ))}
        </div>
      </div>

      {/* Second row → 4 cards */}
      <div className="grid grid-cols-4 gap-4 ">
        <Card className="p-2 text-center">
          <span className="text-sm font-medium">Sat</span>
          <Moon className="mx-auto size-5 text-accent" />
          <span className="font-bold">21°</span>
        </Card>
        <Card className="p-2 text-center">
          <span className="text-sm font-medium">Sun</span>
          <Sun className="mx-auto size-5 text-accent" />
          <span className="font-bold">27°</span>
        </Card>
        <Card className="p-2 text-center">
          <span className="text-sm font-medium">Mon</span>
          <Moon className="mx-auto size-5 text-accent" />
          <span className="font-bold">22°</span>
        </Card>
        <Card className="p-2 text-center">
          <span className="text-sm font-medium">Tue</span>
          <Sun className="mx-auto size-5 text-accent" />
          <span className="font-bold">25°</span>
        </Card>
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
