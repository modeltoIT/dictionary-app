import {FontType} from "../types/FontType.ts";

export const fontFamily: {
    [key in FontType]: {
        regular: string;
        bold: string;
        boldItalic?: string; // Optional property for some fonts
    };
} = {
    [FontType.serif]: {
        regular: 'font-loraRegular',
        bold: 'font-loraBold',
        boldItalic: 'font-loraBoldItalic',
    },
    [FontType.sansSerif]: {
        regular: 'font-interRegular',
        bold: 'font-interBold',
    },
    [FontType.mono]: {
        regular: 'font-inconsolataRegular',
        bold: 'font-inconsolataBold',
    },
};