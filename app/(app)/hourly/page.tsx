"use client";
import { Card, Meter } from "@heroui/react";
import { Droplet, ListFilter, Sun, Wind } from "lucide-react";

import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface HourData {
  time: string;
  temp: string;
  rain: string;
  humidity: string;
}

function Hourly() {
  const hours: HourData[] = [
    { time: "10 AM", temp: "68°", rain: "2%", humidity: "45%" },
    { time: "10 AM", temp: "68°", rain: "2%", humidity: "45%" },
    { time: "10 AM", temp: "68°", rain: "2%", humidity: "45%" },
    { time: "10 AM", temp: "68°", rain: "2%", humidity: "45%" },
    { time: "10 AM", temp: "68°", rain: "2%", humidity: "45%" },
    { time: "10 AM", temp: "68°", rain: "2%", humidity: "45%" },
    { time: "10 AM", temp: "68°", rain: "2%", humidity: "45%" },
    { time: "10 AM", temp: "68°", rain: "2%", humidity: "45%" },
    { time: "10 AM", temp: "68°", rain: "2%", humidity: "45%" },
    { time: "10 AM", temp: "68°", rain: "2%", humidity: "45%" },
  ];

  const data = [
    { name: "morning ", uv: 100, pv: 240, amt: 240 },
    { name: "afternoon", uv: 300, pv: 139, amt: 221 },
    { name: "evening", uv: 200, pv: 980, amt: 229 },
    { name: "night", uv: 100, pv: 390, amt: 200 },
  ];

  return (
    <div>
      <Card className="w-full flex flex-row justify-between items-start p-8">
        {/* Left Section */}
        <div className="flex flex-col gap-2 w-3/4">
          <div className="flex items-center gap-2 text-accent">
            <Sun className="w-5 h-5" />
            <span>NEXT 24 HOURS</span>
          </div>

          <span className="text-3xl font-bold">Partly Cloudy</span>

          <span className="text-sm leading-tight">
            High Temperatures expected around 2:00 PM. Precipitation change
            remains low until midnight.
          </span>
        </div>

        {/* Right Section */}
        <div className="relative flex items-center justify-end w-1/4">
          <span className="text-6xl font-bold text-accent">72°</span>
          <span className="absolute bottom-0 right-0 text-xl font-semibold">
            F
          </span>
        </div>
      </Card>

      <div className="flex justify-between m-4">
        <div>
          <h2 className="text-2xl font-semibold">Hourly Timeline</h2>
        </div>
        <div>
          <ListFilter />
        </div>
      </div>

      {/* Hourly Timeline card */}

      <div className="overflow-x-auto">
        <div className=" rounded-md border p-4">
          Your scrollable content here.
          <div className="flex gap-4 min-w-max">
            {hours.map((houre, index) => (
              <Card
                className="p-3 text-center w-40 flex flex-col gap-2 shrink-0"
                key={index}
              >
                <span className="text-sm font-medium">{houre.time}</span>
                <Sun className="mx-auto size-5 text-accent" />
                <span className="text-2xl font-bold">{houre.temp}</span>
                <div className="flex items-center justify-center gap-1 text-sm">
                  <Droplet className="w-4 h-4 text-accent" />
                  <span>{houre.rain}</span>
                </div>
                <span className="text-xs text-gray-500">
                  {houre.humidity} Hum
                </span>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* 3RD CARD */}

      <div className="grid grid-cols-12 gap-6 mt-6">
        {/* First Card - 8 columns */}
        <Card className="col-span-8 h-70 bg-amber-100 p-4">
          <AreaChart
            width={600}
            height={250}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </Card>

        {/* Second Card - 4 columns */}
        <div className="col-span-4 flex flex-col gap-4">
          <Card className="h-20 ">
            <div className="flex items-center gap-2 justify-between">
              <div className="flex flex-col whitespace-nowrap">
                <span>WIND SPEED</span>
                <span className="font-bold">12km/h</span>
              </div>
              <button className="p-2 rounded-full bg-blue-400 cursor-pointer">
                <Wind className="h-6 w-6" />
              </button>
            </div>
          </Card>
          <Card className="h-20 ">
            <div className="flex items-center gap-2 justify-between">
              <div className="flex flex-col whitespace-nowrap">
                <span>UV INDEX</span>
                <span className="font-bold">6 High</span>
              </div>
              <button className="p-2 rounded-full bg-amber-200 cursor-pointer">
                <Sun className="h-6 w-6" />
              </button>
            </div>
          </Card>{" "}
          <Card className="h-20 ">
            <div className="flex flex-col whitespace-nowrap">
              <span>PRECIPITATION</span>
              <span className="font-bold">0.05 IN</span>
            </div>
          </Card>
        </div>
      </div>

      {/* 4rth card */}
      <Card className="p-4  flex flex-col gap-6 mt-6">
        <h2 className="text-xl font-bold">Condition Deep-Dive</h2>

        <div className="flex flex-col  gap-4">
          {/* Inner Card 1 */}
          <Card className=" p-3 flex flex-row justify-between gap-2  ">
            <span className="p-2">Humidity</span>
            <div className="p-2">
              <Meter aria-label="Storage usage" className="w-60 h-2" value={45}>
                <Meter.Track>
                  <Meter.Fill />
                </Meter.Track>
              </Meter>
            </div>
            <span className="p-2">45%</span>
          </Card>

          {/* Inner Card 2 */}
          <Card className=" p-3 flex flex-row gap-2 justify-between ">
            <span className="p-2">Visibility</span>
            <span className="p-2">Perfect clear vision across the bay</span>
            <span className="p-2">9.4 mi</span>
          </Card>

          {/* Inner Card 3 */}
          <Card className="p-3 flex flex-row justify-between gap-2 ">
            <span className="p-2">Pressure</span>
            <span className="p-2">Stable atmospheric conditions</span>
            <span className="p-2">29.92 inHg</span>
          </Card>
        </div>
      </Card>
    </div>
  );
}

export default Hourly;
