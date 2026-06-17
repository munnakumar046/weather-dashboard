import Dashboard from "@/components/Dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "This is dashboard page for weather app",
};

export default function Home() {
  return <Dashboard />;
}
