// @ts-check
import OpenAI from "openai";

export const createOpenAi = () => { 
  if (!process.env.OPENAI_API_KEY) {
    throw new Error("OPENAI_API_KEY is not set");
  }
  return new OpenAI(); 
}
