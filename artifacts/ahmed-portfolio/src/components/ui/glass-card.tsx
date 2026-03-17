import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface GlassCardProps extends HTMLMotionProps<"div"> {
  hoverEffect?: boolean;
  intensity?: 'low' | 'medium' | 'high';
}

export function GlassCard({ 
  children, 
  className, 
  hoverEffect = false,
  intensity = 'medium',
  ...props 
}: GlassCardProps) {
  const intensities = {
    low: 'bg-[#081017]/40 backdrop-blur-md',
    medium: 'bg-[#081017]/60 backdrop-blur-xl',
    high: 'bg-[#081017]/80 backdrop-blur-2xl',
  };

  return (
    <motion.div
      className={cn(
        "rounded-[32px] border border-white/[0.08] shadow-2xl relative overflow-hidden",
        intensities[intensity],
        hoverEffect && "transition-all duration-500 hover:bg-[#081017]/70 hover:border-white/[0.15] hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(123,45,159,0.15)]",
        className
      )}
      {...props}
    >
      {/* Subtle top glare */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
      
      {children}
    </motion.div>
  );
}
