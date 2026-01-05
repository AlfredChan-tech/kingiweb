'use client';

import { useEffect, useState } from 'react';
import { ExternalLink, Loader2 } from 'lucide-react';

interface Tender {
  date: string;
  title: string;
  link: string;
}

export default function TenderList() {
  const [activeTab, setActiveTab] = useState<'public' | 'inquiry'>('public');
  const [data, setData] = useState<{ public: Tender[], inquiry: Tender[] }>({ public: [], inquiry: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchTenders() {
      try {
        const res = await fetch('/api/tenders');
        const result = await res.json();
        
        if (result.success) {
          setData(result.data);
        } else {
          setError(true);
        }
      } catch (e) {
        console.error(e);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchTenders();
  }, []);

  const currentTenders = data[activeTab];

  return (
    <div className="bg-gray-900 rounded-lg p-8 text-white relative overflow-hidden min-h-[400px] flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-xl font-bold flex items-center gap-2">
          <span className="text-yellow-500">●</span> 公共工程資訊
        </h4>
        
        {/* Tabs */}
        <div className="flex bg-gray-800 rounded-lg p-1">
          <button
            onClick={() => setActiveTab('public')}
            className={`px-4 py-1.5 text-sm rounded-md transition-all ${activeTab === 'public' ? 'bg-yellow-500 text-black font-bold' : 'text-gray-400 hover:text-white'}`}
          >
            公開競投
          </button>
          <button
            onClick={() => setActiveTab('inquiry')}
            className={`px-4 py-1.5 text-sm rounded-md transition-all ${activeTab === 'inquiry' ? 'bg-yellow-500 text-black font-bold' : 'text-gray-400 hover:text-white'}`}
          >
            詢價招標
          </button>
        </div>
      </div>

      <div className="flex-grow">
        {loading ? (
          <div className="flex flex-col items-center justify-center h-full py-10 text-gray-500">
            <Loader2 className="w-8 h-8 animate-spin mb-2 text-yellow-500" />
            <p>正在同步 DSOP 最新資料...</p>
          </div>
        ) : error || currentTenders.length === 0 ? (
          <div className="text-center py-12 border border-dashed border-gray-700 rounded-lg">
            <p className="text-gray-400 mb-4">暫無最新資料或連線異常</p>
            <a 
              href={activeTab === 'public' ? 'https://www.dsop.gov.mo/tender/1/' : 'https://www.dsop.gov.mo/tender/2/'}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-400 underline text-sm"
            >
              前往 DSOP 官網查看 <ExternalLink size={14} />
            </a>
          </div>
        ) : (
          <div className="space-y-3 animate-in fade-in duration-300">
            {currentTenders.map((tender, idx) => (
              <a 
                key={idx} 
                href={tender.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-white/5 rounded hover:bg-white/10 transition-all border border-transparent hover:border-yellow-500/30 group"
              >
                <div className="flex justify-between items-start gap-4">
                  <span className="text-sm text-gray-200 group-hover:text-white font-medium line-clamp-2 leading-relaxed">
                    {tender.title}
                  </span>
                  {tender.date && tender.date !== '最新' && (
                    <span className="text-xs text-yellow-500 whitespace-nowrap mt-0.5 bg-yellow-500/10 px-2 py-0.5 rounded">
                      {tender.date}
                    </span>
                  )}
                </div>
              </a>
            ))}
          </div>
        )}
      </div>

      <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center text-xs text-gray-500">
        <span>資料來源：公共建設局 (DSOP)</span>
        <a 
          href="https://www.dsop.gov.mo/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          查看全部
        </a>
      </div>
    </div>
  );
}
