// Tipos relacionados a styled-components
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primary_light: string;
      secondary: string;
      grey: string;
      grey_light: string;
    };
  }
}
