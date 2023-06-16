import { useState } from "react";
import WordContext from "@src/context/wordContext";

export const WordProvider = ({ children }) => {
  const [word, setWord] = useState(null);

  return (
    <WordContext.Provider value={{ word, setWord }}>
      {children}
    </WordContext.Provider>
  );
};
