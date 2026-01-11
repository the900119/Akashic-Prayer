
import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleGenAI } from "@google/genai";

// --- 組件：A4 頁面 ---
const A4Page = ({ children, title, subtitle }: { children: React.ReactNode, title: string, subtitle?: string }) => (
  <section className="relative w-[210mm] min-h-[297mm] mx-auto my-12 bg-[#fffcf5] text-[#2d2d2d] shadow-[0_0_50px_rgba(0,0,0,0.5)] p-12 box-border flex flex-col border-[12px] border-double border-[#d4af37] print:m-0 print:shadow-none print:border-[8px]">
    <div className="absolute inset-4 border border-[#d4af37]/20 pointer-events-none"></div>
    
    <header className="text-center mb-6 relative z-10">
      <div className="text-[#d4af37] text-2xl mb-1">✧ ✦ ✧</div>
      <h2 className="text-3xl font-bold tracking-[10px] text-[#8a6d3b] uppercase">{title}</h2>
      {subtitle && <p className="text-[10px] tracking-[4px] text-[#d4af37] mt-1 italic uppercase font-serif">{subtitle}</p>}
    </header>

    <div className="flex-1 relative z-10 flex flex-col justify-center leading-[1.7] text-justify">
      {children}
    </div>

    <footer className="text-center mt-6 pt-4 border-t border-[#d4af37]/30 relative z-10">
      <p className="font-bold text-[#8a6d3b] tracking-[4px] text-xs">阿卡西紀錄神聖儀式 • THE SACRED RITUAL OF AKASHIC RECORDS</p>
    </footer>
  </section>
);

// --- 子組件：雙語對照行 ---
const BilingualLine = ({ zh, en, className = "" }: { zh: string, en: string, className?: string }) => (
  <div className={`mb-4 ${className}`}>
    <p className="font-bold text-lg text-[#2d2d2d] mb-1">{zh}</p>
    <p className="text-sm italic text-[#8a6d3b]/80 font-serif leading-tight">{en}</p>
  </div>
);

