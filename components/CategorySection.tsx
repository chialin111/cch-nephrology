import React from 'react';
import { Category, AudienceType } from '../types';
import { ResourceCard } from './ResourceCard';

interface CategorySectionProps {
  category: Category;
  audienceType: AudienceType; // Needed to pass down to cards for coloring
}

export const CategorySection: React.FC<CategorySectionProps> = ({ category, audienceType }) => {
  const Icon = category.icon;
  const isMedical = audienceType === AudienceType.MEDICAL_STAFF;
  
  // Warm update: Orange background for patient icons
  const iconBgClass = isMedical ? 'bg-indigo-100 text-indigo-700' : 'bg-orange-100 text-orange-600';

  return (
    <div className="mb-14 last:mb-0">
      <div className="flex items-center mb-8">
        <div className={`p-3 rounded-xl mr-5 ${iconBgClass}`}>
          <Icon size={32} strokeWidth={2} />
        </div>
        <h3 className="text-3xl font-bold text-slate-800 tracking-tight">
          {category.title}
        </h3>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {category.items.map((item) => (
          <ResourceCard key={item.id} item={item} audienceType={audienceType} />
        ))}
      </div>
    </div>
  );
};