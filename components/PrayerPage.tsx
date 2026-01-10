
import React from 'react';
import { COLORS, PRAYER_TEXT } from '../constants';
import { PrayerType } from '../types';

interface PrayerPageProps {
  type: PrayerType;
  name: string;
}

const PrayerPage: React.FC<PrayerPageProps> = ({ type, name }) => {
  const isOpening = type === PrayerType.OPENING;
  const data = isOpening ? PRAYER_TEXT.opening : PRAYER_TEXT.closing;

  return (
    <div className="page w-[210mm] h-[297mm] bg-white shadow-2xl mx-auto my-8 p-[10mm] flex items-center justify-center box-border page-break relative overflow-hidden">
      {/* Decorative corners */}
      <div className="absolute top-[12mm] left-[12mm] text-amber-600/20 text-4xl select-none">✧</div>
      <div className="absolute top-[12mm] right-[12mm] text-amber-600/20 text-4xl select-none">✧</div>
      <div className="absolute bottom-[12mm] left-[12mm] text-amber-600/20 text-4xl select-none">✧</div>
      <div className="absolute bottom-[12mm] right-[12mm] text-amber-600/20 text-4xl select-none">✧</div>

      <div 
        className="border-box w-full h-full p-8 md:p-10 flex flex-col justify-between relative"
        style={{ 
          border: `6px double ${COLORS.gold}`, 
          backgroundColor: COLORS.parchment 
        }}
      >
        {/* Inner Border thin line */}
        <div className="absolute inset-1.5 border border-amber-200 pointer-events-none"></div>

        <div className="text-center relative z-10">
          <div style={{ color: COLORS.gold, fontSize: '20px' }} className="mb-2">
            {isOpening ? '✦ ✦ ✦' : '✨ 🙏 ✨'}
          </div>
          <h1 
            className="text-center font-bold tracking-[8px] text-3xl mb-1"
            style={{ color: COLORS.deepGold }}
          >
            {data.title}
          </h1>
          <p className="text-amber-700/60 italic tracking-widest text-xs uppercase font-medium">
            {data.subtitle}
          </p>
        </div>

        <div className="flex-1 flex flex-col justify-center py-4 relative z-10">
          {!isOpening && (
            <p className="text-center text-amber-800/70 mb-6 italic text-sm font-medium">
              {PRAYER_TEXT.closing.instruction}
            </p>
          )}

          <div className="text-gray-800 px-4">
            {isOpening ? (
               PRAYER_TEXT.opening.content(name)
            ) : (
              <div className="text-center space-y-10">
                {PRAYER_TEXT.closing.parts.map((part, idx) => (
                  <div key={idx} className="group">
                    <p className="font-bold text-2xl mb-2 text-gray-900 leading-snug">{part.chinese}</p>
                    <p className="text-gray-500 italic text-base leading-relaxed max-w-2xl mx-auto">{part.english}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div 
          className="text-center relative z-10"
          style={{ color: COLORS.deepGold }}
        >
          {isOpening ? (
            <div className="border-t-2 border-amber-100 pt-6">
              <div className="text-3xl font-bold tracking-[4px] mb-1">
                {data.footer}
              </div>
              <p className="text-amber-700/50 italic text-sm uppercase tracking-widest">
                {PRAYER_TEXT.opening.englishFooter}
              </p>
            </div>
          ) : (
            <div className="space-y-1.5 border-t-2 border-amber-100 pt-6">
              <p className="text-2xl font-bold tracking-widest">{PRAYER_TEXT.closing.footer}</p>
              <p className="text-2xl font-bold tracking-widest opacity-80">{PRAYER_TEXT.closing.footer}</p>
              <p className="text-2xl font-bold tracking-widest opacity-60">{PRAYER_TEXT.closing.footer}</p>
              <p className="text-amber-700/40 italic text-xs mt-4 uppercase tracking-[0.2em] font-medium">
                The Records are now closed. Amen.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PrayerPage;
