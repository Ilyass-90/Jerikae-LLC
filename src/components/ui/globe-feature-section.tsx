"use client";

import { Button } from "@/src/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/src/lib/utils"

export default function GlobeFeatureSection({ onAction }: { onAction: () => void }) {
  return (
    <section className="relative w-full max-w-7xl mx-auto overflow-hidden rounded-[3rem] p-8 md:p-16 border backdrop-blur bg-brand-navy/90 border-white/10 text-white mt-32 mb-32 group">
      {/* Ambient glow (adapts) */}
      <div className="pointer-events-none absolute -top-32 -right-24 h-72 w-72 rounded-full bg-brand-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-brand-gold/5 blur-3xl" />

      <div className="relative flex flex-col items-center text-center z-10">
        <div className="inline-flex items-center gap-3 px-5 py-2 mb-8 text-[11px] font-black uppercase tracking-[0.4em] bg-white/5 backdrop-blur-md border border-white/10 text-brand-gold rounded-full shadow-xl">
          <span className="w-2 h-2 bg-brand-gold rounded-full animate-pulse" />
          Global Sourcing Partner
        </div>
        
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 uppercase tracking-tighter leading-[0.9] font-display max-w-4xl">
          Dominate the <span className="text-brand-gold italic">Amazon</span> Marketplace
        </h2>
        
        <p className="mt-4 max-w-2xl text-xl text-white/60 leading-relaxed mb-12">
          Empower your Amazon FBA business with high-velocity sourcing, exclusive supplier networks, and data-driven strategies. Jerikae LLC brings precision and performance to your global operations.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <Button 
            onClick={onAction}
            variant="gold"
            size="lg"
            className="rounded-full px-12 py-7 text-sm font-black uppercase tracking-[0.2em] transition-all hover:scale-105 shadow-2xl shadow-brand-gold/20 cursor-pointer"
          >
            Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <div className="flex items-center gap-4 px-6 py-4 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-brand-navy bg-brand-gray overflow-hidden">
                  <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
            <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">500+ Sellers Scaled</span>
          </div>
        </div>

        {/* Globe illustration */}
        <div className="h-64 w-64 md:h-96 md:w-96 overflow-hidden">
          <svg
            viewBox="0 0 300 300"
            className="h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Glow hub - adaptive to theme */}
              <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
                <stop
                  offset="0%"
                  stopColor="rgba(212, 175, 55, 0.9)" // brand-gold
                />
                <stop
                  offset="100%"
                  stopColor="rgba(212, 175, 55, 0.1)" // brand-gold faint
                />
              </radialGradient>
              {/* Line trail gradients */}
              <linearGradient id="trailBright" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.9" />{/* brand-gold */}
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="trailDim" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.1" />
              </linearGradient>
            </defs>

            {/* Enhanced globe group - no rotation */}
            <g>
              {/* Latitude lines - enhanced visibility */}
              {[...Array(6)].map((_, i) => (
                <ellipse
                  key={`lat-${i}`}
                  cx="150"
                  cy="150"
                  rx={120}
                  ry={40 + i * 12}
                  stroke="url(#trailDim)"
                  strokeWidth="1.2"
                  fill="none"
                  strokeDasharray="5 5"
                  style={{ animation: "flowAnimation 10s linear infinite" }}
                  opacity={0.8}
                  transform="rotate(-25,150,150)"
                />
              ))}

              {/* Longitude lines - enhanced visibility */}
              {[...Array(8)].map((_, i) => (
                <path
                  key={`lon-${i}`}
                  d="M150,30 A120,120 0 0,1 150,270"
                  stroke="url(#trailDim)"
                  strokeWidth="1.2"
                  fill="none"
                  strokeDasharray="4 4"
                  style={{ animation: "flowAnimation 12s linear infinite reverse" }}
                  opacity={0.8}
                  transform={`rotate(${i * 22.5},150,150)`}
                />
              ))}

              {/* Orbital trails - enhanced visibility */}
              <ellipse
                cx="150"
                cy="150"
                rx="140"
                ry="60"
                stroke="url(#trailBright)"
                strokeWidth="3"
                fill="none"
                strokeDasharray="10 10"
                style={{ animation: "flowAnimation 14s linear infinite" }}
                opacity="1"
                transform="rotate(20,150,150)"
              />
              <ellipse
                cx="150"
                cy="150"
                rx="130"
                ry="50"
                stroke="url(#trailDim)"
                strokeWidth="2.5"
                fill="none"
                strokeDasharray="12 12"
                style={{ animation: "flowAnimation 9s linear infinite reverse" }}
                opacity="0.9"
                transform="rotate(-40,150,150)"
              />

            </g>
          </svg>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes flowAnimation {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: -100;
          }
        }
      `}</style>
    </section>
  );
}
