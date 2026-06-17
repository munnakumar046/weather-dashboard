"use client";
import {
  Button,
  ButtonGroup,
  Card,
  Dropdown,
  Meter,
  Switch,
} from "@heroui/react";
import {
  ChevronDown,
  MapPin,
  Palette,
  PaletteIcon,
  SlidersHorizontal,
  Sun,
  UserRoundKey,
} from "lucide-react";
import { useState } from "react";

function Setting() {
  const [selected, setSelected] = useState("Select unit");
  return (
    <div>
      <div className="flex justify-between border-b">
        <div>
          <h2 className="text-2xl font-semibold">General Preferences</h2>
        </div>
        <div>
          <SlidersHorizontal />
        </div>
      </div>
      {/* 2nd section */}
      <Card className="p-6 flex flex-col gap-6 mt-6">
        {/* Temperature Units */}
        <div className="p-3 flex flex-row justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-lg font-semibold">Temperature Units</span>
            <p className="text-sm">
              Choose how temperature is displayed globally
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <ButtonGroup variant="primary">
              <Button>Celsius</Button>
              <Button>
                <ButtonGroup.Separator />
                Fahrenheit
              </Button>
            </ButtonGroup>
          </div>
        </div>

        {/* Wind Speed */}
        <div className="p-3 flex flex-row justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-lg font-semibold">Wind Speed</span>
            <p className="text-sm">
              Select preferred measurement for wind metrics
            </p>
          </div>
          <div className="flex">
            <Dropdown>
              <Button
                aria-label="Menu"
                variant="secondary"
                className="flex items-center gap-2"
              >
                {selected}
                <ChevronDown className="w-4 h-4" />
              </Button>
              <Dropdown.Popover>
                <Dropdown.Menu
                  onAction={(key) => {
                    setSelected(key as string);
                    console.log(`Selected: ${key}`);
                  }}
                >
                  <Dropdown.Item id="mph" textValue="mph">
                    <div className="flex flex-col">
                      <span className="font-medium">mph (Miles per hour)</span>
                      <span className="text-xs text-gray-500">Level 1</span>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item id="km/h" textValue="km/h">
                    <div className="flex flex-col">
                      <span className="font-medium">
                        km/h (Kilometers per hour)
                      </span>
                      <span className="text-xs text-gray-500">Level 2</span>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item id="m/s" textValue="m/s">
                    <div className="flex flex-col">
                      <span className="font-medium">
                        m/s (Meters per second)
                      </span>
                      <span className="text-xs text-gray-500">Level 3</span>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item id="knots" textValue="knots">
                    <div className="flex flex-col">
                      <span className="font-medium">knots</span>
                      <span className="text-xs text-gray-500">Level 4</span>
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Popover>
            </Dropdown>
          </div>
        </div>

        {/* Pressure Units */}
        <div className="p-3 flex flex-row justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-lg font-semibold">Pressure Units</span>
            <p className="text-sm">Atmospheric pressure display format</p>
          </div>
          <div className="flex flex-col gap-2">
            <ButtonGroup>
              <Button>hPa</Button>
              <Button>
                <ButtonGroup.Separator />
                mmHg
              </Button>
              <Button>
                <ButtonGroup.Separator />
                inHg
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </Card>
      {/* Appearance */}
      <div className="flex justify-between p-2 mt-4 border-b">
        <div>
          <h2 className="text-2xl font-semibold">Appearance</h2>
        </div>
        <div>
          <PaletteIcon />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-2  mt-4">
        <Card className="col-span-6  h-20 flex flex-row justify-between items-center m-4">
          <div className="flex items-center gap-2 mb-4">
            <Sun className="w-6 h-6" />

            <div className="flex flex-col justify-between items-center">
              <span className="text-xl font-bold">Dark Mode</span>
              <span className="text-sm">Currently: Light</span>
            </div>
          </div>
          <Switch>
            <Switch.Content>
              <Switch.Control>
                <Switch.Thumb />
              </Switch.Control>
            </Switch.Content>
          </Switch>
        </Card>
        {/* 2nd card */}
        <Card className="col-span-6 h-20 flex flex-row justify-between items-center m-4">
          <div className="flex items-center gap-2 mb-4">
            <Sun className="w-6 h-6" />

            <div className="flex flex-col justify-between items-center">
              <span className="text-xl font-bold">Dark Mode</span>
              <span className="text-sm">Currently: Light</span>
            </div>
          </div>
          <Switch>
            <Switch.Content>
              <Switch.Control>
                <Switch.Thumb />
              </Switch.Control>
            </Switch.Content>
          </Switch>
        </Card>
      </div>

      {/* Theme Selection */}
      <Card className="mt-4 ">
        {/* Header */}
        <div className="flex justify-between border-b mb-4">
          <h3 className="text-2xl font-semibold p-2">Theme Selection</h3>
        </div>

        {/* Cards Row */}
        <div className="grid grid-cols-12 gap-4">
          {/* Card 1 */}
          <div className="col-span-4 flex flex-col items-center">
            <Card className=" h-40 w-full flex items-center justify-center  bg-amber-100">
              <div className="w-full h-full rounded-2xl items-center justify-center bg-amber-200">
                <p>Preview</p>
              </div>
            </Card>
            <p className="mt-2 text-center font-medium">Crystal Clear</p>
          </div>

          {/* Card 2 */}
          <div className="col-span-4 flex flex-col items-center">
            <Card className=" h-40 w-full flex items-center justify-center  bg-gray-700">
              <div className="w-full h-full rounded-2xl items-center justify-center bg-gray-950 text-white">
                <p>Preview</p>
              </div>
            </Card>
            <p className="mt-2 text-center font-medium">Deep Storm</p>
          </div>

          {/* Card 3 */}
          <div className="col-span-4 flex flex-col items-center ">
            <Card className=" h-40 w-full flex items-center justify-center  bg-accent/80">
              <div className="w-full h-full rounded-2xl items-center justify-center bg-accent">
                <p>Preview</p>
              </div>
            </Card>
            <p className="mt-2 text-center font-medium">Azure Sky</p>
          </div>
        </div>
      </Card>

      {/* Data & Privacy */}

      <Card className="p-4 mt-4">
        {/* Header */}
        <div className="flex justify-between p-2 border-b mb-4">
          <h2 className="text-2xl font-semibold">Data & Privacy</h2>
          <div>
            <UserRoundKey />
          </div>
        </div>

        {/* Location Row */}
        <div className="flex justify-between items-center p-2">
          {/* Left side: icon + text */}
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-accent" />
            <p className="text-sm font-medium">Precise Location Services</p>
          </div>

          {/* Right side: enable button */}
          <Button className="px-4 py-1">Enable</Button>
        </div>
        <div className="flex justify-between items-center p-2">
          {/* Left side: icon + text */}
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-accent" />
            <p className="text-sm font-medium">Clear Search Hist</p>
          </div>

          {/* Right side: enable button */}
          <Button className="px-4 py-1">Clear Data</Button>
        </div>
      </Card>

      {/* Footer with Reset & Save */}

      <div className="flex justify-end gap-3 mt-4">
        <Button variant="secondary">Reset Defaults</Button>
        <Button variant="primary">Save Changes</Button>
      </div>
    </div>
  );
}

export default Setting;
