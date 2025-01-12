import {FC, useContext} from "react";
import {FontContext} from "../../ContextProvider.tsx";
import {fontFamily} from "../../constants/fontFamily.ts";

interface Props {
    sourceUrls: string[];
}

export const Source: FC<Props> = ({sourceUrls}) => {
    const {font} = useContext(FontContext);


    if (sourceUrls.length) {
        return (
            <div
                className={`${fontFamily[font as keyof typeof fontFamily]["regular"]} text-bs text-black5 border-solid 
            border-gray2 dark:border-black4 border-t-[1px] pt-6 sm:pt-5 flex gap-x-5 gap-y-2 flex-wrap`}
            >
                <p>Source</p>
                <div className='flex flex-col gap-2 line-clamp-3'>
                    {sourceUrls.map((source) => (
                        <a
                            key={source}
                            href={source}
                            className='flex h-max gap-2 items-center dark:text-white underline'
                            target='_blank'
                        >
                            {source}
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                 viewBox="0 0 14 14">
                                <path fill="none" stroke="#757575" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="1.5"
                                      d="M6.09 3.545H2.456A1.455 1.455 0 0 0 1 5v6.545A1.455 1.455 0 0 0 2.455 13H9a1.455 1.455
                              0 0 0 1.455-1.455V7.91m-5.091.727 7.272-7.272m0 0H9m3.636 0V5"
                                />
                            </svg>
                        </a>
                    ))}
                </div>

            </div>
        )
    }
}


