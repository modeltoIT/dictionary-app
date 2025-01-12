import {Header} from "./components/Header";
import {WordSearch} from "./components/WordSearch";
import {WordInfo} from "./components/WordInfo";
import {useContext, useState} from "react";
import {DictionaryResponseContext} from "./ContextProvider.tsx";

function App() {
    const [isInvalid, setIsInvalid] = useState(false)
    const {word} = useContext(DictionaryResponseContext);

    const onEmptyField = () => {
        setIsInvalid(true);
    }

    const onTyping = () => {
        setIsInvalid(false);
    }

    return (
        <div
            className='max-w-[737px] mx-auto p-6 pb-[80px] sm:px-10 laptop:px-0 sm:pt-15
            sm:pb-[120px] selection:bg-purpleSelection'
        >
            <Header/>
            <WordSearch
                isInvalid={isInvalid}
                onEmptyField={onEmptyField}
                onTyping={onTyping}
            />

            {!isInvalid && word && <WordInfo/>}

        </div>
    )
}

export default App
