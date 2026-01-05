'use client';

import { motion } from 'framer-motion';
import { Briefcase, Award, Building2, HardHat } from 'lucide-react';

export default function TeamShowcase() {
  const projects = [
    {
      id: 1,
      title: "YOHO金銀島名勝世界酒店 GF G038商舖零售店設計連裝修",
      client: "紅地毯尚品",
      amount: "2,500,000.00",
      date: "23年8月",
      status: "已竣工"
    },
    {
      id: 2,
      title: "澳門商業大馬路89-7號南灣半島地下C座拉麵店設計連裝修",
      client: "淵野辺拉麵",
      amount: "500,000.00",
      date: "24年8月",
      status: "已竣工"
    },
    {
      id: 3,
      title: "澳門機場三個8*20米廣告版 設計連改建項目",
      client: "JCD",
      amount: "1,500,000.00",
      date: "25年9月",
      status: "預計竣工"
    },
    {
      id: 4,
      title: "澳門路環裝圍級樓宇設計入則連建造",
      client: "私人物業",
      amount: "7,000,000.00",
      date: "23年1月",
      status: "已竣工"
    },
    {
      id: 5,
      title: "世界貿易中心3樓「國際及專業考試中心」更改工程",
      client: "生產力暨科技轉移中心",
      amount: "3,200,000.00",
      date: "預計26年3月",
      status: "進行中"
    }
  ];

  const teamHighlights = [
    "威尼斯人東方翻新項目—外部工程及外立面",
    "澳門路環新監獄二期工程 (Obra do Novo Estabeliemento Prisional de Macau Fase 2)",
    "銀河地段3 (LOT3, 3C004 & 3C005) 地基及上部結構工程",
    "澳門主教山別墅工程",
    "澳門石排灣擎天匯工程項目",
    "澳門銀河娛樂集團多間酒店及賭場建造及裝修工程",
    "澳門仁伯爵綜合醫院擴建工程項目",
    "慕拉士公共房屋建造工程",
    "新城A區B5地段經濟房屋建造工程 - 顧問工作",
    "多個私人M級樓宇的拆卸與建造項目 (涉及 ALCADA DA BARRA 等)"
  ];

  const qualifications = [
    "澳門注冊土木工程師",
    "澳門注冊安全主任資格",
    "澳門注冊安全督導資格",
    "工料測量專業文憑",
    "樓宇驗收及結構檢測儀器證書"
  ];

  return (
    <div className="space-y-24">
      {/* 1. Core Competencies */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 text-yellow-500 font-bold tracking-widest uppercase text-sm">
            <Building2 size={18} />
            <span>Core Competencies</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-black">核心能力與服務範圍</h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            建志建築工程有限公司是一間在澳門擁有豐富經驗的專業承建商。我們致力於提供全面的工程解決方案，專長於高品質的設計連裝修及建造工程。
          </p>
          <ul className="space-y-4 pt-4">
            {[
              { title: "設計與裝修一體化 (Design & Build)", desc: "從概念設計到施工的一站式服務，確保高效執行。" },
              { title: "商業與零售空間改造", desc: "如YOHO金銀島名勝世界酒店等高端項目經驗。" },
              { title: "樓宇建造與改建", desc: "承接從路環級樓宇設計入則到機場廣告版改建等規模工程。" },
              { title: "專業功能場所裝修", desc: "如世貿中心考試中心更改工程等特殊規格項目。" }
            ].map((item, idx) => (
              <li key={idx} className="flex gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-500/20 text-yellow-600 flex items-center justify-center text-sm font-bold mt-1">{idx + 1}</span>
                <div>
                  <h4 className="font-bold text-gray-900">{item.title}</h4>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-100 shadow-sm">
          <h4 className="font-bold text-xl mb-6 flex items-center gap-2">
            <Briefcase className="text-yellow-500" /> 近期工程業績摘要
          </h4>
          <div className="space-y-4">
            {projects.map((p) => (
              <div key={p.id} className="bg-white p-4 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start gap-4 mb-2">
                  <h5 className="font-bold text-gray-800 text-sm leading-snug">{p.title}</h5>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold whitespace-nowrap ${p.status === '進行中' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                    {p.status}
                  </span>
                </div>
                <div className="flex justify-end text-xs text-gray-400 mt-2 border-t border-gray-50 pt-2">
                  <p>日期: {p.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Team Expertise (Anonymized) */}
      <div>
        <div className="text-center mb-16">
          <span className="text-yellow-600 tracking-[0.2em] text-sm font-bold uppercase mb-2 block">Professional Team</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">核心團隊成員專業經驗</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mt-6 mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            我們的工程團隊由具備紮實專業背景和豐富實戰經驗的成員組成，曾在多個澳門大型與重要工程中擔任關鍵角色。
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left: Qualifications */}
            <div className="lg:col-span-4 bg-neutral-900 text-white p-8 md:p-12 flex flex-col justify-center">
              <div className="mb-8">
                <Award className="w-12 h-12 text-yellow-500 mb-4" />
                <h3 className="text-2xl font-bold mb-2">專業資格認證</h3>
                <p className="text-gray-400 text-sm">團隊成員擁有以下多項專業資格：</p>
              </div>
              <ul className="space-y-4">
                {qualifications.map((q, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                    <span className="font-medium text-lg">{q}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Project Experience */}
            <div className="lg:col-span-8 p-8 md:p-12 bg-white">
              <div className="flex items-center gap-3 mb-8">
                <HardHat className="w-8 h-8 text-yellow-500" />
                <h3 className="text-2xl font-bold text-gray-900">團隊核心成員曾參與項目經驗</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {teamHighlights.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-yellow-500 font-bold text-sm mt-1">0{idx + 1}</span>
                    <p className="text-gray-700 text-sm font-medium leading-relaxed border-b border-gray-100 pb-2 w-full">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
