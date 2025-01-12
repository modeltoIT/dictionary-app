import {useContext, useEffect, useRef, useState} from "react";
import classNames from "classnames";
import {FontContext} from "../../ContextProvider.tsx";
import {FontType} from "../../types/FontType.ts";
import {fontFamily} from "../../constants/fontFamily.ts";

export const DropDown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {font, setFont} = useContext(FontContext);
    const dropDownBtn = useRef<HTMLButtonElement | null>(null)
    const dropDownList = useRef<HTMLDivElement | null>(null)

    const toggleDropDown = () => {
        if (isOpen) {
            setIsOpen(false);

            return;
        }

        if (!isOpen) {
            if (dropDownList.current) {
                dropDownList.current.focus()
            }

            setIsOpen(true);
        }
    }

    const onBlurHandler: EventListener = (e) => {
        const target = e.target as HTMLElement;

        if (!dropDownBtn.current?.contains(target) && !dropDownList.current?.contains(target)) {
            setIsOpen(false);
        }
    }

    const keyDownHandler = () => {}

    useEffect(() => {
        document.addEventListener('touchstart', onBlurHandler);
        document.addEventListener('click', onBlurHandler);

        return () => {
            document.removeEventListener('touchstart', onBlurHandler);
            document.removeEventListener('click', onBlurHandler);
        };
    }, []);

    return (
        <div className='relative'>
            <button
                ref={dropDownBtn}
                className={`${fontFamily[font as keyof typeof fontFamily]['bold']} text-bs text-black3 
                dark:text-white h-6 flex gap-4 items-center justify-between sm:text-bm sm:gap-4.5 outline-purple`}
                onClick={toggleDropDown}
                aria-label='Choose a font'
            >
                <span>{font}</span>
                <svg
                    className={classNames('w-3 h-2 transition-transform ease-in-out duration-300',
                        {'rotate-180': isOpen})}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14 8">
                    <path className='stroke-purple' fill="none" strokeWidth="1.75" d="m1 1 6 6 6-6"/>
                </svg>
            </button>
            <div
                ref={dropDownList}
                className={classNames('h-0 overflow-hidden box-border absolute z-10 top-[42px] right-0 w-[140px] sm:w-[183px]',
                    'rounded-2xl bg-white dark:bg-black2 shadow-[0_5px_30px_rgba(0,0,0,0.1)] outline-none',
                    'dark:shadow-[0_5px_30px_rgba(128,69,237,0.9)] transition-[height] ease-in-out duration-300', {
                        'h-[132px]': isOpen,
                        'sm:h-[152px]': isOpen
                    })}
                tabIndex={-1}
            >
                <ul className='box-border h-full w-full text-bs sm:text-bm text-black3 dark:text-white py-4'>
                    {Object.values(FontType).map((fontName) => (
                        <li
                            className={classNames(`${fontFamily[fontName]['bold']} hover:text-purple cursor-pointer hover:bg-zinc-50 dark:hover:bg-neutral-900 px-6 py-2`)}
                            key={fontName}
                            onClick={() => {
                                setFont(fontName);
                                setIsOpen(false);
                            }}
                            onKeyDown={keyDownHandler}
                        >
                            {fontName}
                        </li>)
                    )
                    }
                </ul>
            </div>
        </div>
    )
}