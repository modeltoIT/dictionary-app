import {fontFamily} from "../../constants/fontFamily.ts";
import {useContext} from "react";
import {FontContext} from "../../ContextProvider.tsx";
import * as React from "react";
import {Phonetic} from "../../types/WordEntry.ts";

interface Props {
    wordName: string;
    phonetic?: string;
    phonetics: Phonetic[];
}

export const Pronunciation: React.FC<Props> = ({wordName, phonetic, phonetics}) => {
    const {font} = useContext(FontContext);
    let displayFonetic = phonetic

    const audioSource = [...phonetics].reverse().find(el => el.audio)
    if (audioSource) {
        displayFonetic = audioSource.text;
    }
    const audio = new Audio(audioSource?.audio)

    const playAudio = () => {
        audio.play();
    }

    return (
        <section className='flex justify-between items-center mb-8 sm:mb-[42px]'>
            <div className='flex flex-col gap-2'>
                <p
                    className={`${fontFamily[font as keyof typeof fontFamily]['bold']} text-[32px] sm:text-hl 
                    text-black3 dark:text-white leading-[39px]`}
                >
                    {wordName}
                </p>

                <p
                    className={`${fontFamily[font as keyof typeof fontFamily]['regular']} 
                    text-bm sm:text-hm text-purple`}
                >
                    {displayFonetic}
                </p>
            </div>
            {!!audioSource && (
                <div className='cursor-pointer rounded-full inline-block overflow-hidden' onClick={playAudio}>
                    <svg className="w-12 h-12 sm:w-[75px] sm:h-[75px]  hover:circle-hover" viewBox="0 0 75 75"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <circle className="circle-default transition-opacity" cx="37.5" cy="37.5" r="37.5"
                                fill="#A445ED"/>
                        <path className="triangle-default transition-[fill]" fillRule="evenodd" clipRule="evenodd"
                              d="M29 27V48L50 37.5L29 27Z" fill="#A445ED"/>
                    </svg>
                </div>
            )}
        </section>
    )
}