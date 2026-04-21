import React from 'react';

const ActivityCard = ({ activity }) => {
  const { title, description, image, badge, badgeType, isLarge } = activity;

  return (
    <div className={`group relative bg-surface-container-high rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-500 ${isLarge ? 'md:col-span-2' : ''} ${badgeType === 'primary' ? 'border border-primary/50 shadow-[0_0_15px_rgba(171,214,0,0.2)]' : ''}`}>
      <div className={`${isLarge ? 'h-80' : 'h-64'} relative overflow-hidden`}>
        <img 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
          src={image} 
        />
        
        {isLarge && (
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-high to-transparent"></div>
        )}

        {badge && badgeType === 'glass' && (
          <div className="absolute top-4 left-4 glass-panel px-3 py-1 rounded-full">
            <span className="text-primary text-xs font-bold font-label uppercase tracking-widest">{badge}</span>
          </div>
        )}
        
        {badge && badgeType === 'status' && (
          <div className="absolute bottom-4 right-4 bg-tertiary-container px-3 py-1 rounded-full flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-tertiary"></span>
            <span className="text-tertiary text-[10px] font-bold uppercase tracking-widest">{badge}</span>
          </div>
        )}

        {badge && badgeType === 'primary' && (
          <div className="absolute top-4 right-4">
            <span className="bg-primary text-on-primary text-[10px] font-black uppercase py-1 px-3 rounded-full tracking-tighter">{badge}</span>
          </div>
        )}

        {isLarge && (
          <div className="absolute bottom-6 left-6">
            <h3 className="text-3xl font-headline font-black text-white uppercase mb-2">{title}</h3>
            <p className="text-on-surface-variant max-w-sm">{description}</p>
          </div>
        )}
      </div>

      {!isLarge && (
        <div className="p-6">
          <h3 className="text-2xl font-headline font-bold text-white mb-2 uppercase">{title}</h3>
          <p className="text-on-surface-variant text-sm">{description}</p>
        </div>
      )}
    </div>
  );
};

export default ActivityCard;
