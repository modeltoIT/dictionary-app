import {DropDown} from "../DropDown";
import {ThemeToggle} from "../ThemeToggle";

export const Header = () => {
    return (
        <header
            className='box-content mb-6 sm:mb-[51.5px] h-8 flex justify-between items-center sm:h-[36.5px]'>
            <svg className='h-full w-7 sm:w-8' xmlns="http://www.w3.org/2000/svg" width="34" height="38" viewBox="0 0 34 38">
                <g fill="none" fillRule="evenodd" stroke="#838383" strokeLinecap="round" strokeWidth="1.5">
                    <path d="M1 33V5a4 4 0 0 1 4-4h26.8A1.2 1.2 0 0 1 33 2.2v26.228M5 29h28M5 37h28"/>
                    <path strokeLinejoin="round" d="M5 37a4 4 0 1 1 0-8"/>
                    <path d="M11 9h12"/>
                </g>
            </svg>

            <div className='flex gap-4 items-center h-8 sm:gap-6.5'>
                <DropDown/>
                <span className='h-full w-px bg-gray2 dark:bg-black4'></span>
                <ThemeToggle/>
            </div>
        </header>
    )
}