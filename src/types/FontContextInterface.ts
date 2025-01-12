import {FontType} from "./FontType.ts";

export interface FontContextInterface {
    font: string,
    setFont: (font: FontType) => void,
}