
import React from 'react';

export const COLORS = {
  gold: '#d4af37',
  deepGold: '#8a6d3b',
  parchment: '#fffcf5',
};

export const PRAYER_TEXT = {
  opening: {
    title: "開啟祈禱文",
    subtitle: "Opening Prayer",
    content: (name: string) => (
      <div className="space-y-4 text-[15px] md:text-[17px] leading-snug">
        <div className="text-center space-y-1 mb-4">
          <p className="font-bold text-lg">是的！我們認知並感謝光的力量</p>
          <p>我請求指引、方向，和勇氣，去認出真理</p>
          <p>祂為了我們最高的美善而揭露</p>
          <p>也為了所有與我們連結的人的最高福祉</p>
        </div>
        
        <div className="text-center space-y-1 mb-4">
          <p>噢！神聖的靈魂啊！</p>
          <p>請保護我遠離一切自以為是</p>
          <p>請將我的注意力導向手邊的工作上</p>
          <p>請幫助我在阿卡西紀錄的光中知曉我自己</p>
          <p>請讓我透過紀錄領主之眼看見我自己</p>
          <p>並讓我能夠分享我的大師、導師、和摯愛的人，所賜予我的智慧與慈悲</p>
        </div>

        <div className="text-center space-y-1 bg-amber-50/50 py-3 border-y border-amber-200/50">
          <p>請讓我透過紀錄領主之眼看見 <span className="underline decoration-amber-600 font-bold px-2">{name || "XXX"}</span></p>
          <p>讓我能夠分享 <span className="font-bold">{name || "XXX"}</span> 的大師、導師、和摯愛的人</p>
          <p>所賜予（他或她）的智慧與慈悲</p>
        </div>

        <div className="text-center space-y-1 mb-4">
          <p>請幫助我在阿卡西紀錄的光中知曉 <span className="underline decoration-amber-600 font-bold px-2">{name || "XXX"}</span></p>
          <p>請讓我透過紀錄領主之眼看見 <span className="underline decoration-amber-600 font-bold px-2">{name || "XXX"}</span></p>
          <p>讓我能夠分享 <span className="font-bold">{name || "XXX"}</span> 的大師、導師、和摯愛的人</p>
          <p>所賜予（他或她）的智慧與慈悲</p>
        </div>

        <div className="text-center pt-2 border-t border-amber-100 italic text-gray-500 text-[13px] leading-relaxed">
          <p>And so we do acknowledge the Forces of Light,</p>
          <p>Asking for guidance, direction, and courage to know the Truth</p>
          <p>As it is revealed for our highest good and the highest good of every one connected to us.</p>
          <p>Oh Holy Spirit of God, Protect me from all forms of self centeredness</p>
          <p>And direct my attention to the work at hand. Help me to know myself in the Light of the Akashic Records,</p>
          <p>To see myself through the eyes of the Lords of the Records,</p>
          <p>And enable me to share the wisdom and compassion that the Masters, Teachers, and Loved Ones of me have for me.</p>
        </div>
      </div>
    ),
    footer: "紀錄現在已開啟！",
    englishFooter: "The Records are now open."
  },
  closing: {
    title: "關閉祈禱文",
    subtitle: "Closing Prayer",
    instruction: "大聲唸出下面的祈禱詞～",
    parts: [
      {
        chinese: "我感謝大師們、導師們，以及我所摯愛的人，感謝祂們的愛和慈悲。",
        english: "I would like to thank the Masters, Teachers, and Loved Ones for their love and compassion."
      },
      {
        chinese: "我感謝阿卡西紀錄領主們，感謝祂們的觀點。",
        english: "I would like to thank the Lords of the Akashic Records for their point of view."
      },
      {
        chinese: "我感謝光的聖靈，感謝祂們所賜給我的知識和療癒。",
        english: "And I would like to thank the Holy Spirit of Light for all knowledge and healing."
      }
    ],
    footer: "紀錄現在已關閉，阿們。"
  }
};
