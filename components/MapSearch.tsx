"use client";

import { Card } from "@heroui/react";
import {
  Map,
  AdvancedMarker,
  MapControl,
  ControlPosition,
} from "@vis.gl/react-google-maps";
import AddressAutocomplete from "./ui/AddressAutocomplete";

const MapSearch = () => {
  return (
    <Card className="h-100 w-full rounded-2xl overflow-hidden">
      <Map
        defaultCenter={{ lat: 24.97513, lng: 84.187536 }}
        defaultZoom={10}
        style={{ width: "100%", height: "100%" }}
        mapId="85996ea781c0d0703c421047"
      >
        <AdvancedMarker position={{ lat: 24.97513, lng: 84.187536 }} />
        <MapControl position={ControlPosition.TOP}>
          <AddressAutocomplete />
        </MapControl>
        {/* <MapHandler place={selectedPlace} marker={marker} /> */}
      </Map>
    </Card>
  );
};

export default MapSearch;
