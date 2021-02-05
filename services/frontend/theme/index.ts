import { extendTheme, theme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
// Version 1: Using objects
export const GlobalTheme = extendTheme({
  colors: {
    brand: {
      50: "#d8ffff",
      100: "#acffff",
      200: "#7dffff",
      300: "#4dffff",
      400: "#28ffff",
      500: "#18e5e6",
      600: "#00b2b3",
      700: "#007f80",
      800: "#004d4e",
      900: "#001b1d",
    },
  },
});
