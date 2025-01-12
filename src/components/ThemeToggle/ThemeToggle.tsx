import {useContext} from "react";
import {ThemeContext} from "../../ContextProvider.tsx";
import {ThemeType} from "../../types/ThemeType.ts";
import classNames from "classnames";

export const ThemeToggle = () => {
    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        setTheme(theme === ThemeType.light ? ThemeType.dark : ThemeType.light)
    }

    return (
        <div className='h-full flex gap-3 items-center sm:gap-5'>
            <button
                className={classNames('flex py-0.75 relative h-5 w-10 bg-black5 dark:bg-purple rounded-[10px] ' +
                    'before:block before:size-3.5 before:bg-white before:rounded-full before:absolute ' +
                    'cursor-pointer before:transition-transform before:ease-in-out before:duration-300  outline-purple',
                    {
                        'before:translate-x-[3px]': theme === ThemeType.light,
                        'before:translate-x-[23px]': theme === ThemeType.dark,
                    })}
                aria-label='Switch theme'
                onClick={toggleTheme}
            ></button>
            <svg
                className='h-5 w-5 stroke-black5 dark:stroke-purple cursor-pointer'
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 22 22"
                onClick={toggleTheme}
            >
                <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                      d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545
                      10.545 0 0 0 1 10.449Z"
                />
            </svg>
        </div>
    )
}