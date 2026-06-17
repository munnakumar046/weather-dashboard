import { Button, Card } from "@heroui/react";
import { Cloud, Sun } from "lucide-react";

function Cities() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold">General Preferences</h2>
        <div className="text-accent cursor-pointer">Edit List</div>
      </div>

      {/* First Row: 2 Cards */}
      <div className="grid grid-cols-12 gap-6">
        {/* Card 1 */}
        <Card className="col-span-6 p-4 flex flex-col gap-4">
          {/* First Row */}
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold">London</h1>
              <p className="text-sm text-gray-600">United Kingdom · 09:42 AM</p>
            </div>
            <Sun className="w-8 h-8 text-yellow-500" />
          </div>

          {/* Second Row */}
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold">14°</h1>
              <div className="flex items-center gap-2 text-gray-700">
                <Cloud className="w-5 h-5 text-yellow-200" />
                <span>Overcast</span>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-sm font-medium">H: 16°</span>
              <span className="text-sm font-medium">L: 9°</span>
              <div className="w-24 h-2 bg-gray-200 rounded mt-2">
                <div
                  className="h-2 bg-blue-400 rounded"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>
          </div>
        </Card>

        {/* Card 2 */}
        <Card className="col-span-6 p-4 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold">Tokyo</h1>
              <p className="text-sm text-gray-600">Japan · 05:42 PM</p>
            </div>
            <Sun className="w-8 h-8 " />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold">22°</h1>
              <div className="flex items-center gap-2 text-gray-700">
                <Sun className="w-5 h-5" />
                <span>Sunny</span>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-sm font-medium">H: 24°</span>
              <span className="text-sm font-medium">L: 18°</span>
              <div className="w-24 h-2 bg-gray-200 rounded mt-2">
                <div
                  className="h-2 bg-yellow-500 rounded"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>
          </div>
        </Card>
        {/* Card 3 */}
        <Card className="col-span-6 p-4 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold">New York</h1>
              <p className="text-sm text-gray-600">USA · 04:42 AM</p>
            </div>
            <Sun className="w-8 h-8 " />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold">11°</h1>
              <div className="flex items-center gap-2 text-gray-700">
                <Sun className="w-5 h-5 text-yellow-500" />
                <span>Sunny</span>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-sm font-medium">H: 24°</span>
              <span className="text-sm font-medium">L: 10°</span>
              <div className="w-24 h-2 bg-gray-200 rounded mt-2">
                <div
                  className="h-2 bg-yellow-500 rounded"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>
          </div>
        </Card>
        <Card className="col-span-6 p-4 flex flex-col gap-4">
          {/* Second Row: Add Location Button */}
          <div className="flex justify-center items-center mt-4">
            <Button variant="primary" className="px-6 py-2 rounded-lg">
              + Add Location
            </Button>
          </div>
        </Card>
      </div>

      {/* Globle Highlights */}

      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold">Globle Highlights</h2>
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
              <h1 className="text-xl font-bold">Dubai</h1>

              <span className="text-3xl font-bold">38°</span>
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

              <span className="text-3xl font-bold">92%</span>
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

              <span className="text-3xl font-bold">45km/h</span>
            </div>
          </Card>
        </div>
      </div>
      {/* map */}
      <Card className="h-150 w-full rounded-2xl overflow-hidden">
        {/* Google Map Embed */}
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.911497902313!2d105.81501131540272!3d21.02851109316595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab3f5f5f5f5f%3A0x123456789abcdef!2sGoogle!5e0!3m2!1sen!2sin!4v1623939393939!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </Card>
    </div>
  );
}

export default Cities;
