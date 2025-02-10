"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({ children, ...props }) {
  return (
    <NextThemesProvider {...props} attribute="class" defaultTheme="dark" forcedTheme="dark">
      {children}
    </NextThemesProvider>
  )
}
