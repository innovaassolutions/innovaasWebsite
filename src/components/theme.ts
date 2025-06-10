import { extendTheme, ThemeConfig, StyleFunctionProps } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: props.colorMode === "dark" ? "#111827" : "#f3f4f6",
        color: props.colorMode === "dark" ? "#f3f4f6" : "#111827",
      },
      p: {
        color: props.colorMode === "dark" ? "#d1d5db" : "#374151",
      },
      h1: {
        color: props.colorMode === "dark" ? "#fff" : "#111827",
      },
      h2: {
        color: props.colorMode === "dark" ? "#fff" : "#111827",
      },
      // Add more as needed
    }),
  },
});

export default theme;
