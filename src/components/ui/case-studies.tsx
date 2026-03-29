"use client";

import { useEffect, useState } from "react";
import { Monitor, LayoutDashboard, Users, ArrowRight } from "lucide-react";
import CountUp from "react-countup";
import { motion } from "motion/react";
import { cn } from "@/src/lib/utils";

/** Hook: respects user's motion preferences */
function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined" || !("matchMedia" in window)) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    setReduced(mq.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);
  return reduced;
}

/** Utility: parse a metric like "98%", "3.8x", "$1,200+", "1.5M", "€23.4k" */
function parseMetricValue(raw: string) {
  const value = (raw ?? "").toString().trim();
  const m = value.match(
    /^([^\d\-+]*?)\s*([\-+]?\d{1,3}(?:,\d{3})*(?:\.\d+)?)\s*([^\d\s]*)$/
  );
  if (!m) {
    return { prefix: "", end: 0, suffix: value, decimals: 0 };
  }
  const [, prefix, num, suffix] = m;
  const normalized = num.replace(/,/g, "");
  const end = parseFloat(normalized);
  const decimals = (normalized.split(".")[1]?.length ?? 0);
  return {
    prefix: prefix ?? "",
    end: isNaN(end) ? 0 : end,
    suffix: suffix ?? "",
    decimals,
  };
}

/** Small component: one animated metric */
function MetricStat({
  value,
  label,
  sub,
  duration = 1.6,
}: {
  value: string;
  label: string;
  sub?: string;
  duration?: number;
  key?: string | number;
}) {
  const reduceMotion = usePrefersReducedMotion();
  const { prefix, end, suffix, decimals } = parseMetricValue(value);

  return (
    <div className="flex flex-col gap-2 text-left p-6">
      <p
        className="text-2xl font-medium text-brand-navy dark:text-white sm:text-4xl"
        aria-label={`${label} ${value}`}
      >
        {prefix}
        {reduceMotion ? (
          <span>
            {end.toLocaleString(undefined, {
              minimumFractionDigits: decimals,
              maximumFractionDigits: decimals,
            })}
          </span>
        ) : (
          <CountUp
            end={end}
            decimals={decimals}
            duration={duration}
            separator=","
            enableScrollSpy
            scrollSpyOnce
          />
        )}
        {suffix}
      </p>
      <p className="font-bold text-brand-navy dark:text-white text-left uppercase tracking-widest text-xs">
        {label}
      </p>
      {sub ? (
        <p className="text-brand-gray dark:text-gray-400 text-left text-sm">{sub}</p>
      ) : null}
    </div>
  );
}

export default function Casestudies() {
  const caseStudies = [
    {
      id: 1,
      title: "Optimized Supply Chain",
      quote:
        "With Jerikae LLC, our sourcing process finally works in sync. From factory audits to final delivery, we ship new products 40% faster with zero quality issues.",
      name: "Aarav Mehta",
      role: "Amazon Brand Owner",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600&h=800",
      icon: Monitor,
      metrics: [
        { value: "40%", label: "Faster Delivery", sub: "Time-to-market speed" },
        { value: "95%", label: "Quality Rating", sub: "Based on final inspections" },
      ],
    },
    {
      id: 2,
      title: "Unified Sourcing Experience",
      quote:
        "Jerikae LLC gave us a unified sourcing experience. Our operations team reduced time spent on supplier communication and improved clarity across all SKUs.",
      name: "Sophia Patel",
      role: "Operations Manager",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600&h=800",
      icon: LayoutDashboard,
      metrics: [
        { value: "3.5x", label: "Efficiency Gain", sub: "Across sourcing workflows" },
        { value: "70%", label: "Reduced Defects", sub: "In monthly shipments" },
      ],
    },
    {
      id: 3,
      title: "Seamless Scaling",
      quote:
        "The collaborative features in Jerikae LLC changed the way our team sources. Everything is more transparent, and scaling to new categories is now seamless.",
      name: "David Liu",
      role: "E-commerce Director",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600&h=800",
      icon: Users,
      metrics: [
        { value: "2x", label: "Faster Scaling", sub: "New product launches" },
        { value: "88%", label: "Profitability Boost", sub: "Reduced landed costs" },
      ],
    },
  ];

  return (
    <section
      className="py-32 bg-brand-offwhite"
      aria-labelledby="case-studies-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col gap-4 text-center max-w-2xl mx-auto mb-24">
          <div className="inline-block px-4 py-1 mb-4 text-[10px] font-black uppercase tracking-[0.3em] bg-brand-gold/10 text-brand-gold self-center">
            Success Stories
          </div>
          <h2
            id="case-studies-heading"
            className="text-4xl font-bold md:text-5xl text-brand-navy uppercase tracking-wider leading-tight break-words"
          >
            Real results with Jerikae LLC
          </h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            From emerging brands to established enterprises—Jerikae LLC powers Amazon sellers with speed, clarity, and consistency.
          </p>
        </div>

        {/* Cases */}
        <div className="flex flex-col gap-32">
          {caseStudies.map((study, idx) => {
            const reversed = idx % 2 === 1;
            return (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="grid gap-12 lg:grid-cols-3 xl:gap-24 items-center border-b border-gray-200 dark:border-gray-800 pb-24 last:border-0"
              >
                {/* Left: Image + Quote */}
                <div
                  className={cn(
                    "flex flex-col sm:flex-row gap-10 lg:col-span-2 lg:border-r lg:pr-12 xl:pr-16 text-left",
                    reversed
                      ? "lg:order-2 lg:border-r-0 lg:border-l border-gray-200 dark:border-gray-800 lg:pl-12 xl:pl-16 lg:pr-0"
                      : "border-gray-200 dark:border-gray-800"
                  )}
                >
                  <div className="relative group overflow-hidden rounded-3xl aspect-[29/35] h-auto w-full max-w-60 shrink-0">
                    <img
                      src={study.image}
                      alt={`${study.name} portrait`}
                      className="h-full w-full object-cover ring-1 ring-border group-hover:scale-110 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  <figure className="flex flex-col justify-between gap-8 text-left">
                    <blockquote className="text-lg sm:text-xl text-brand-navy leading-relaxed text-left">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-brand-navy leading-tight text-left uppercase tracking-wider mb-4 break-words">
                        {study.title}
                      </h3>
                      <p className="text-brand-gray italic font-medium leading-relaxed">
                        "{study.quote}"
                      </p>
                    </blockquote>
                    <figcaption className="flex items-center gap-6 mt-4 text-left">
                      <div className="flex flex-col gap-1">
                        <span className="text-md font-bold text-brand-navy uppercase tracking-widest">
                          {study.name}
                        </span>
                        <span className="text-xs font-bold text-brand-gold uppercase tracking-widest">
                          {study.role}
                        </span>
                      </div>
                    </figcaption>
                  </figure>
                </div>

                {/* Right: Metrics */}
                <div
                  className={cn(
                    "grid grid-cols-1 gap-10 self-center text-left",
                    reversed ? "lg:order-1" : ""
                  )}
                >
                  {study.metrics.map((metric, i) => (
                    <MetricStat
                      key={`${study.id}-${i}`}
                      value={metric.value}
                      label={metric.label}
                      sub={metric.sub}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
