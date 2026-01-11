
import { GoogleGenAI } from "@google/genai";

export async function generateSpiritualInsight(name: string): Promise<string> {
  // Use process.env.API_KEY directly as per guidelines
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `
    這是一位正在準備開啟阿卡西紀錄的使用者，姓名為：「${name || '無名者'}」。
    請提供一段 2-3 句的短語，用於靈魂導引或設定純淨意圖。
    語氣應溫柔、神聖且具鼓勵性。專注於光、智慧與內在平靜。
    請使用繁體中文（台灣）。
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    // Use .text property instead of .text() method
    return response.text || "願光引導你的每一步。";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "保持平靜的心，在紀錄的光芒中探索真實的自我。";
  }
}
