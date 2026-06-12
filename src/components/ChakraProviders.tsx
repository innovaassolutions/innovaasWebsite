"use client";
import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import theme from "./theme";

export default function ChakraProviders({ children }: { children: ReactNode }) {
  // resetCSS=false: Chakra's reset (h1 { font-size: inherit }) is unlayered and
  // would override Tailwind's layered utilities; Tailwind preflight handles reset.
  return <ChakraProvider theme={theme} resetCSS={false}>{children}</ChakraProvider>;
}
