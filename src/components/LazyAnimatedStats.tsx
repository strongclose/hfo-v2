import React, { useEffect, useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface AnimatedStatProps {
  value: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  delay?: number;
}

function AnimatedStat({ value, label, icon: Icon, color, delay = 0 }: AnimatedStatProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className="group relative h-full">
      <div className={`hf-card relative p-10 bg-white/90 backdrop-blur-xl border-white/20 transform transition-all duration-1000 h-full flex flex-col ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        <div className={`hf-icon-bg-primary w-16 h-16 flex items-center justify-center mx-auto mb-6`} style={{ background: color }}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <div className="text-center">
          <div className={`text-4xl font-bold mb-2 transition-all duration-1000 delay-300 ${
            isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
          }`} style={{ color: color.split(',')[0].replace('linear-gradient(to bottom right, ', '') }}>
            {value}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div 
              className={`h-2 rounded-full transition-all duration-1500 delay-500 ${
                isVisible ? 'w-4/5' : 'w-0'
              }`}
              style={{ backgroundColor: color.split(',')[0].replace('linear-gradient(to bottom right, ', '') }}
            ></div>
          </div>
          <p className={`text-lg text-gray-800 font-semibold leading-relaxed transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            {label}
          </p>
        </div>
      </div>
    </div>
  );
}

interface LazyAnimatedStatsProps {
  stats: Array<{
    value: string;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    color: string;
  }>;
}

export function LazyAnimatedStats({ stats }: LazyAnimatedStatsProps) {
  const { elementRef, shouldRender } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: '50px 0px',
    triggerOnce: true
  });

  // Loading skeleton
  const LoadingSkeleton = () => (
    <div className="grid md:grid-cols-3 gap-8 mb-12 animate-pulse">
      {Array.from({ length: 3 }, (_, idx) => (
        <div key={idx} className="hf-card relative p-10 bg-white/90">
          <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-6"></div>
          <div className="text-center">
            <div className="h-8 bg-gray-200 rounded w-20 mx-auto mb-2"></div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div ref={elementRef}>
      {shouldRender ? (
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <AnimatedStat
              key={index}
              {...stat}
              delay={index * 200} // Stagger animations
            />
          ))}
        </div>
      ) : (
        <LoadingSkeleton />
      )}
    </div>
  );
}
