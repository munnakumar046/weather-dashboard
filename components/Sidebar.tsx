"use client";

import { Avatar } from "@heroui/react";
import clsx from "clsx";
import { Building2, Clock, LayoutGridIcon, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className=" bg-background text-forground w-56 h-[calc(100vh-4rem)] p-4 flex flex-col justify-between border-r overflow-y-auto">
      {/* Navigation */}
      <div className="flex flex-col gap-4">
        <Link
          href="/"
          className={clsx(
            "flex items-center gap-3 p-2 rounded-l-md cursor-pointer",
            {
              "text-accent bg-accent/25 border-r-2 border-accent":
                pathname === "/",
            },
          )}
        >
          <LayoutGridIcon className="size-5" />
          <span className="font-medium">Dashboard</span>
        </Link>

        <Link
          href="/hourly"
          className={clsx(
            "flex items-center gap-3 p-2 rounded-l-md cursor-pointer",
            {
              "text-accent bg-accent/25 border-r-2 border-accent":
                pathname === "/hourly",
            },
          )}
        >
          <Clock className="w-5 h-5 " />
          <span className="font-medium">Hourly</span>
        </Link>

        <Link
          href="/cities"
          className={clsx(
            "flex items-center gap-3 p-2 rounded-l-md cursor-pointer",
            {
              "text-accent bg-accent/25 border-r-2 border-accent":
                pathname === "/cities",
            },
          )}
        >
          <Building2 className="w-5 h-5" />
          <span className="font-medium">Cities</span>
        </Link>

        <Link
          href="/setting"
          className={clsx(
            "flex items-center gap-3 p-2 rounded-l-md cursor-pointer",
            {
              "text-accent bg-accent/25 border-r-2 border-accent":
                pathname === "/setting",
            },
          )}
        >
          <Settings className="w-5 h-5" />
          <span className="font-medium">Settings</span>
        </Link>
      </div>

      {/* Bottom User Info */}
      <div className="flex items-center gap-3 p-2 border-t border-blue-500 mt-4">
        <Avatar>
          <Avatar.Image alt="John Doe" src="/images/logo_profile.jpg" />
          <Avatar.Fallback>JD</Avatar.Fallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium">Alex Morgan</p>
          <p className="text-xs">alex@skycast.com</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
