"use client";

import { APIProvider } from "@vis.gl/react-google-maps";
import { ReactNode } from "react";

const GoogleMappProvider = ({
  children,
}: Readonly<{ children: ReactNode }>) => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY;

  return <APIProvider apiKey={apiKey as string}>{children}</APIProvider>;
};

export default GoogleMappProvider;
