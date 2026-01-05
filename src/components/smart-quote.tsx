import { useState, useRef, useEffect } from 'react';
import { Calculator, ArrowRight, Check, Sparkles, Box, X } from 'lucide-react';
import { motion, useMotionTemplate, useMotionValue, animate, AnimatePresence } from 'framer-motion';

// Animated Number Component
function Counter({ from, to }: { from: number; to: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const controls = animate(from, to, {
      duration: 1,
      onUpdate(value) {
        node.textContent = Math.round(value).toLocaleString();
      },
    });

    return () => controls.stop();
  }, [from, to]);

  return <span ref={nodeRef} />;
}

// Spotlight Card Component
function SpotlightCard({ children, className = "", onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`group relative border border-white/10 bg-white/5 overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onClick={onClick}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(234, 179, 8, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      {children}
    </div>
  );
}

export default function SmartQuote() {
  const [area, setArea] = useState('');
  const [type, setType] = useState('residential');
  const [style, setStyle] = useState('modern');
  const [result, setResult] = useState<{min: number, max: number} | null>(null);
  const [show3D, setShow3D] = useState<string | null>(null);

  const styles = [
    { id: 'modern', name: '現代簡約', color: 'bg-gray-200', factor: 1.0, scene: 'https://marble.worldlabs.ai/embed/10deb076-ef86-470b-817e-ea4039dee4f6' },
    { id: 'luxury', name: '現代輕奢', color: 'bg-yellow-600', factor: 1.2, scene: 'https://marble.worldlabs.ai/embed/10deb076-ef86-470b-817e-ea4039dee4f6' },
    { id: 'nordic', name: '北歐溫馨', color: 'bg-orange-100', factor: 0.95, scene: 'https://marble.worldlabs.ai/embed/5b26a55b-e8d2-4faf-9c59-ea90a7cda7a0' },
    { id: 'industrial', name: '工業風格', color: 'bg-gray-600', factor: 1.1, scene: 'https://marble.worldlabs.ai/embed/8f6ac7ef-5744-483c-bb47-e79de423fe73' },
    { id: 'wabi', name: '日式侘寂', color: 'bg-stone-300', factor: 1.15, scene: 'https://marble.worldlabs.ai/embed/76fcdf96-8a9a-4cd5-b0e6-e99bbc5d0084' },
    { id: 'american', name: '美式古典', color: 'bg-blue-900', factor: 1.25, scene: null },
    { id: 'chinese', name: '新中式', color: 'bg-red-900', factor: 1.2, scene: null },
    { id: 'french', name: '法式田園', color: 'bg-green-100', factor: 1.15, scene: null },
  ];

  const calculate = () => {
    const size = parseFloat(area);
    if (!size || size <= 0) {
      alert('請輸入有效的實用面積');
      return;
    }

    let baseMin = 700;
    let baseMax = 1000;

    if (type === 'commercial') {
      baseMin = 800;
      baseMax = 1200;
    }

    const selectedStyle = styles.find(s => s.id === style);
    const factor = selectedStyle ? selectedStyle.factor : 1.0;

    const totalMin = Math.round(size * baseMin * factor / 1000) * 1000;
    const totalMax = Math.round(size * baseMax * factor / 1000) * 1000;

    setResult({ min: totalMin, max: totalMax });
  };

  return (
    <>
      <div className="relative max-w-6xl mx-auto bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden shadow-2xl z-20">
        {/* Background Gradient */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black via-neutral-900 to-black opacity-90 -z-10"></div>
        
        <div className="p-8 md:p-12 relative z-10">
          
          <div className="text-center mb-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-yellow-500 text-sm font-medium mb-4"
            >
              <Sparkles size={14} /> AI-Powered Estimation
            </motion.div>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              免費裝修預算估價
            </h3>
            <p className="text-gray-400 text-lg font-light">
              融合大數據分析，30 秒為您精算專屬方案
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Input Area */}
            <div className="lg:col-span-4 space-y-8">
              <div className="space-y-6">
                <div className="group">
                  <label className="block text-gray-400 text-xs uppercase tracking-widest mb-3">實用面積 (平方呎)</label>
                  <div className="relative">
                    <input 
                      type="number" 
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                      placeholder="500"
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white text-xl focus:outline-none focus:border-yellow-500/50 focus:bg-white/10 transition-all placeholder:text-gray-600"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm font-medium">sq.ft</span>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 text-xs uppercase tracking-widest mb-3">單位類型</label>
                  <div className="grid grid-cols-2 gap-3">
                    {['residential', 'commercial'].map((t) => (
                      <button 
                        key={t}
                        onClick={() => setType(t)}
                        className={`p-4 rounded-xl border text-sm font-bold transition-all relative overflow-hidden ${type === t ? 'border-yellow-500/50 text-yellow-500 bg-yellow-500/10' : 'border-white/5 text-gray-400 bg-white/5 hover:bg-white/10'}`}
                      >
                        {t === 'residential' ? '住宅單位' : '商業店舖'}
                        {type === t && <motion.div layoutId="activeType" className="absolute inset-0 border-2 border-yellow-500/50 rounded-xl" />}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Result Display */}
              <div className={`relative overflow-hidden p-8 rounded-2xl border transition-all duration-500 ${result ? 'bg-gradient-to-br from-yellow-500/20 to-yellow-600/5 border-yellow-500/30' : 'bg-white/5 border-white/5'}`}>
                {!result ? (
                  <div className="text-center text-gray-500 py-8">
                    <Calculator className="w-12 h-12 mx-auto mb-4 opacity-20" />
                    <p className="font-light">輸入資料以獲取報價</p>
                  </div>
                ) : (
                  <div className="text-center">
                    <p className="text-xs uppercase tracking-widest mb-2 text-yellow-500/80">Estimated Budget</p>
                    <div className="text-4xl font-bold text-white mb-1 tracking-tight">
                      <span className="text-sm text-gray-400 mr-1 font-normal">MOP</span>
                      <Counter from={0} to={result.min} />
                    </div>
                    <div className="text-xs text-gray-500 my-1">-</div>
                    <div className="text-3xl font-bold text-white/60 mb-6 tracking-tight">
                      <span className="text-sm text-gray-500 mr-1 font-normal">MOP</span>
                      <Counter from={0} to={result.max} />
                    </div>
                    <a 
                      href="#contact" 
                      className="block w-full bg-white text-black py-4 rounded-xl font-bold text-sm hover:bg-gray-200 transition-transform active:scale-95 shadow-lg shadow-white/5"
                    >
                      預約上門量尺
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Style Selection Grid */}
            <div className="lg:col-span-8">
              <label className="block text-gray-400 text-xs uppercase tracking-widest mb-6 flex justify-between items-center">
                選擇設計風格
                <span className="text-[10px] bg-white/10 px-2 py-1 rounded text-gray-400">點擊卡片預覽風格</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {styles.map((s) => (
                  <SpotlightCard 
                    key={s.id}
                    onClick={() => { setStyle(s.id); if(area) calculate(); }} 
                    className={`cursor-pointer rounded-xl aspect-[4/3] flex flex-col items-center justify-center p-4 text-center transition-all duration-300 ${style === s.id ? 'ring-1 ring-yellow-500 bg-white/10' : 'hover:bg-white/10'}`}
                  >
                    <div className={`w-12 h-12 rounded-full mb-4 ${s.color} shadow-lg transform transition-transform group-hover:scale-110 duration-500 relative`}>
                      {/* 3D Icon Badge */}
                      {s.scene && (
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-black flex items-center justify-center animate-pulse">
                          <Box size={8} className="text-white" />
                        </div>
                      )}
                    </div>
                    <span className={`text-sm font-medium transition-colors ${style === s.id ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>
                      {s.name}
                    </span>
                    
                    {style === s.id && (
                      <div className="absolute top-3 right-3 flex flex-col gap-2">
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="text-yellow-500"
                        >
                          <Check size={16} />
                        </motion.div>
                      </div>
                    )}

                    {/* 3D Preview Button (Only show on active or hover) */}
                    {s.scene && (
                      <div className={`absolute bottom-0 left-0 w-full p-2 transition-opacity duration-300 ${style === s.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                        <button
                          onClick={(e) => { e.stopPropagation(); setShow3D(s.scene); }}
                          className="w-full bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-bold py-1.5 rounded shadow-lg flex items-center justify-center gap-1"
                        >
                          <Box size={10} /> 3D 預覽
                        </button>
                      </div>
                    )}
                  </SpotlightCard>
                ))}
              </div>
              <button 
                onClick={calculate}
                className="w-full mt-8 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold py-4 rounded-xl text-lg transition-all lg:hidden"
              >
                更新報價
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* 3D Modal */}
      <AnimatePresence>
        {show3D && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setShow3D(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl h-[80vh] bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setShow3D(null)}
                className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-md transition-colors"
              >
                <X size={24} />
              </button>
              <iframe 
                src={show3D} 
                className="w-full h-full" 
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
