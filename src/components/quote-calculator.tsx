'use client';

import { useState } from 'react';
import { Upload, Calculator, Check, X } from 'lucide-react';
import Image from 'next/image';

export default function QuoteCalculator() {
  const [step, setStep] = useState(1);
  const [area, setArea] = useState('');
  const [style, setStyle] = useState('');
  const [quote, setQuote] = useState({ min: 0, max: 0 });

  const styles = [
    { id: 'modern', name: '現代簡約', image: '/images/service-residential.jpg', price: 600 },
    { id: 'luxury', name: '輕奢質感', image: '/images/hero-bg.png', price: 800 },
    { id: 'nordic', name: '北歐溫馨', image: '/images/service-license.jpg', price: 550 },
    { id: 'industrial', name: '工業風格', image: '/images/service-commercial.jpg', price: 650 },
  ];

  const calculateQuote = () => {
    const areaNum = parseFloat(area);
    if (!areaNum || !style) return;

    const selectedStyle = styles.find(s => s.id === style);
    const basePrice = selectedStyle ? selectedStyle.price : 600;
    
    // Simple estimation logic (just for demo)
    // Price per sqft * area
    const minPrice = areaNum * basePrice;
    const maxPrice = areaNum * (basePrice + 200);

    setQuote({ min: minPrice, max: maxPrice });
    setStep(3);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100">
      <div className="bg-black p-6 text-center">
        <h3 className="text-2xl font-bold text-yellow-500 mb-2">免費 AI 效果圖 + 智能估價</h3>
        <p className="text-gray-400 text-sm">30 秒獲取您的專屬裝修預算與設計靈感</p>
      </div>

      <div className="p-8">
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
              <label className="block text-gray-700 font-bold mb-2 text-lg">1. 您的單位實用面積 (平方呎)</label>
              <input 
                type="number" 
                value={area}
                onChange={(e) => setArea(e.target.value)}
                placeholder="例如: 500"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none text-xl"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-bold mb-4 text-lg">2. 您喜歡的設計風格</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {styles.map((s) => (
                  <div 
                    key={s.id}
                    onClick={() => setStyle(s.id)}
                    className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all relative group ${style === s.id ? 'border-yellow-500 ring-2 ring-yellow-500/50' : 'border-transparent hover:border-gray-300'}`}
                  >
                    <div className="relative h-24 w-full">
                      <Image src={s.image} alt={s.name} fill className="object-cover" />
                      <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-colors ${style === s.id ? 'bg-yellow-500/20' : ''}`}>
                        {style === s.id && <Check className="text-white w-8 h-8 drop-shadow-md" />}
                      </div>
                    </div>
                    <div className="p-2 text-center bg-gray-50 font-bold text-sm text-gray-800">{s.name}</div>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={() => { if(area && style) setStep(2) }}
              disabled={!area || !style}
              className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 rounded-lg text-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              下一步：上傳平面圖
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500 text-center">
            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">3. 上傳單位平面圖或現況照片</h4>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-10 bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer group relative">
                <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center text-yellow-500 group-hover:scale-110 transition-transform">
                    <Upload size={32} />
                  </div>
                  <div>
                    <p className="text-gray-600 font-medium">點擊或拖放圖片至此</p>
                    <p className="text-gray-400 text-sm mt-1">支援 JPG, PNG, PDF</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button 
                onClick={() => setStep(1)}
                className="w-1/3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-4 rounded-lg transition-all"
              >
                返回
              </button>
              <button 
                onClick={calculateQuote}
                className="w-2/3 bg-black hover:bg-gray-800 text-white font-bold py-4 rounded-lg text-xl transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <Calculator size={20} />
                開始計算與生成
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="text-center animate-in zoom-in duration-500">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
              <Check size={40} />
            </div>
            
            <h3 className="text-3xl font-bold text-gray-900 mb-2">需求已確認！</h3>
            <p className="text-gray-500 mb-8">根據您的 {area} 呎單位與選擇風格，初步預估：</p>

            <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-200">
              <p className="text-gray-500 text-sm uppercase tracking-widest mb-2">ESTIMATED BUDGET</p>
              <p className="text-4xl md:text-5xl font-bold text-yellow-600">
                ${quote.min.toLocaleString()} - ${quote.max.toLocaleString()}
              </p>
              <p className="text-xs text-gray-400 mt-2">*此報價僅供參考，實際費用需視現場情況而定</p>
            </div>

            <div className="bg-black text-white rounded-xl p-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-yellow-500 animate-pulse"></div>
              <h4 className="text-xl font-bold mb-4 text-yellow-400">🎁 免費領取您的 AI 設計效果圖</h4>
              <p className="text-gray-300 mb-6">
                我們的設計師已收到您的需求。請掃描下方 QR Code 加微信，<br/>
                發送關鍵字 <span className="text-white font-bold bg-yellow-600 px-2 py-0.5 rounded text-sm">AI設計</span>，
                我們將在 24 小時內發送 3 張專屬效果圖給您！
              </p>
              
              <div className="bg-white p-2 rounded-lg inline-block w-48 h-48 relative mb-4">
                <Image 
                  src="/images/wechat-qr.jpg" 
                  alt="WeChat QR Code"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-sm text-gray-400">WeChat ID: Chi Pang</p>
            </div>

            <button 
              onClick={() => { setStep(1); setArea(''); setStyle(''); }}
              className="mt-8 text-gray-500 hover:text-black underline text-sm"
            >
              重新計算
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

