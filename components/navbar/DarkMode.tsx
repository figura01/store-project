"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";

export default function DarkMode() {
  const { theme, setTheme } = useTheme();
  console.log("Current theme:", theme);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="border b-1 rounded-md ">
        <Button
          variant="outline"
          className="bg-primary text-primary-foreground/80 dark:text-primary/80 hover:bg-primary-foreground/100 dark:hover:bg-foreground/10 transition-colors"
          size="icon"
        >
          <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />

          <Sun className="absolute h-[1.2rem] w-[1.2rem] dark:rotate-0 dark:scale-100" />

          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
