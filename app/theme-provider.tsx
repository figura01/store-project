"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProviders } from "next-themes";
import { type ThemeProviderProps } from "next-themes";

export default function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  return <NextThemesProviders {...props}>{children}</NextThemesProviders>;
}
