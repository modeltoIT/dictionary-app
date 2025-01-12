import {
    ChangeEventHandler, FC,
    FocusEventHandler,
    FormEventHandler,
    MouseEventHandler,
    useContext,
    useRef,
    useState
} from "react";
import classNames from "classnames";
import {DictionaryResponseContext, FontContext} from "../../ContextProvider.tsx";
import {fontFamily} from "../../constants/fontFamily.ts";
import {exampleWord} from "../../constants/exampleWord.ts";
import {ErrorResponse, WordEntry} from "../../types/WordEntry.ts";
import {exampleError} from "../../constants/exampleError.ts";

interface Props {
    isInvalid: boolean;
    onEmptyField: () => void;
    onTyping: () => void;
}

export const WordSearch: FC<Props> = ({isInvalid, onEmptyField, onTyping}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [searchWord, setSearchWord] = useState(exampleWord.word);
    const {font} = useContext(FontContext);
    const {setWord} = useContext(DictionaryResponseContext);

    const inputRef = useRef<HTMLInputElement | null>(null)
    const formRef = useRef<HTMLFormElement | null>(null)

    const handleInputFocus = () => {
        setIsFocused(true);
    }

    const handleLabelFocus: MouseEventHandler<HTMLLabelElement> = () => {
        inputRef.current?.focus()
    }

    const handleBlur: FocusEventHandler<HTMLInputElement> = () => {
        setIsFocused(false);
    }

    const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
        if (isInvalid) {
            onTyping()
        }

        setSearchWord(e.target.value)
    }

    const triggerSubmit = () => {
        formRef.current?.requestSubmit();
    }

    const onSubmitHandler: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        const trimmedWord = searchWord.trim();

        if (!trimmedWord) {
            onEmptyField()

            setWord(null)

            return;
        }

        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${trimmedWord}`).then(res => {
            if (!res.ok) {
                throw new Error('No such word found');
            }

            return res.json()
        }).then((res: Array<WordEntry | ErrorResponse>) => setWord(res[0])
        ).catch(() => setWord(exampleError));
    }

    return (
        <>
            <form
                onSubmit={onSubmitHandler}
                ref={formRef}
                className={classNames({
                    'mb-2': isInvalid,
                    'mb-7 sm:mb-[50px]': !isInvalid,
                })}
            >
                <label
                    className={classNames('h-[50.5px] sm:h-16 flex items-center bg-gray1 dark:bg-black2 py-3.5 sm:py-[21px] pl-6 rounded-2xl ' +
                        'border-[1px] border-solid cursor-pointer', {
                        'border-transparent': !isFocused && !isInvalid,
                        'border-purple': isFocused,
                        'border-red': isInvalid,
                    })}
                    onMouseDown={handleLabelFocus}
                >
                    <input
                        ref={inputRef}
                        type="text"
                        value={searchWord}
                        placeholder='Search for any word...'
                        className={`${fontFamily[font as keyof typeof fontFamily]['bold']} flex-grow bg-transparent 
                        outline-0 caret-purple text-[19px] leading-none sm:text-hs placeholder:opacity-25
                        placeholder:${fontFamily[font as keyof typeof fontFamily]['regular']} placeholder:text-black3
                        dark:placeholder:text-white text-black3 dark:text-white outline-none`}
                        onChange={onChangeHandler}
                        onFocus={handleInputFocus}
                        onBlur={handleBlur}
                    />

                    <svg
                        onClick={triggerSubmit}
                        className='w-max block pl-3 pr-[16.45px] sm:pl-5 sm:pr-[24.45px]' xmlns="http://www.w3.org/2000/svg"
                        width="15.55"
                        height="15.55" viewBox="0 0 18 18">
                        <path fill="none" stroke="#A445ED" strokeLinecap="round" strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"/>
                    </svg>
                </label>
            </form>

            <p className={classNames(`${fontFamily[font as keyof typeof fontFamily]['regular']} 
            text-red text-[16px] sm:text-hs leading-none ml-3`, {
                'hidden': !isInvalid,
                'visible': isInvalid,
            })}
            >
                Whoops, can’t be empty…
            </p>
        </>
    )
}
