
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// IMPORTANT: API_KEY should be set as an environment variable.
// For example, in a Node.js environment or when bundling (e.g., Vite, Webpack),
// process.env.API_KEY would be replaced by its actual value.
// In a browser-only context without a build step, this approach won't directly work
// for process.env. You would need a backend proxy or ensure the key is securely
// managed if exposed client-side (generally not recommended for production).
// For this exercise, we assume process.env.API_KEY is made available in the execution environment.
const API_KEY = process.env.API_KEY;

let ai: GoogleGenAI | null = null;
if (API_KEY) {
  ai = new GoogleGenAI({ apiKey: API_KEY });
} else {
  console.warn(
    "Gemini API Key is not configured. AI interactions will be disabled. Ensure the API_KEY environment variable is set."
  );
}

const MODEL_NAME = "gemini-2.5-flash-preview-04-17";

export const generateAikoVenvResponse = async (userQuery: string): Promise<string> => {
  if (!ai) {
    return "AI Service Error: API Key not configured. Please ensure the API_KEY environment variable is set and valid. AI interaction is disabled.";
  }

  try {
    const prompt = `You are AikoVenv's Vision Bot, an AI assistant representing AikoVenv.
AikoVenv, founded by Gazi Pollob Hussain, is a company leveraging and mastering Google's ecosystem to build its vision.
Your goal is to provide insightful, concise, and positive responses that reflect AikoVenv's innovative spirit and technological foundation.
Please answer the following user's question:

User's question: "${userQuery}"

Your response should be helpful and align with AikoVenv's mission.`;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: prompt,
      // Default thinkingConfig (enabled) is suitable here.
    });

    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    let errorMessage = "Sorry, I encountered an error trying to respond. Please try again later.";
    if (error instanceof Error) {
      if (error.message.includes("API key not valid") || error.message.includes("API_KEY_INVALID")) {
        errorMessage = "AI Service Error: The API key is invalid or not authorized. Please check the configuration.";
      } else if (error.message.includes("quota")) {
        errorMessage = "AI Service Error: The API quota has been exceeded. Please try again later.";
      } else if (error.message.includes("Request payload size exceeds the limit")) {
        errorMessage = "AI Service Error: Your question is too long. Please try a shorter question.";
      } else if (error.message.toLocaleLowerCase().includes("model not found")) {
         errorMessage = "AI Service Error: The specified AI model is currently unavailable. Please try again later.";
      }
    }
    return errorMessage;
  }
};
