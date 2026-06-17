"use client";

import { Button } from "@heroui/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      variant={theme === "light" ? "primary" : "secondary"}
      onPress={() => setTheme((prev) => (prev === "light" ? "dark" : "light"))}
      isIconOnly
    >
      {theme === "light" ? <Moon /> : <Sun />}
    </Button>
  );
}
