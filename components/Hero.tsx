import React from 'react';
import { Activity } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden shadow-xl">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
        {/* Cool Shape */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-500 blur-3xl mix-blend-screen"></div>
        {/* Warm Shape added for warmth */}
        <div className="absolute top-1/2 -left-24 w-80 h-80 rounded-full bg-rose-500 blur-3xl mix-blend-screen opacity-60"></div>
        {/* Connecting Shape */}
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-indigo-500 blur-3xl mix-blend-screen"></div>
      </div>

      <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="flex-1 text-center md:text-left space-y-8">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-blue-50 text-base font-medium backdrop-blur-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400 mr-2.5 animate-pulse"></span>
              彰化基督教醫院
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              腎臟科
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-100 via-rose-100 to-orange-100 block mt-3">
                醫療資源整合入口網
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-50/90 max-w-3xl leading-relaxed font-light">
              整合醫護臨床評估工具與全方位病患衛教資訊，
              <br className="hidden md:block"/>
              提供專業、即時且溫暖的醫療照護資源。
            </p>
          </div>

          <div className="hidden md:flex justify-center items-center flex-shrink-0">
             <div className="w-36 h-36 md:w-48 md:h-48 bg-white/10 rounded-3xl backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl transform rotate-3 hover:rotate-6 transition-transform duration-500">
                <Activity className="text-white w-20 h-20 md:w-24 md:h-24 drop-shadow-lg" strokeWidth={1.5} />
             </div>
          </div>
        </div>
      </div>
      
      {/* Decorative clean curve to blend into stone background */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-stone-50 to-transparent"></div>
    </div>
  );
};