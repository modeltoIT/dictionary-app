interface License {
    name: string;
    url: string;
}

export interface Phonetic {
    text?: string;
    audio: string;
    sourceUrl?: string;
    license?: License;
}

export interface Definition {
    definition: string;
    example?: string;
    synonyms: string[];
    antonyms: string[];
}

export interface MeaningType {
    partOfSpeech: string;
    definitions: Definition[];
    synonyms: string[];
    antonyms: string[];
}

export interface WordEntry {
    word: string;
    phonetic?: string;
    phonetics: Phonetic[];
    meanings: MeaningType[];
    license?: License;
    sourceUrls: string[];
}

export interface ErrorResponse {
    title: string;
    message: string;
    resolution: string;
}

export interface DictionaryResponse {
    word: WordEntry | ErrorResponse | null;
    setWord: (result: WordEntry | ErrorResponse | null) => void;
}