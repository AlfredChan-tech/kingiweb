'use client';

import { useState, useRef } from 'react';
import { Upload, Wand2, RefreshCw, Download } from 'lucide-react';
import Image from 'next/image';

// Simple Before/After Slider Component
const BeforeAfterSlider = ({ beforeImage, afterImage }: { beforeImage: string, afterImage: string }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const { left, width } = containerRef.current.getBoundingClientRect();
    const pageX = 'touches' in event ? event.touches[0].pageX : event.pageX;
    const position = ((pageX - left) / width) * 100;
    
    setSliderPosition(Math.min(100, Math.max(0, position)));
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-lg cursor-col-resize select-none group"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* After Image (Base) */}
      <Image src={afterImage} alt="After Design" fill className="object-cover" />
      
      {/* Before Image (Overlay) */}
      <div 
        className="absolute top-0 left-0 bottom-0 w-full h-full overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <Image src={beforeImage} alt="Original Room" fill className="object-cover" />
      </div>

      {/* Slider Line */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize shadow-[0_0_10px_rgba(0,0,0,0.5)]"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
          <div className="flex gap-0.5">
            <div className="w-0.5 h-3 bg-gray-400"></div>
            <div className="w-0.5 h-3 bg-gray-400"></div>
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded backdrop-blur-sm text-sm font-bold">原況</div>
      <div className="absolute top-4 right-4 bg-yellow-500/80 text-black px-3 py-1 rounded backdrop-blur-sm text-sm font-bold">AI 設計演示</div>
    </div>
  );
};

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export default function AIDesigner() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [style, setStyle] = useState('modern luxury');
  const [status, setStatus] = useState('');

  // Demo Result Image (Using a high-quality image from assets)
  // In a real scenario, this would be the AI generated output.
  // For demo, we use a nice interior shot.
  const DEMO_RESULT = '/images/hero-bg.png'; // Force update cache bust: v2 

  const styles = [
    { id: 'modern luxury', name: '現代輕奢', desc: 'Modern Luxury, marble, gold accents' },
    { id: 'scandinavian', name: '北歐極簡', desc: 'Scandinavian style, minimalist, bright, wood textures' },
    { id: 'industrial', name: '工業風格', desc: 'Industrial loft style, exposed brick, concrete, metal' },
    { id: 'japanese wabi-sabi', name: '日式寂侘', desc: 'Japanese Wabi-sabi, zen, nature materials, beige tones' },
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setResult(null); 
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const generateDesign = async () => {
    if (!preview) return;

    setLoading(true);
    setStatus('正在連接 AI 運算中心...');
    
    // Simulate AI Processing Steps
    try {
      await sleep(1500);
      setStatus('AI 正在識別牆體結構...');
      
      await sleep(1500);
      setStatus('正在分析空間光影...');
      
      await sleep(1500);
      setStatus(`正在套用${styles.find(s => s.id === style)?.name}風格材質...`);
      
      await sleep(1500);
      setStatus('正在進行 8K 渲染...');
      
      await sleep(1000);
      
      // Success! Show the demo result
      setResult(DEMO_RESULT);

    } catch (error) {
      console.error(error);
      alert('系統繁忙，請稍後再試');
    } finally {
      setLoading(false);
      setStatus('');
    }
  };

  return (
    <div className="max-w-5xl mx-auto bg-neutral-900 rounded-xl border border-white/10 overflow-hidden">
      <div className="p-8 border-b border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h3 className="text-2xl font-bold text-white flex items-center gap-2">
            <Wand2 className="text-yellow-500" /> AI 室內設計師
          </h3>
          <p className="text-gray-400 text-sm mt-1">上傳現況照片，一鍵預覽頂級裝修效果</p>
        </div>
      </div>

      <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Controls */}
        <div className="space-y-8">
          
          {/* Step 1: Upload */}
          <div>
            <label className="block text-yellow-500 font-bold mb-3 uppercase text-xs tracking-wider">Step 1: 上傳空間照片</label>
            <div className="border-2 border-dashed border-white/20 rounded-lg p-6 hover:bg-white/5 transition-colors cursor-pointer relative group">
              <input 
                type="file" 
                onChange={handleFileChange} 
                accept="image/*" 
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="flex flex-col items-center text-center">
                {preview ? (
                  <div className="relative w-full h-32 rounded overflow-hidden mb-2">
                    <Image src={preview} alt="Preview" fill className="object-cover" />
                  </div>
                ) : (
                  <Upload className="w-10 h-10 text-gray-500 mb-2 group-hover:text-yellow-500 transition-colors" />
                )}
                <p className="text-gray-300 text-sm">{preview ? '點擊更換照片' : '點擊上傳或拖放照片'}</p>
              </div>
            </div>
          </div>

          {/* Step 2: Style */}
          <div>
            <label className="block text-yellow-500 font-bold mb-3 uppercase text-xs tracking-wider">Step 2: 選擇設計風格</label>
            <div className="grid grid-cols-2 gap-3">
              {styles.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setStyle(s.id)}
                  className={`p-3 rounded text-left border transition-all ${style === s.id ? 'border-yellow-500 bg-yellow-500/10 text-white' : 'border-white/10 text-gray-400 hover:border-white/30'}`}
                >
                  <div className="text-sm font-bold">{s.name}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Generate Button */}
          <button
            onClick={generateDesign}
            disabled={!preview || loading}
            className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-bold py-4 rounded-lg text-lg shadow-lg hover:shadow-yellow-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <RefreshCw className="animate-spin" /> 運算中...
              </>
            ) : (
              <>
                <Wand2 size={20} /> 立即生成效果圖
              </>
            )}
          </button>

        </div>

        {/* Right: Display Area */}
        <div className="lg:col-span-2 bg-black/50 rounded-lg border border-white/5 p-4 min-h-[400px] flex items-center justify-center relative">
          {!preview && !result && (
            <div className="text-center text-gray-600">
              <Wand2 className="w-16 h-16 mx-auto mb-4 opacity-20" />
              <p>請在左側上傳照片並選擇風格</p>
            </div>
          )}

          {preview && !result && !loading && (
            <div className="relative w-full h-full min-h-[400px]">
               <Image src={preview} alt="Original" fill className="object-contain" />
            </div>
          )}

          {loading && (
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-yellow-500/30 border-t-yellow-500 rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-yellow-500 animate-pulse text-lg font-medium">{status}</p>
              <p className="text-gray-500 text-sm mt-2">AI 正在為您繪製...</p>
            </div>
          )}

          {result && preview && (
            <div className="w-full animate-in fade-in duration-1000">
              <BeforeAfterSlider beforeImage={preview} afterImage={result} />
              
              <div className="mt-6 bg-gradient-to-r from-neutral-800 to-neutral-900 border border-yellow-500/30 p-6 rounded-lg text-center">
                <h4 className="text-yellow-500 font-bold text-lg mb-2">✨ 喜歡這個設計嗎？</h4>
                <p className="text-gray-300 mb-4 text-sm">
                  這只是演示效果。要獲取為您家量身定制的 AI 設計圖與報價，<br/>
                  請將您的戶型圖或照片發送給我們。
                </p>
                <a href="#contact" className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-3 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-lg">
                  立即加微信諮詢
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
