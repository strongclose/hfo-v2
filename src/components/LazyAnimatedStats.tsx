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
        <div className={`hf-icon-bg-primary w-12 h-12 flex items-center justify-center mx-auto mb-6`} style={{ background: color }}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="text-center flex-1 flex flex-col justify-between">
          <div>
            <h3 className={`text-4xl font-bold mb-4 transition-all duration-1000 delay-300 ${
              isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
            }`} style={{ color: color.split(',')[0].replace('linear-gradient(to bottom right, ', '') }}>
              {value}
            </h3>
          </div>
          <p className={`text-lg text-gray-800 font-light leading-relaxed transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`} style={{ fontWeight: 300 }}>
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
        <div key={idx} className="hf-card relative p-10 bg-white/90 h-80 flex flex-col">
          <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto mb-6"></div>
          <div className="text-center flex-1 flex flex-col justify-between">
            <div>
              <div className="h-8 bg-gray-200 rounded w-20 mx-auto mb-4"></div>
            </div>
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
