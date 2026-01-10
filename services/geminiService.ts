
import { GoogleGenAI } from "@google/genai";

export async function generateSpiritualInsight(name: string): Promise<string> {
  // 極度安全的 API Key 獲取方式
  let apiKey = "";
  try {
    // 檢查 globalThis 是否有 process (Node 模擬器) 或直接從 env 獲取
    // @ts-ignore
    apiKey = (typeof process !== 'undefined' && process.env?.API_KEY) || "";
  } catch (e) {
    apiKey = "";
  }

  if (!apiKey) {
    return "請在系統中配置 API Key 以開啟靈魂導引。目前請先專注於當下的呼吸與光。";
  }

  const ai = new GoogleGenAI({ apiKey: apiKey });
  
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
    return response.text || "願光引導你的每一步。";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "保持平靜的心，在紀錄的光芒中探索真實的自我。";
  }
}
