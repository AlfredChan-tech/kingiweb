'use client';

import Image from 'next/image';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, MapPin, Phone, ChevronDown, Mail } from 'lucide-react';

import TenderList from '@/components/tender-list';
import TeamShowcase from '@/components/team-showcase';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-yellow-500 selection:text-black">
      <Navbar />

      {/* Hero Section - Trickle Style Revamp */}
      <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center bg-black">
        {/* Background Image with Fade In Animation */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/images/hero-bg.png"
            alt="Luxury Interior Design"
            fill
            className="object-cover opacity-60"
            priority
          />
          {/* Enhanced Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side: Title & Slogan */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6"
            >
              <div className="space-y-2">
                 <h2 className="text-yellow-500 text-2xl md:text-3xl font-light tracking-[0.2em]">
                  始於藍圖 · 臻於至善
                 </h2>
                 <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-wide">
                  BUILT IN <br/>
                  <span className="text-white">MACAU</span>
                 </h1>
              </div>
              
              <div className="h-1 w-24 bg-yellow-500"></div>

              <div className="text-2xl md:text-3xl font-light text-white/90 space-y-2 leading-relaxed tracking-widest">
                <p>優質標準 · 中國速度</p>
                <p>服務周到</p>
              </div>

              <p className="text-gray-300 font-light tracking-wider text-sm uppercase">
                Premium Standards · China Speed · Thoughtful Service
              </p>

              <div className="flex flex-wrap gap-4 pt-8">
                <a 
                  href="#services"
                  className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-10 text-lg transition-all hover:scale-105 shadow-lg shadow-yellow-500/20"
                >
                  服務項目
                  <span className="block text-xs font-normal opacity-80">Our Services</span>
                </a>
                <a 
                  href="#contact"
                  className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold py-4 px-10 text-lg transition-all backdrop-blur-md"
                >
                  聯絡諮詢
                  <span className="block text-xs font-normal opacity-60">Contact Us</span>
                </a>
              </div>
            </motion.div>

            {/* Right Side: Glassmorphism Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="hidden lg:block justify-self-end w-full max-w-lg"
            >
              <div className="bg-black/40 backdrop-blur-md border border-white/10 p-8 rounded-sm shadow-2xl">
                <h3 className="text-yellow-500 text-xl font-bold mb-6 border-l-4 border-yellow-500 pl-4">
                  公司簡介
                </h3>
                
                <div className="space-y-4 text-gray-200 leading-relaxed text-sm font-light text-justify">
                  <p>
                    建志建築工程有限公司是澳門土地工務局註冊建築商(註冊編號7227/2025)。
                  </p>
                  <p>
                    提供一站式裝修建築服務，由「諮詢→報價→度尺→設計→報建→施工→驗收→保養」全流程服務。
                  </p>
                  <p>
                    專精於各大小裝修、舊樓翻新、舖位入則裝修及各政府工程，擁有澳門工務局認可資質及建築廢料處理認證。
                  </p>
                  <p className="pt-2 border-t border-white/10 mt-4">
                    憑藉港澳標準工藝 + 珠海供應鏈優勢，較市場價低20%且工期快15%，多年專業經驗團隊已服務澳門超過10年，結構工程質量5年保固。
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown size={20} />
        </motion.div>
      </section>

      {/* Services Section - Revamped Alternating Layout */}
      <section id="services" className="py-24 bg-neutral-900 relative overflow-hidden">
        {/* Decorative Background Text */}
        <div className="absolute top-20 left-0 text-neutral-800 text-[10rem] font-bold opacity-20 leading-none select-none pointer-events-none truncate w-full text-center">
          SERVICES
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <span className="text-yellow-500 tracking-[0.2em] text-sm font-bold uppercase mb-2 block">Our Expertise</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">專業服務範疇</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="space-y-24">
            
            {/* Service 1: Residential (Left Image, Right Text) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center group">
              <div className="relative h-[400px] w-full overflow-hidden rounded-sm">
                <Image
                  src="/images/service-residential.jpg"
                  alt="住宅全屋裝修"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                {/* Gold Border Effect */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 border-r-4 border-b-4 border-yellow-500/50 hidden lg:block"></div>
              </div>
              <div className="space-y-6 lg:pl-8">
                <div className="flex items-center gap-4">
                  <span className="text-5xl font-bold text-neutral-700/50">01</span>
                  <h3 className="text-3xl font-bold text-white">全屋裝修設計</h3>
                </div>
                <p className="text-yellow-500 tracking-widest uppercase text-sm">Residential Renovation</p>
                <p className="text-gray-400 leading-relaxed text-lg">
                  為您的家注入全新生命。從空間規劃、水電佈局到風格軟裝，我們提供一站式住宅翻新服務，打造舒適、實用且充滿美感的居住空間。
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>室內設計規劃</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>舊樓翻新改造</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>水電泥水工程</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>訂造傢俬安裝</li>
                </ul>
              </div>
            </div>

            {/* Service 2: Commercial (Right Image, Left Text) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center group">
              <div className="order-2 lg:order-1 space-y-6 lg:pr-8 text-right">
                <div className="flex items-center gap-4 justify-end">
                  <h3 className="text-3xl font-bold text-white">商業店舖施工</h3>
                  <span className="text-5xl font-bold text-neutral-700/50">02</span>
                </div>
                <p className="text-yellow-500 tracking-widest uppercase text-sm">Commercial Design & Build</p>
                <p className="text-gray-400 leading-relaxed text-lg">
                  助您打造引人注目的商業空間。無論是零售店面、餐廳還是辦公室，我們都具備豐富的施工經驗，確保工程精準高效，符合商業運營需求。
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300 justify-items-end">
                  <li className="flex items-center gap-2 flex-row-reverse"><span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>零售店舖裝修</li>
                  <li className="flex items-center gap-2 flex-row-reverse"><span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>寫字樓空間</li>
                  <li className="flex items-center gap-2 flex-row-reverse"><span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>招牌設計安裝</li>
                  <li className="flex items-center gap-2 flex-row-reverse"><span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>消防系統工程</li>
                </ul>
              </div>
              <div className="order-1 lg:order-2 relative h-[400px] w-full overflow-hidden rounded-sm">
                <Image
                  src="/images/service-commercial.jpg"
                  alt="商業店舖施工"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                {/* Gold Border Effect */}
                <div className="absolute -top-4 -left-4 w-32 h-32 border-l-4 border-t-4 border-yellow-500/50 hidden lg:block"></div>
              </div>
            </div>

            {/* Service 3: License (Left Image, Right Text) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center group">
              <div className="relative h-[400px] w-full overflow-hidden rounded-sm">
                <Image
                  src="/images/service-license.jpg"
                  alt="牌照申請服務"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                {/* Gold Border Effect */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 border-r-4 border-b-4 border-yellow-500/50 hidden lg:block"></div>
              </div>
              <div className="space-y-6 lg:pl-8">
                <div className="flex items-center gap-4">
                  <span className="text-5xl font-bold text-neutral-700/50">03</span>
                  <h3 className="text-3xl font-bold text-white">牌照申請與入則</h3>
                </div>
                <p className="text-yellow-500 tracking-widest uppercase text-sm">Licensing & Submission</p>
                <p className="text-gray-400 leading-relaxed text-lg">
                  解決繁瑣的行政手續。我們熟悉澳門政府各項工程審批流程，提供專業的圖則設計與入則服務，助您順利取得各類牌照。
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>飲食/外賣牌照</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>工程准照申請</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>土地工務局入則</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>專業則師代辦</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Government Projects & Qualifications Section */}
      <section id="projects" className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          
          {/* New Team Showcase Component */}
          <TeamShowcase />

          <div className="mt-24 pt-16 border-t border-gray-100">
            <div className="text-center mb-16">
              <span className="text-yellow-600 tracking-[0.2em] text-sm font-bold uppercase mb-2 block">Government Registered</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">政府註冊．信心保證</h2>
              <div className="w-20 h-1 bg-yellow-500 mx-auto mt-6 mb-8"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                本公司為澳門土地工務局註冊建築商 (編號 7227/2025)，多年來承接多項政府部門及大型機構工程，品質備受認可。
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
              {/* Left: Qualifications List */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-black border-l-4 border-yellow-500 pl-4">認可資質</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:border-yellow-500/30 transition-colors">
                    <h4 className="font-bold text-lg text-gray-900 mb-2">土地工務局 (DSSCU)</h4>
                    <p className="text-sm text-gray-500">註冊建築商資格<br/>編號: 7227/2025</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:border-yellow-500/30 transition-colors">
                    <h4 className="font-bold text-lg text-gray-900 mb-2">環境保護局 (DSPA)</h4>
                    <p className="text-sm text-gray-500">建築廢料處理認證<br/>合規環保施工</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:border-yellow-500/30 transition-colors">
                    <h4 className="font-bold text-lg text-gray-900 mb-2">公共建設局 (DSOP)</h4>
                    <p className="text-sm text-gray-500">公共工程承建商<br/>投標資格</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:border-yellow-500/30 transition-colors">
                    <h4 className="font-bold text-lg text-gray-900 mb-2">市政署 (IAM)</h4>
                    <p className="text-sm text-gray-500">市政工程承建商<br/>註冊供應商</p>
                  </div>
                </div>
              </div>

              {/* Right: Government Tender Info (Live Scraper) */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-black border-l-4 border-yellow-500 pl-4">公共工程資訊</h3>
                <TenderList />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-neutral-900 rounded-sm p-8 md:p-16 border-l-4 border-yellow-500 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              
              {/* Contact Info */}
              <div>
                <span className="text-yellow-500 tracking-widest uppercase text-sm font-bold mb-2 block">Get In Touch</span>
                <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">聯絡我們</h2>
                <p className="text-gray-400 mb-12 leading-relaxed">
                  無論是住宅翻新還是商業工程，歡迎隨時與我們聯繫。我們會盡快回覆您的查詢。
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 text-yellow-500 border border-white/10 rounded-full group-hover:bg-yellow-500 group-hover:text-black transition-colors">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">公司地址</h4>
                      <p className="text-gray-400">澳門南灣大馬路 517 號<br/>南通商業大廈 16 樓 A</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                     <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 text-yellow-500 border border-white/10 rounded-full group-hover:bg-yellow-500 group-hover:text-black transition-colors">
                      <span className="font-bold text-lg">W</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">微信諮詢</h4>
                      <p className="text-gray-400">WeChat ID: Chi Pang</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                     <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 text-yellow-500 border border-white/10 rounded-full group-hover:bg-yellow-500 group-hover:text-black transition-colors">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">電話聯絡</h4>
                      <p className="text-gray-400">+853 (請加微信聯繫)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                     <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 text-yellow-500 border border-white/10 rounded-full group-hover:bg-yellow-500 group-hover:text-black transition-colors">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">公司郵箱</h4>
                      <p className="text-gray-400">kingimacau@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* QR Code Display */}
              <div className="flex flex-col items-center justify-center bg-white p-8 shadow-2xl transform hover:-translate-y-2 transition-transform duration-500 max-w-sm mx-auto w-full">
                <h3 className="text-black font-bold text-2xl mb-2 tracking-wide">微信掃碼</h3>
                <p className="text-gray-400 text-sm mb-6 uppercase tracking-widest">Scan for Consultation</p>
                <div className="relative w-56 h-56 mb-6 border border-gray-100">
                  <Image 
                    src="/images/wechat-qr.jpg" 
                    alt="建志工程 WeChat QR Code"
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <p className="text-gray-500 text-center text-xs tracking-wide">
                  長按圖片識別 / 保存圖片 / 開啟 WeChat 掃一掃
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
      <div className="fixed bottom-2 right-2 text-[10px] text-gray-500 opacity-50 pointer-events-none z-50">
        v3.2 Deployed: {new Date().toLocaleString('zh-HK', { timeZone: 'Asia/Hong_Kong' })}
      </div>
    </main>
  );
}
