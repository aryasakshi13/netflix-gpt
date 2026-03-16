import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.REACT_APP_GROK_API_KEY,
    baseURL: "https://api.groq.com/openai/v1",
    dangerouslyAllowBrowser: true,
});
export default openai;