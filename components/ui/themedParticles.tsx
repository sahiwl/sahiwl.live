// components/ThemedParticles.tsx
"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Particles } from "./particles";

export function ThemedParticles(props: React.ComponentProps<typeof Particles>) {
  const { theme } = useTheme();
  // If light theme, use a dark color for particles, otherwise use white (or your desired color)
  const particleColor = theme === "light" ? "#000000" : "#ffffff";

  return <Particles {...props} color={particleColor} />;
}
