//created with copilot :D

import { Maybe, Word } from "@src/dao/types";
import { chatGPTResponse } from "./getResponse";
import { PromptType } from "./propmtType";

export class WordFinder {
  wordTitle: string;
  constructor(wordTitle: string) {
    this.wordTitle = wordTitle;
  }

  public async findWordAsync(): Promise<Maybe<Word>> {
    const response = await chatGPTResponse(
      PromptType.WORD_OBJECT_PROMPT,
      this.wordTitle
    );
    if (response) {
      const word = JSON.parse(response);
      word.title = this.wordTitle;
      word.author = "ChatGPT";
      return word;
    } else {
      return null;
    }
  }
}
