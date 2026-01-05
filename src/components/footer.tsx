import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-10 h-10 overflow-hidden rounded-full">
                <Image 
                  src="/images/logo.jpg" 
                  alt="Logo" 
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-xl font-bold text-white">建志工程</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              澳門全屋裝修、店鋪設計施工、牌照申請一條龍服務。
              專業團隊，政府註冊，信心保證。
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">聯絡我們</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                <span>澳門南灣大馬路 517 號南通商業大廈 16 樓 A</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <span>+853 (請聯絡我們)</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <span className="w-5 h-5 flex items-center justify-center text-yellow-500 font-bold">W</span>
                <span>WeChat: Chi Pang</span>
              </li>
            </ul>
          </div>

          {/* WeChat QR Removed */}

        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} 建志建築工程有限公司 Kingi Construction Engineering Company Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

