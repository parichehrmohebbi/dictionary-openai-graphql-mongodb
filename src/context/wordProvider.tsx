import React, { useState } from "react";
import WordContext from "@src/context/wordContext";

type ContainerProps = {
  children?: React.ReactNode;
};

export const WordProvider: React.FC<ContainerProps> = ({
  children,
}: ContainerProps) => {
  const [word, setWord] = useState(null);

  return (
    <WordContext.Provider value={{ word, setWord }}>
      {children}
    </WordContext.Provider>
  );
};
