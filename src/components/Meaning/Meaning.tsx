import {FC, useContext} from "react";
import {FontContext} from "../../ContextProvider.tsx";
import {fontFamily} from "../../constants/fontFamily.ts";
import {FontType} from "../../types/FontType.ts";
import classNames from "classnames";
import {MeaningType} from "../../types/WordEntry.ts";

interface Props {
    meaning: MeaningType;
}

export const Meaning: FC<Props> = ({meaning: {antonyms, synonyms, definitions, partOfSpeech}}) => {
    const {font} = useContext(FontContext);
    const fontType = font === FontType.serif ? 'boldItalic' : 'bold';

    return (
        <section className='mb-8 sm:mb-10'>
            <div className='flex justify-between items-center gap-4 sm:gap-5 mb-8 sm:mb-10'>
                <span
                    className={classNames(`${fontFamily[font as keyof typeof fontFamily][fontType]} text-bm 
                    text-black3 dark:text-white sm:text-hm `, {
                        'italic': font === FontType.sansSerif,
                    })}>
                    {partOfSpeech}
                </span>
                <div className='h-[1px] flex-grow bg-gray2 dark:bg-black4'></div>
            </div>
            <p
                className={`${fontFamily[font as keyof typeof fontFamily]['regular']} text-[16px] leading-[19px] 
                text-black5 sm:text-hs font-normal mb-4 sm:mb-6`}
            >
                Meaning
            </p>
            <ul
                className={`${fontFamily[font as keyof typeof fontFamily]['regular']} list-none font-normal 
                text-black3 dark:text-white text-[15px] leading-6 sm:text-bm space-y-[13px] mb-6 sm:mb-10`}
            >
                {definitions.map(({definition, example}, index) =>
                    <li
                        key={index}
                        className='flex gap-5'
                    >
                        <span className='inline-block rounded-full w-[5px] mt-[9.5px]
                        h-[5px] bg-purpleDark shrink-0'></span>
                        <div className='flex flex-col gap-3'>
                            <p>{definition}</p>
                            {!!example?.length && <p className='text-black5'>
                                <q>{example}</q>
                            </p>}
                        </div>
                    </li>)}
            </ul>
            {!!synonyms.length && (
                <div className={classNames('flex mb-2 gap-6', {
                    'mb-6 sm:mb-10': synonyms.length && antonyms.length,
                })}>
                    <p
                        className={`${fontFamily[font as keyof typeof fontFamily]['regular']} text-[16px] leading-[19px] 
                                text-black5 sm:text-hs font-normal inline-block`}
                    >
                        Synonyms
                    </p>
                    <div className='flex justify-start gap-5 flex-wrap gap-y-0.5'>
                        {synonyms.map((synonym, index) => (

                            <span
                                className={`${fontFamily[font as keyof typeof fontFamily]['bold']} text-[16px] 
                            leading-[19px] sm:text-hs text-purple inline-block w-max`}
                                key={index}
                            >
                                {synonym}
                            </span>
                        ))}
                    </div>
                </div>
            )
            }

            {!!antonyms.length && (
                <div className='flex mb-2 gap-6'>
                    <p
                        className={`${fontFamily[font as keyof typeof fontFamily]['regular']} text-[16px] leading-[19px] 
                                text-black5 sm:text-hs font-normal inline-block`}
                    >
                        Antonyms
                    </p>
                    <div className='flex justify-start gap-5 flex-wrap gap-y-0.5'>
                        {antonyms.map((antonym, index) => (

                            <span
                                className={`${fontFamily[font as keyof typeof fontFamily]['bold']} text-[16px] 
                            leading-[19px] sm:text-hs text-purple inline-block w-max`}
                                key={index}
                            >
                                {antonym}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </section>
    )
}