import { Maybe, Word } from "@src/dao/types";
import { createContext, useState } from "react";

interface WordContextType {
  word: Maybe<Word>;
  setWord: Function;
}

const WordContext = createContext<WordContextType>({
  word: {
    _id: "000000",
    title: "Tech Dictionary",
    definition: "This is a dictionary for Tech-related Words",
    author: "Parichehr Mohebbi",
    relatedTopics: [],
    relatedLinks: [],
  },
  setWord: () => {},
});

export default WordContext;
