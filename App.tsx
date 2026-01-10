
import React, { useState, useCallback } from 'react';
import PrayerPage from './components/PrayerPage';
import { PrayerType } from './types';
import { generateSpiritualInsight } from './services/geminiService';

const App: React.FC = () => {
  const [name, setName] = useState('');
  const [insight, setInsight] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleGetInsight = useCallback(async () => {
    setLoading(true);
    const result = await generateSpiritualInsight(name);
    setInsight(result);
    setLoading(false);
  }, [name]);

  return (
    <div className="min-h-screen bg-gray-100 pb-20 overflow-x-hidden">
      {/* Control Panel - hidden on print */}
      <div className="no-print sticky top-0 z-50 bg-white/80 backdrop-blur-xl shadow-lg border-b border-amber-100">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row items-center gap-6 justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center text-white text-xl shadow-inner">✨</div>
              <div>
                <h1 className="text-lg font-bold text-amber-900 leading-none">阿卡西紀錄素材產生器</h1>
                <p className="text-xs text-amber-700/60 mt-1 uppercase tracking-tighter">Akashic Records Asset Generator</p>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              <input
                type="text"
                placeholder="輸入您的法定名稱 (XXX)"
                className="flex-1 md:w-72 px-4 py-2.5 rounded-xl border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all bg-amber-50/30 text-amber-900 placeholder:text-amber-700/30"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              
              <button
                onClick={handlePrint}
                className="px-8 py-2.5 bg-amber-700 text-white rounded-xl hover:bg-amber-800 transition-all shadow-lg shadow-amber-900/20 font-bold active:scale-95"
              >
                列印 A4 素材
              </button>
            </div>
          </div>

          {/* AI Insight Section */}
          <div className="mt-4">
            <div className="bg-amber-900/5 p-4 rounded-2xl border border-amber-100 flex items-center gap-4 group transition-all hover:bg-amber-900/10">
              <button
                onClick={handleGetInsight}
                disabled={loading}
                className="whitespace-nowrap flex items-center gap-2 px-5 py-2 bg-white border border-amber-200 rounded-lg text-amber-800 hover:border-amber-400 disabled:opacity-50 transition-all text-sm font-bold shadow-sm"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4 text-amber-600" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    連結中...
                  </span>
                ) : '💫 獲取靈魂導引'}
              </button>
              
              <div className="flex-1 overflow-hidden">
                {insight ? (
                  <p className="text-amber-900 italic animate-fade-in text-sm line-clamp-2">
                    「{insight}」
                  </p>
                ) : (
                  <p className="text-amber-800/40 text-sm italic">
                    輸入姓名後，可獲取一段來自紀錄的個人化冥想導引...
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pages Container */}
      <div className="flex flex-col items-center pt-8 space-y-12">
        <div className="relative group">
          <div className="no-print absolute -left-16 top-1/2 -rotate-90 text-amber-300 font-bold tracking-widest text-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">PAGE ONE</div>
          <PrayerPage type={PrayerType.OPENING} name={name} />
        </div>
        
        <div className="relative group">
          <div className="no-print absolute -left-16 top-1/2 -rotate-90 text-amber-300 font-bold tracking-widest text-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">PAGE TWO</div>
          <PrayerPage type={PrayerType.CLOSING} name={name} />
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateX(-10px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; padding: 0 !important; margin: 0 !important; }
          .page { margin: 0 !important; border: none !important; box-shadow: none !important; width: 210mm; height: 297mm; }
          .page-break { page-break-after: always; }
        }
      `}</style>
    </div>
  );
};

export default App;
