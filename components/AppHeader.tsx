"use client";
import React from "react";
import { SearchField, Avatar, Button, Badge, Label } from "@heroui/react";
import { Bell, CircleUserRound } from "lucide-react";
import { ThemeSwitcher } from "./theme-switcher";
import { usePathname } from "next/navigation";

const AppHeader = () => {
  const pathname = usePathname();

  const pageName = pathname.substring(1);

  return (
    <header className="fixed z-[99999] top-0 bg-background text-forground h-16 w-full flex items-center justify-between px-6 shadow-md">
      {/* Logo + Title */}
      <div className="flex flex-col">
        <h1 className="text-lg font-semibold text-accent">SkyCast</h1>
        <p className="text-sm ">Local Weather</p>
      </div>

      <div className="capitalize">{pageName}</div>
      {/* Search Bar */}
      <SearchField name="search">
        {/* <Label>Search</Label> */}
        <SearchField.Group>
          <SearchField.SearchIcon />
          <SearchField.Input
            className="w-[280px]"
            placeholder="Search city or forecast..."
          />
          <SearchField.ClearButton />
        </SearchField.Group>
      </SearchField>

      {/* Notifications + User */}
      <div className="flex items-center gap-6">
        <button className="relative p-2 rounded-full hover:bg-gray-300 transition cursor-pointer">
          <Bell className="h-5 w-5 " />
        </button>

        <button className="p-2 rounded-full hover:bg-gray-300 transition cursor-pointer">
          <CircleUserRound className="h-6 w-6" />
        </button>
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default AppHeader;
