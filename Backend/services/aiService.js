const OpenAI = require("openai");
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function fixJsonWithAI(brokenJson) {
  const prompt = `
    You are a strict JSON fixer.
    
    Rules:
    - Fix ONLY JSON syntax errors
    - Do NOT chnage values
    - Do NOT add or remove keys
    - Output MUST be valid JSON
    - Do NOT include explanations inside JSON
    - Do NOT use markdown
    
    Broken JSON:
    ${brokenJson}
    `;

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
    temperature: 0,
  });
  // console.log("AI response:", response.choices[0].message.content);
  return response.choices[0].message.content;
}

module.exports = { fixJsonWithAI };
