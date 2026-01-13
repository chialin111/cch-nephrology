import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { CategorySection } from './components/CategorySection';
import { Footer } from './components/Footer';
import { PORTAL_DATA } from './constants';
import { AudienceType } from './types';
import { Stethoscope, Users, LayoutGrid } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AudienceType | 'ALL'>('ALL');

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 font-sans">
      <Hero />

      <main className="flex-grow container mx-auto px-4 md:px-6 -mt-10 relative z-20">
        
        {/* Navigation Tabs (Floating Pill Design) */}
        <div className="sticky top-6 z-30 mb-12 flex justify-center">
          <div className="bg-white/95 backdrop-blur-xl p-2 rounded-full shadow-lg border border-stone-200/60 inline-flex ring-1 ring-black/5">
            <button
              onClick={() => setActiveTab('ALL')}
              className={`
                px-8 py-3 rounded-full text-base md:text-lg font-semibold transition-all duration-300 flex items-center
                ${activeTab === 'ALL'
                  ? 'bg-slate-800 text-white shadow-md transform scale-105'
                  : 'text-slate-500 hover:bg-stone-100 hover:text-slate-700'}
              `}
            >
              <LayoutGrid size={20} className="mr-2" />
              全部資源
            </button>
            <button
              onClick={() => setActiveTab(AudienceType.PATIENT_EDUCATION)}
              className={`
                px-8 py-3 rounded-full text-base md:text-lg font-semibold transition-all duration-300 flex items-center
                ${activeTab === AudienceType.PATIENT_EDUCATION
                  ? 'bg-orange-500 text-white shadow-md shadow-orange-200 transform scale-105'
                  : 'text-stone-500 hover:bg-orange-50 hover:text-orange-600'}
              `}
            >
              <Users size={20} className="mr-2" />
              衛教專區
            </button>
            <button
              onClick={() => setActiveTab(AudienceType.MEDICAL_STAFF)}
              className={`
                px-8 py-3 rounded-full text-base md:text-lg font-semibold transition-all duration-300 flex items-center
                ${activeTab === AudienceType.MEDICAL_STAFF
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200 transform scale-105'
                  : 'text-stone-500 hover:bg-indigo-50 hover:text-indigo-600'}
              `}
            >
              <Stethoscope size={20} className="mr-2" />
              醫護專區
            </button>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-12 pb-24">
          {PORTAL_DATA.map((section) => {
            // Filter Logic
            if (activeTab !== 'ALL' && section.audience !== activeTab) return null;

            const isMedical = section.audience === AudienceType.MEDICAL_STAFF;
            
            // Dynamic Styles based on section type
            // Medical: Indigo (Professional), Patient: Orange (Warm/Friendly)
            const containerBorder = isMedical ? 'border-indigo-100' : 'border-orange-100';
            const headerBg = isMedical ? 'bg-indigo-50/80' : 'bg-orange-50/80';
            const titleColor = isMedical ? 'text-indigo-900' : 'text-orange-900';
            const descColor = isMedical ? 'text-indigo-700' : 'text-orange-800'; // Darker for better contrast
            const badgeClass = isMedical ? 'bg-indigo-100 text-indigo-700 border-indigo-200' : 'bg-orange-100 text-orange-700 border-orange-200';

            return (
              <section 
                key={section.id} 
                className={`
                  bg-white rounded-3xl shadow-sm border ${containerBorder} overflow-hidden
                  transition-all duration-500 ease-in-out hover:shadow-md
                `}
              >
                {/* Section Header */}
                <div className={`
                  px-8 md:px-10 py-8 border-b ${containerBorder} ${headerBg} backdrop-blur-sm
                `}>
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <div className="flex items-center gap-4 mb-2">
                        <h2 className={`text-3xl md:text-4xl font-bold ${titleColor}`}>
                          {section.title}
                        </h2>
                        <span className={`
                          px-4 py-1.5 text-sm font-bold uppercase tracking-wider rounded-full border
                          ${badgeClass}
                        `}>
                          {isMedical ? 'Medical Staff' : 'Patient Education'}
                        </span>
                      </div>
                      <p className={`text-xl ${descColor} font-medium mt-2`}>
                        {section.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section Content */}
                <div className="p-6 md:p-10">
                  {section.categories.map((category) => (
                    <CategorySection 
                      key={category.id} 
                      category={category} 
                      audienceType={section.audience}
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;