import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-slate-300 py-10 mt-16">
      <div className="container mx-auto px-6 text-center">
        <p className="text-xl font-bold text-white mb-3">彰化基督教醫院 腎臟科</p>
        <p className="text-base text-slate-400 mb-6">Changhua Christian Hospital - Division of Nephrology</p>
        <div className="text-sm text-slate-500 border-t border-slate-700 pt-6 mt-6 max-w-2xl mx-auto">
          <p>© {new Date().getFullYear()} All Rights Reserved.</p>
          <p className="mt-2 text-base">本網站內容僅供醫療專業人員參考及一般衛教使用，不應視為醫療診斷建議。</p>
        </div>
      </div>
    </footer>
  );
};