import {useContext} from "react";
import {DictionaryResponseContext} from "../../ContextProvider.tsx";
import {Pronunciation} from "../Pronunciation";
import {Meaning} from "../Meaning";
import {Source} from "../Source";
import {WordNotFound} from "../WordNotFound";

export const WordInfo = () => {
    const {word} = useContext(DictionaryResponseContext);
    if (word && 'word' in word) {
        return (
            <>
                <Pronunciation
                    wordName={word.word}
                    phonetic={word.phonetic}
                    phonetics={word.phonetics}
                />

                {word.meanings.map((meaning, index) => (
                    <Meaning key={index} meaning={meaning}/>
                ))}

                <Source sourceUrls={word.sourceUrls}/>
            </>
        );
    } else if (word) {
        return (
            <WordNotFound error={word}/>
        )
    }
}

