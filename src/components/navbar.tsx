'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '/', label: '首頁' },
    { href: '#services', label: '服務項目' },
    { href: '#contact', label: '聯絡我們' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white h-24 flex items-center border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4">
            <div className="relative w-16 h-16">
              <Image 
                src="/images/logo.jpg" 
                alt="Kingi Construction Logo" 
                fill
                className="object-contain"
                priority
                quality={100}
              />
            </div>
            <div className="flex flex-col justify-center h-full">
              <span className="text-2xl font-bold tracking-wider text-gray-900 leading-none">
                建志建築工程有限公司
              </span>
              <span className="text-xs text-gray-500 tracking-widest mt-1">
                KIN GI CONSTRUCTION ENGINEERING COMPANY LIMITED
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center h-full space-x-10">
            {[
              { href: '/', label: '首頁', sub: 'HOME' },
              { href: '#services', label: '服務', sub: 'SERVICES' },
              { href: '#projects', label: '案例', sub: 'PROJECTS' },
              { href: '#contact', label: '聯繫我們', sub: 'CONTACT' },
            ].map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className="group flex flex-col items-center justify-center h-full relative px-2"
              >
                <span className="text-gray-900 font-medium text-lg group-hover:text-yellow-600 transition-colors">
                  {link.label}
                </span>
                <span className="text-[10px] text-gray-400 tracking-wider uppercase group-hover:text-yellow-600 transition-colors mt-0.5">
                  {link.sub}
                </span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gray-900 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-0 right-0 bg-white border-t border-gray-100 shadow-xl lg:hidden overflow-hidden"
          >
            <div className="px-6 py-8 space-y-6 flex flex-col">
              {[
                { href: '/', label: '首頁', sub: 'HOME' },
                { href: '#services', label: '服務', sub: 'SERVICES' },
                { href: '#projects', label: '案例', sub: 'PROJECTS' },
                { href: '#contact', label: '聯繫我們', sub: 'CONTACT' },
              ].map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className="group flex items-center justify-between border-b border-gray-50 pb-4"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-xl text-gray-900 font-bold group-hover:text-yellow-600 transition-colors">
                    {link.label}
                  </span>
                  <span className="text-xs text-gray-400 tracking-widest uppercase group-hover:text-yellow-600 transition-colors">
                    {link.sub}
                  </span>
                </Link>
              ))}
              <a 
                href="#contact"
                className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-6 rounded-lg text-center mt-4 shadow-md transition-all active:scale-95"
                onClick={() => setIsOpen(false)}
              >
                立即諮詢
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

