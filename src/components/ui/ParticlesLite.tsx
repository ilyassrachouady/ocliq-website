import React from 'react';

interface ParticlesLiteProps {
  particleCount?: number;
  particleColor?: string;
  particleSize?: number;
  speed?: number;
  opacity?: number;
  moveParticlesOnHover?: boolean;
  alphaParticles?: boolean;
}

const ParticlesLite: React.FC<ParticlesLiteProps> = ({
  particleCount = 50,
  particleColor = '#ffffff',
  particleSize = 2,
  speed = 1,
  opacity = 0.6,
  moveParticlesOnHover = false,
  alphaParticles = false
}) => {
  const particles = Array.from({ length: particleCount }, (_, i) => {
    const animationDelay = Math.random() * 20;
    const animationDuration = 15 + Math.random() * 25;
    const initialX = Math.random() * 100;
    const initialY = Math.random() * 100;
    const size = particleSize * (0.5 + Math.random() * 1.5);
    const finalOpacity = alphaParticles ? opacity * Math.random() : opacity;

    return {
      id: i,
      animationDelay,
      animationDuration,
      initialX,
      initialY,
      size,
      opacity: finalOpacity
    };
  });

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${moveParticlesOnHover ? 'group-hover:scale-105' : ''}`}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            backgroundColor: particleColor,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.initialX}%`,
            top: `${particle.initialY}%`,
            opacity: particle.opacity,
            animation: `particle-float ${particle.animationDuration / speed}s ease-in-out ${particle.animationDelay}s infinite alternate`,
            boxShadow: `0 0 ${particle.size * 2}px ${particleColor}40`,
          }}
        />
      ))}
      
      {/* CSS Animation Keyframes */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes particle-float {
            0% { 
              transform: translate(0, 0) scale(0.8); 
              opacity: ${opacity * 0.3};
            }
            25% {
              transform: translate(20px, -30px) scale(1.1);
              opacity: ${opacity * 0.8};
            }
            50% { 
              transform: translate(-15px, 20px) scale(0.9); 
              opacity: ${opacity};
            }
            75% {
              transform: translate(10px, 10px) scale(1.2);
              opacity: ${opacity * 0.6};
            }
            100% { 
              transform: translate(-5px, -20px) scale(1); 
              opacity: ${opacity * 0.4};
            }
          }
          
          ${moveParticlesOnHover ? `
            .group:hover [style*="particle-float"] {
              animation-duration: ${15 / (speed * 1.5)}s !important;
            }
          ` : ''}
        `
      }} />
    </div>
  );
};

export default ParticlesLite;