const App = () => {
  const [userName, setUserName] = useState('');
  const [insight, setInsight] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchInsight = async () => {
    if (!userName) return;
    setIsLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `你是一位阿卡西紀錄引導者。使用者姓名為「${userName}」。請給予一段兩句的神聖啟發語，關於靈魂的覺醒與光。`,
        config: { temperature: 0.8 }
      });
      setInsight(response.text || '');
    } catch (e) {
      setInsight("願你在紀錄的光輝中，看見靈魂最真實的模樣。");
    }
    setIsLoading(false);
  };

  const displayName = userName || "本人";

  return (
    <div className="min-h-screen pb-20">
      {/* 控制台 */}
      <div className="no-print fixed top-6 right-6 z-[100] flex flex-col gap-4">
        <div className="bg-black/90 backdrop-blur-xl border border-[#d4af37]/50 p-6 rounded-2xl shadow-2xl w-80">
          <label className="block text-[10px] tracking-widest text-[#d4af37] mb-2 uppercase">靈魂連結姓名 (Soul Name)</label>
          <input 
            type="text" 
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="請輸入姓名..."
            className="w-full bg-transparent border-b border-[#d4af37] py-2 text-xl outline-none focus:border-white transition-colors"
          />
          <div className="mt-6 flex flex-col gap-3">
            <button onClick={fetchInsight} disabled={isLoading || !userName} className="w-full py-3 bg-[#d4af37] text-black font-bold rounded-lg active:scale-95 transition-all disabled:opacity-30">
              {isLoading ? '連結中...' : '💫 獲取靈魂導引'}
            </button>
            <button onClick={() => window.print()} className="w-full py-3 border border-[#d4af37] text-[#d4af37] font-bold rounded-lg hover:bg-[#d4af37]/10 transition-all">
              🖨️ 產生 A4 副本
            </button>
          </div>
          {insight && <div className="mt-6 p-4 bg-[#d4af37]/10 rounded-lg border border-[#d4af37]/20 italic text-xs leading-relaxed text-amber-200">"{insight}"</div>}
        </div>
      </div>

      <main className="relative z-10 pt-10 px-4">
        <A4Page title="開場冥想：聖光支柱" subtitle="Opening Meditation: Pillar of Holy Light">
          <div className="space-y-4 text-[13px] leading-relaxed opacity-80">
            <p><span className="font-bold">這個冥想，將幫助我們把自己穩穩地紮根在一道能量豐沛的光柱之中。</span><br/><span className="italic font-serif">This meditation will help us ground ourselves in a pillar of energy.</span></p>
            <p><span className="font-bold">現在，請找一個安靜的空間，端正地坐下來，讓背脊自然挺直，雙腳平穩地踩在地板上。</span><br/><span className="italic font-serif">Now, find a quiet space, sit upright with your spine straight and feet flat on the floor.</span></p>
            <p><span className="font-bold">將雙手輕輕相互接觸。開始從地心汲取能量，想像這股能量從地球的核心升起，經由你的腳底流入。</span><br/><span className="italic font-serif">Gently touch your hands together. Begin to draw energy from the heart of the Earth, rising through your feet.</span></p>
            <p><span className="font-bold">當你持續這樣連結雙手時，你會注意到這股能量已經流經你的雙臂並進入雙掌。</span><br/><span className="italic font-serif">As you continue this connection, notice the energy flowing through your arms into your palms.</span></p>
            <p><span className="font-bold">用雙手清潔你的氣場，清除你身上與周圍任何不屬於你的振動頻率，並將這些能量送回大地。</span><br/><span className="italic font-serif">Use your hands to clear your aura, releasing any vibrations that do not belong to you back to the Earth.</span></p>
            <p><span className="font-bold">現在，覺知那無限力量與慈愛的光之源頭。它始終存在，盤旋在你頭頂上方大約十八英吋的地方。</span><br/><span className="italic font-serif">Now, be aware of the source of infinite power and love, hovering about eighteen inches above your head.</span></p>
            <p><span className="font-bold">於是，你坐在一道完整而穩定的光柱之中。你已經準備好繼續向前。</span><br/><span className="italic font-serif">And so, you sit within a complete and stable Pillar of Light. You are ready to move forward.</span></p>
          </div>
        </A4Page>

        <A4Page title="開啟祈禱文" subtitle="The Opening Prayer">
          <div className="space-y-6 text-center">
            <div className="border-b border-amber-200 pb-4">
              <BilingualLine zh="是的！我們認知並感謝光的力量。" en="And so we do acknowledge the Forces of Light," />
              <BilingualLine zh="我請求指引、方向，和勇氣，去認出真理。" en="Asking for guidance, direction, and courage to know the Truth," />
              <BilingualLine zh="祂為了我們最高的美善而揭露，也為了所有與我們連結的人的最高福祉。" en="As it is revealed for our highest good and the highest good of everyone connected to us." />
            </div>

            <div className="py-4">
              <BilingualLine zh="噢！神聖的靈魂啊！請保護我遠離一切自以為是。" en="Oh Holy Spirit of God, Protect me from all self-centeredness," />
              <BilingualLine zh="請將我的注意力導向手邊的工作上。" en="And direct my attention to the work at hand." />
            </div>

            <div className="py-8 bg-[#d4af37]/5 border-y border-[#d4af37]/20 rounded-xl px-4">
              <div className="mb-6">
                <p className="text-lg font-bold">請幫助我在阿卡西紀錄的光中知曉 <span className="underline decoration-[#d4af37] px-2 text-2xl font-black">{displayName}</span>，</p>
                <p className="text-sm italic font-serif text-[#8a6d3b]">Help me to know {displayName} in the Light of the Akashic Records,</p>
              </div>
              <div className="mb-6">
                <p className="text-lg font-bold">請讓我透過紀錄領主之眼看見 <span className="underline decoration-[#d4af37] px-2 text-2xl font-black">{displayName}</span>，</p>
                <p className="text-sm italic font-serif text-[#8a6d3b]">To see {displayName} through the eyes of the Lords of the Records,</p>
              </div>
              <div>
                <p className="text-lg font-bold">並讓 <span className="underline decoration-[#d4af37] px-2 text-2xl font-black">{displayName}</span> 能夠分享大師、導師、和摯愛的人，所賜予 <span className="underline decoration-[#d4af37] px-2 text-2xl font-black">{displayName}</span> 的智慧與慈愛。</p>
                <p className="text-sm italic font-serif text-[#8a6d3b]">And enable {displayName} to share the wisdom and compassion that the Masters, Teachers, and Loved Ones have for {displayName}.</p>
              </div>
            </div>

            <div className="pt-6">
              <p className="text-3xl font-bold tracking-[15px] text-[#8a6d3b] uppercase">紀錄現在已開啟</p>
              <p className="text-sm italic font-serif text-[#d4af37] mt-2 tracking-widest">The Records are now open.</p>
            </div>
          </div>
        </A4Page>

        <A4Page title="關閉祈禱文" subtitle="The Closing Prayer">
          <div className="space-y-12 text-center py-10">
            <BilingualLine zh="我感謝大師們、導師們，以及我所摯愛的人，感謝祂們的愛和慈愛。" en="I would like to thank the Masters, Teachers, and Loved Ones for their love and compassion." />
            <BilingualLine zh="我感謝阿卡西紀錄領主們，感謝祂們的觀點。" en="I would like to thank the Lords of the Akashic Records for their point of view." />
            <BilingualLine zh="我感謝光的聖靈，感謝祂們所賜給我的知識和療癒。" en="And I would like to thank the Holy Spirit of Light for all knowledge and healing." />
            <div className="pt-24 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-[#d4af37]/30"></div>
              <p className="text-3xl font-bold tracking-[10px] text-[#8a6d3b] uppercase">紀錄現在已關閉</p>
              <p className="text-sm italic font-serif text-[#d4af37] mt-2 tracking-[4px]">The Records are now closed.</p>
              <p className="text-2xl mt-4 font-bold">阿們 • AMEN</p>
            </div>
          </div>
        </A4Page>
      </main>
      <div className="no-print fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-50"></div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
