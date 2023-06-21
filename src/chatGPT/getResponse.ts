import { Configuration, OpenAIApi, ChatCompletionRequestMessage } from "openai";
import { PromptType } from "./propmtType";
import { Maybe } from "@src/dao/types";

const CHATGPT_API_KEY = "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";

export const chatGPTResponse = async (
  promptType: PromptType,
  technology: string
): Promise<Maybe<string>> => {
  const prompt = promptType.replaceAll("{0}", technology);

  const messages: ChatCompletionRequestMessage[] = [];
  messages.push({ role: "user", content: prompt });

  const configuration = new Configuration({
    apiKey: CHATGPT_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: messages,
      n: 1,
      stream: false,
    });
    console.log("chatbox answer", completion);
    const response = completion.data.choices[0].message;

    return response?.content;
  } catch (error) {
    console.error(`Failed to generate response for:${technology}`, error);
    return "";
  }
};
