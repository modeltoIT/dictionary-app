/* eslint-disable react-refresh/only-export-components */
import {createContext, ReactNode, useEffect, useState} from "react";
import {FontType} from "./types/FontType.ts";
import {FontContextInterface} from "./types/FontContextInterface.ts";
import {ThemeContextInterface} from "./types/ThemeContextInterface.ts";
import {ThemeType} from "./types/ThemeType.ts";
import {DictionaryResponse, ErrorResponse, WordEntry} from "./types/WordEntry.ts";
import {exampleWord} from "./constants/exampleWord.ts";

export const ThemeContext = createContext<ThemeContextInterface>({
    theme: '' as ThemeType,
    setTheme: () => {
    },
})

export const FontContext = createContext<FontContextInterface>({
    font: '' as FontType,
    setFont: () => {
    },
})

export const DictionaryResponseContext = createContext<DictionaryResponse>({
    word: {} as WordEntry | ErrorResponse,
    setWord: () => {},
})


export const ContextProvider = ({children}: { children: ReactNode }) => {
    const [theme, setTheme] = useState<ThemeType>(() => {
            const isDarkSystem = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const isThemeSet = 'theme' in localStorage;

            return isThemeSet ? (localStorage.getItem('theme') as ThemeType) : isDarkSystem ? ThemeType.dark : ThemeType.light;
        }
    );

    const [font, setFont] = useState<FontType>(() =>
        (localStorage.getItem('font') as FontType) || FontType.sansSerif
    );

    const [word, setWord] = useState<WordEntry | ErrorResponse | null>(exampleWord);

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.documentElement.className = theme;
        document.body.className = theme === ThemeType.light ? 'bg-white' : 'bg-black1';

    }, [theme]);

    useEffect(() => {
        localStorage.setItem('font', font);
    }, [font]);

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            <FontContext.Provider value={{font, setFont}}>
                <DictionaryResponseContext.Provider value={{word, setWord}}>
                    {children}
                </DictionaryResponseContext.Provider>
            </FontContext.Provider>
        </ThemeContext.Provider>
    )
}