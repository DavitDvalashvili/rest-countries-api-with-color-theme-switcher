/* eslint-disable @typescript-eslint/no-unused-vars */
import { Palette } from "@mui/icons-material";
import { ThemeOptions } from "@mui/material";

declare module "@mui/material/styles" {
  interface SimplePaletteColorOptions {
    white?: string;
    darker?: string;
    shadow?: string;
  }

  interface PaletteColor {
    white?: string;
    darker?: string;
    shadow?: string;
  }
}
