import React from 'react';

interface AuroraLiteProps {
  colorStops?: string[];
  blend?: number;
  amplitude?: number;
  speed?: number;
}

const AuroraLite: React.FC<AuroraLiteProps> = ({ 
  colorStops = ["#0127c1", "#0127c1", "#0127c1"],
  blend = 1,
  amplitude = 2,
  speed = 0.9 
}) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Aurora Base Layer */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(180deg, 
              ${colorStops[0]}CC 0%,
              ${colorStops[1] || colorStops[0]}99 40%,
              ${colorStops[2] || colorStops[0]}66 70%,
              transparent 100%
            )
          `,
          filter: 'blur(20px)',
          transform: 'scale(1.1)',
          animation: `aurora-wave-base ${25 / speed}s ease-in-out infinite`,
        }}
      />

      {/* Aurora Primary Wave */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 200% 100% at 50% 40%, 
              ${colorStops[0]}DD 0%, 
              ${colorStops[1] || colorStops[0]}BB 30%, 
              ${colorStops[2] || colorStops[0]}77 60%, 
              transparent 85%
            )
          `,
          filter: 'blur(15px)',
          animation: `aurora-wave-1 ${20 / speed}s ease-in-out infinite`,
        }}
      />

      {/* Aurora Secondary Wave */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 150% 80% at 30% 50%, 
              ${colorStops[1] || colorStops[0]}CC 0%, 
              ${colorStops[2] || colorStops[0]}99 25%, 
              ${colorStops[0]}55 55%, 
              transparent 80%
            )
          `,
          filter: 'blur(12px)',
          animation: `aurora-wave-2 ${18 / speed}s ease-in-out infinite reverse`,
        }}
      />

      {/* Aurora Tertiary Wave */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 180% 90% at 70% 45%, 
              ${colorStops[2] || colorStops[0]}BB 0%, 
              ${colorStops[0]}88 35%, 
              ${colorStops[1] || colorStops[0]}44 65%, 
              transparent 85%
            )
          `,
          filter: 'blur(10px)',
          animation: `aurora-wave-3 ${22 / speed}s ease-in-out infinite`,
        }}
      />

      {/* Aurora Highlight Layer */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 120% 60% at 50% 35%, 
              ${colorStops[0]}FF 0%, 
              ${colorStops[1] || colorStops[0]}CC 20%, 
              transparent 50%
            )
          `,
          filter: 'blur(8px)',
          animation: `aurora-wave-4 ${15 / speed}s ease-in-out infinite reverse`,
        }}
      />

      {/* Aurora Sharp Details */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 100% 40% at 50% 30%, 
              ${colorStops[0]}EE 0%, 
              ${colorStops[1] || colorStops[0]}AA 15%, 
              transparent 40%
            )
          `,
          filter: 'blur(5px)',
          animation: `aurora-wave-5 ${12 / speed}s ease-in-out infinite`,
        }}
      />

      {/* Dynamic CSS Animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes aurora-wave-base {
            0% { 
              transform: translateY(-15%) translateX(-10%) scale(1.2) skewY(2deg);
              opacity: 0.7;
            }
            25% { 
              transform: translateY(-25%) translateX(15%) scale(1.4) skewY(-1deg);
              opacity: 1;
            }
            50% { 
              transform: translateY(-5%) translateX(-5%) scale(1.1) skewY(3deg);
              opacity: 0.6;
            }
            75% { 
              transform: translateY(-20%) translateX(8%) scale(1.3) skewY(-2deg);
              opacity: 0.9;
            }
            100% { 
              transform: translateY(-15%) translateX(-10%) scale(1.2) skewY(2deg);
              opacity: 0.7;
            }
          }

          @keyframes aurora-wave-1 {
            0% { 
              transform: translateX(-20%) translateY(-15%) scale(1.3) rotate(2deg);
              opacity: 0.8;
            }
            25% { 
              transform: translateX(25%) translateY(-30%) scale(1.6) rotate(-3deg);
              opacity: 1;
            }
            50% { 
              transform: translateX(-15%) translateY(-10%) scale(1.1) rotate(4deg);
              opacity: 0.6;
            }
            75% { 
              transform: translateX(18%) translateY(-25%) scale(1.4) rotate(-1deg);
              opacity: 0.9;
            }
            100% { 
              transform: translateX(-20%) translateY(-15%) scale(1.3) rotate(2deg);
              opacity: 0.8;
            }
          }

          @keyframes aurora-wave-2 {
            0% { 
              transform: translateX(15%) translateY(-20%) scale(1.4) skewX(3deg);
              opacity: 0.9;
            }
            33% { 
              transform: translateX(-25%) translateY(-35%) scale(1.7) skewX(-4deg);
              opacity: 0.7;
            }
            66% { 
              transform: translateX(20%) translateY(-12%) scale(1.2) skewX(2deg);
              opacity: 1;
            }
            100% { 
              transform: translateX(15%) translateY(-20%) scale(1.4) skewX(3deg);
              opacity: 0.9;
            }
          }

          @keyframes aurora-wave-3 {
            0% { 
              transform: translateX(-12%) translateY(-18%) scale(1.25) rotate(-2deg);
              opacity: 0.75;
            }
            40% { 
              transform: translateX(28%) translateY(-40%) scale(1.8) rotate(3deg);
              opacity: 1;
            }
            80% { 
              transform: translateX(-18%) translateY(-8%) scale(1.05) rotate(-4deg);
              opacity: 0.8;
            }
            100% { 
              transform: translateX(-12%) translateY(-18%) scale(1.25) rotate(-2deg);
              opacity: 0.75;
            }
          }

          @keyframes aurora-wave-4 {
            0% { 
              transform: translateY(-25%) translateX(-8%) scale(1.5);
              opacity: 1;
            }
            50% { 
              transform: translateY(-45%) translateX(12%) scale(2.0);
              opacity: 0.8;
            }
            100% { 
              transform: translateY(-25%) translateX(-8%) scale(1.5);
              opacity: 1;
            }
          }

          @keyframes aurora-wave-5 {
            0% { 
              transform: translateX(-8%) translateY(-30%) scale(1.6);
              opacity: 0.9;
            }
            30% { 
              transform: translateX(22%) translateY(-50%) scale(2.2);
              opacity: 1;
            }
            70% { 
              transform: translateX(-15%) translateY(-20%) scale(1.3);
              opacity: 0.7;
            }
            100% { 
              transform: translateX(-8%) translateY(-30%) scale(1.6);
              opacity: 0.9;
            }
          }
        `
      }} />
    </div>
  );
};

export default AuroraLite;