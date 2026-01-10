
import { GoogleGenAI } from "@google/genai";

export async function generateSpiritualInsight(name: string): Promise<string> {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const model = "gemini-3-flash-preview";
  
  const prompt = `
    The user is preparing to open their Akashic Records. 
    The name involved is "${name || 'Self'}".
    Provide a short, 2-3 sentence spiritual grounding message or intention in Traditional Chinese (Taiwan).
    The tone should be gentle, sacred, and encouraging. 
    Focus on light, wisdom, and inner peace.
  `;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        temperature: 0.8,
        topP: 0.95,
      },
    });
    return response.text || "願光引導你的每一步。";
  } catch (error) {
    console.error("Error fetching spiritual insight:", error);
    return "保持平靜的心，在紀錄的光芒中探索真實的自我。";
  }
}
