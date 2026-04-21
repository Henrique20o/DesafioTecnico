import React from 'react';
import { activitiesData } from '../data/activities';
import ActivityCard from './ActivityCard';

const Activities = () => {
  return (
    <section className="bg-surface-container-low py-32 px-8 overflow-hidden" id="activities">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-headline font-black text-white uppercase tracking-tighter">
              Disciplinas de Elite
            </h2>
            <div className="h-2 w-24 bg-primary mt-4"></div>
          </div>
          <p className="text-on-surface-variant max-w-md text-lg italic">
            De esportes de quadra de alta velocidade à recuperação muscular cirúrgica, nós fornecemos o ambiente. Você fornece a intensidade.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activitiesData.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
