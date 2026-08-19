import dotenv from "dotenv";
import Groq from "groq-sdk";

dotenv.config();

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

console.log("Testing Groq...");
console.log("Model:", process.env.GROQ_MODEL);

try {
  const response = await groq.chat.completions.create({
    model: "openai/gpt-oss-20b",

    messages: [
      {
        role: "user",
        content: "قل مرحبًا بالعربية في جملة واحدة فقط."
      }
    ],

    max_completion_tokens: 1024,
    reasoning_effort: "low",
    include_reasoning: false,
    stream: false
  });

  console.log("\n========== FULL RESPONSE ==========");

  console.log(
    JSON.stringify(response, null, 2)
  );

  console.log("\n========== CONTENT ==========");

  console.log(
    response?.choices?.[0]?.message?.content
  );

} catch (error) {

  console.error("\n========== ERROR ==========");

  console.error(error);
}