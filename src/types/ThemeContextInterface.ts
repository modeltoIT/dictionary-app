import {ThemeType} from "./ThemeType.ts";

export interface ThemeContextInterface {
    theme: ThemeType,
    setTheme: (theme: ThemeType) => void,
}