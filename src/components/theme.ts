import { extendTheme, ThemeConfig, StyleFunctionProps } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles: {
    // Only body-level defaults — element selectors (p, h1...) are unlayered
    // when injected by Emotion and would override Tailwind's layered utilities.
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: props.colorMode === "dark" ? "#05080e" : "#f3f4f6",
        color: props.colorMode === "dark" ? "#f4f6fa" : "#111827",
      },
    }),
  },
});

export default theme;
