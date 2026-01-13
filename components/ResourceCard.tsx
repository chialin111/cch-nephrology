import React from 'react';
import { ExternalLink, ChevronRight, Clock } from 'lucide-react';
import { ResourceItem, AudienceType } from '../types';

interface ResourceCardProps {
  item: ResourceItem;
  audienceType?: AudienceType; // Optional prop to determine color scheme
}

export const ResourceCard: React.FC<ResourceCardProps> = ({ item, audienceType }) => {
  const hasUrl = !!item.url;
  
  // Define colors based on audience context, default to blue/indigo if undefined
  const isMedical = audienceType === AudienceType.MEDICAL_STAFF;
  
  // Warm update: Medical stays Indigo, Patient becomes Orange (Warmer)
  const accentColorClass = isMedical ? 'bg-indigo-600' : 'bg-orange-500';
  
  // Tag styling
  let tagBgClass = '';
  if (item.tag === '重要') {
    tagBgClass = 'bg-red-50 text-red-700 border-red-200';
  } else if (isMedical) {
    tagBgClass = 'bg-indigo-50 text-indigo-800 border-indigo-200';
  } else {
    tagBgClass = 'bg-orange-50 text-orange-800 border-orange-200';
  }

  const hoverBorderClass = isMedical ? 'hover:border-indigo-300' : 'hover:border-orange-300';
  const iconColorClass = isMedical ? 'group-hover:text-indigo-600' : 'group-hover:text-orange-600';
  const linkTextClass = isMedical ? 'text-indigo-700' : 'text-orange-700';

  const CardContent = () => (
    <div className={`
      relative group flex flex-col h-full bg-white rounded-2xl shadow-[0_2px_8px_rgb(0,0,0,0.04)] border border-stone-200 
      transition-all duration-300 overflow-hidden
      ${hasUrl 
        ? `cursor-pointer hover:shadow-[0_8px_24px_rgb(0,0,0,0.08)] hover:-translate-y-1 ${hoverBorderClass}` 
        : 'bg-stone-50/80 cursor-default'} 
    `}>
      
      {/* Left Accent Bar */}
      <div className={`absolute left-0 top-0 bottom-0 w-2 ${hasUrl ? accentColorClass : 'bg-stone-300/50'}`}></div>

      <div className="p-7 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          {item.tag ? (
            <span className={`
              px-3 py-1 text-sm font-bold rounded-full border
              ${tagBgClass}
            `}>
              {item.tag}
            </span>
          ) : <div></div>} {/* Empty div to maintain spacing if no tag */}
          
          <div className={`text-stone-400 transition-colors duration-300 ${hasUrl ? iconColorClass : ''}`}>
            {hasUrl ? (
              <ExternalLink size={24} />
            ) : (
              // Friendly "Coming Soon" Badge
              <div className="flex items-center px-3 py-1 rounded-full bg-stone-200/50 text-stone-500">
                <Clock size={16} className="mr-1.5" />
                <span className="text-sm font-medium">即將上線</span>
              </div>
            )}
          </div>
        </div>
        
        <h3 className={`text-2xl font-bold mb-3 leading-snug ${hasUrl ? 'text-slate-900 group-hover:text-black' : 'text-slate-500'}`}>
          {item.title}
        </h3>
        
        <p className="text-lg text-slate-600 mb-6 flex-grow leading-relaxed font-medium">
          {item.description}
        </p>

        {hasUrl && (
          <div className={`flex items-center text-lg font-bold mt-auto opacity-0 transform translate-x-[-10px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 ${linkTextClass}`}>
            開啟工具 <ChevronRight size={20} className="ml-1" />
          </div>
        )}
      </div>
    </div>
  );

  if (hasUrl) {
    return (
      <a 
        href={item.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block h-full no-underline outline-none focus:ring-4 focus:ring-offset-2 focus:ring-blue-400 rounded-2xl"
      >
        <CardContent />
      </a>
    );
  }

  return <CardContent />;
};