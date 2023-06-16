import { Word } from "@src/dao/types";
import React, { EventHandler, MouseEventHandler, useContext } from "react";
import WordContext from "@src/context/wordContext";
import { useRouter } from "next/router";

interface WordRowProps {
  onClick: Function;
  wordInput: Word;
}

const WordRow: React.FC<WordRowProps> = ({ wordInput }: WordRowProps) => {
  const { title, definition } = wordInput;
  const { word, setWord } = useContext(WordContext);
  const router = useRouter();

  return (
    <div
      onClick={(e) => {
        setWord(wordInput);
        router.push(`/${encodeURI(wordInput.title.toString())}`, undefined, {
          shallow: true,
        });
      }}
      className="my-5 border-solid border rounded-lg p-3 text-grey-300 hover:text-grey-800 border-grey-300 dark:border-grey-400 hover:border-grey-800  dark:hover:border-grey-200  dark:hover:text-white"
    >
      <h1 className=" text-lg font-bold">{title}</h1>
      <p className="">
        {definition.length > 100
          ? definition.substring(0, 99) + "..."
          : definition}
      </p>
    </div>
  );
};

export default WordRow;
