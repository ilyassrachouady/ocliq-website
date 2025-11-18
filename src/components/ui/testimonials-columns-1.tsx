"use client";
import React from "react";
import { motion } from "motion/react";


export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Array<{
    quote: string;
    name: string;
    role?: string;
    company?: string;
    rating?: number;
  }>;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
        style={{ background: 'transparent' }}
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ quote, name, role, company, rating }, i) => {
                const initials = name
                  .split(' ')
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join('')
                  .toUpperCase();

                return (
                  <div className="p-10 rounded-3xl max-w-xs w-full" 
                    style={{
                      background: 'rgba(255, 255, 255, 0.08)',
                      backdropFilter: 'blur(15px)',
                      WebkitBackdropFilter: 'blur(15px)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
                    }}
                    key={i}
                  >
                    <div className="text-white/80 italic">"{quote}"</div>
                    <div className="flex items-center gap-3 mt-5">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full flex items-center justify-center text-sm font-semibold text-white"
                          style={{
                            background: 'linear-gradient(135deg, #152e56, #2a96e8, white)',
                            border: '1px solid rgba(42, 150, 232, 0.3)'
                          }}
                        >
                          {initials}
                        </div>
                      </div>
                      <div className="flex flex-col text-left">
                        <div className="font-medium tracking-tight leading-5 text-white">{name}</div>
                        <div className="leading-5 text-white/60 tracking-tight text-sm">{role}{company ? ` • ${company}` : ''}</div>
                      </div>
                    </div>
                    {typeof rating === 'number' && (
                      <div className="mt-4 flex gap-1">
                        {Array.from({ length: rating }).map((_, s) => (
                          <svg key={s} className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                            <path d="M12 .587l3.668 7.431L23.4 9.75l-5.6 5.456L19.336 24 12 20.201 4.664 24l1.536-8.794L.6 9.75l7.732-1.732L12 .587z" />
                          </svg>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

;
