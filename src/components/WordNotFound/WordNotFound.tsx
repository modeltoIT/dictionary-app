import {ErrorResponse} from "../../types/WordEntry.ts";
import {FC, useContext} from "react";
import {FontContext} from "../../ContextProvider.tsx";
import {fontFamily} from "../../constants/fontFamily.ts";

interface Props {
    error: ErrorResponse;
}

export const WordNotFound: FC<Props> = ({error: {title, resolution, message}}) => {
    const {font} = useContext(FontContext);

    return (
        <div className='flex flex-col gap-6 justify-center items-center'>
            <div className='text-[64px] mt-2 sm:mt-10'>&#128533;</div>

            <h3
                className={`${fontFamily[font as keyof typeof fontFamily]['bold']} text-hs 
                text-black3 dark:text-white`}
            >
                {title}
            </h3>

            <p
                className={`${fontFamily[font as keyof typeof fontFamily]['regular']} text-sm sm:text-bm text-black5 
                dark:text-white text-center`}
            >
                {message} {resolution}
            </p>
        </div>
    )
}

