import { Word } from "@src/dao/types";
import React, { EventHandler, MouseEventHandler } from "react";

interface WordRowProps {
  onClick: Function;
  word: Word;
}

const WordRow: React.FC<WordRowProps> = ({ word, onClick }: WordRowProps) => {
  const { title, description } = word;

  return (
    <div
      onClick={(e) => onClick(word)}
      className="my-5 border-solid border rounded-lg border-grey-200 p-3 hover:border-grey-800"
    >
      <h1 className="text-grey-800 text-lg font-bold">{title}</h1>
      <p>
        {description.length > 100
          ? description.substring(0, 99) + "..."
          : description}
      </p>
    </div>
  );
};

export default WordRow;
