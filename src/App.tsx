/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Routes, 
  Route, 
  Link, 
  useNavigate, 
  useLocation, 
  useParams,
  Navigate
} from 'react-router-dom';
import { 
  ChevronRight, 
  Globe, 
  Mail, 
  MapPin, 
  Phone, 
  Scale, 
  Search, 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  Zap,
  Menu, 
  X,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  FileText,
  Quote,
  Star,
  Calendar,
  User,
  Tag,
  BarChart3,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import CountUp from 'react-countup';
import { cn } from '@/src/lib/utils';
import { InteractiveGlobe } from '@/src/components/ui/interactive-globe';
import GlobeFeatureSection from '@/src/components/ui/globe-feature-section';
import { TestimonialsColumn, Testimonial } from './components/ui/testimonials-columns-1';
import Casestudies from '@/src/components/ui/case-studies';
import { Page, BlogPost } from './types';
import { blogPosts } from './data/blogPosts';

// --- Components ---

const Logo = ({ className = "", variant = "transparent" }: { className?: string, variant?: "light" | "dark" | "transparent" }) => {
  const logos = {
    transparent: "https://lh3.googleusercontent.com/d/1N2y2mZGD2xGXppJ_KzYO3IyWgtWLPPZn",
    dark: "https://lh3.googleusercontent.com/d/1im-R05edw58mVAD9F0D-P-T9g9VsoPgX",
    light: "https://lh3.googleusercontent.com/d/1qfGzpN9UaDCGN4qQBX-v0AI5rHm-Wcpb"
  };

  return (
    <div className={cn("flex items-center", className)}>
      <img 
        src={logos[variant]} 
        alt="Jerikae Sourcing Logo" 
        className="h-8 md:h-10 w-auto object-contain"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, centered = false, light = false }) => (
  <div className={cn("mb-16", centered ? 'text-center' : '')}>
    <div className={cn("inline-block px-4 py-1 mb-4 text-[10px] font-black uppercase tracking-[0.3em] rounded-full", light ? "bg-white/10 text-brand-gold" : "bg-brand-gold/10 text-brand-gold")}>
      Jerikae LLC Solution
    </div>
    <h2 className={cn("text-4xl md:text-5xl mb-6 leading-tight break-words", light ? "text-white" : "text-brand-navy")}>{title}</h2>
    {subtitle && <p className={cn("max-w-2xl text-lg leading-relaxed", centered ? "mx-auto" : "", light ? "text-white/70" : "text-brand-gray")}>{subtitle}</p>}
  </div>
);

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = "" }) => (
  <div className={cn("bg-white p-10 shadow-soft hover:shadow-strong transition-all duration-500 border border-gray-100 rounded-3xl group", className)}>
    {children}
  </div>
);

const StatItem = ({ label, value, icon, index }: { label: string, value: string, icon: React.ReactNode, index: number, key?: string | number }) => {
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  const suffix = value.replace(/[0-9.]/g, '');
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="text-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 group hover:bg-white/10 transition-all duration-500 rounded-3xl"
    >
      <div className="text-brand-gold mb-4 flex justify-center group-hover:scale-110 transition-transform duration-500">{icon}</div>
      <div className="text-4xl md:text-5xl font-black text-white mb-2 font-display">
        <CountUp end={numericValue} duration={2.5} separator="," enableScrollSpy scrollSpyOnce />
        {suffix}
      </div>
      <div className="text-[10px] font-black text-white/50 uppercase tracking-[0.3em] group-hover:text-brand-gold transition-colors duration-500">{label}</div>
    </motion.div>
  );
};

// --- Pages ---

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="space-y-0 pb-0">
    {/* Hero Section */}
    <section className="relative min-h-[70vh] lg:min-h-[60vh] flex items-center overflow-hidden">
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000" 
          alt="Amazon Warehouse Logistics" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-navy/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/60 to-transparent" />
      </motion.div>
      
      <div className="section-padding relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center relative">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-white leading-[0.85] mb-8 font-display uppercase tracking-tighter break-words">
              Scale Your <br />
              <span className="text-brand-gold italic">Amazon Profits</span> <br />
              With Precision.
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-12 leading-relaxed max-w-xl border-l-2 border-brand-gold pl-6">
              U.S.-based sourcing powered by exclusive supplier networks for serious Amazon sellers looking to dominate the marketplace.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link to="/contact" className="btn-accent group px-10 cursor-pointer">
                Book a Call <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/services" className="btn-secondary !border-white/30 !text-white hover:!bg-white hover:!text-brand-navy px-10 cursor-pointer">
                Explore Services
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="absolute lg:static inset-0 flex justify-center items-center -z-10 lg:z-10 opacity-50 lg:opacity-100 pointer-events-none lg:pointer-events-auto overflow-hidden lg:overflow-visible"
          >
            <div className="absolute inset-0 bg-brand-gold/10 blur-[120px] rounded-full animate-pulse" />
            <InteractiveGlobe size={650} className="relative z-10 scale-[0.6] md:scale-[0.8] lg:scale-100 translate-y-20 lg:translate-y-0" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Redesigned About Section (Bento Grid Style) */}
    <section className="bg-brand-offwhite py-32 overflow-hidden">
      <div className="section-padding">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Main Heading Block */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-brand-gold/10 text-brand-gold rounded-full text-[10px] font-black uppercase tracking-[0.3em]">
              <span className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-pulse" />
              Strategic Partnership
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-brand-navy leading-[0.9] uppercase tracking-tighter font-display break-words">
              Precision Sourcing <br />
              <span className="text-brand-gold italic">Redefined</span> for FBA.
            </h2>
            <p className="text-xl text-brand-gray leading-relaxed max-w-2xl border-l-2 border-brand-gold/30 pl-8">
              Jerikae LLC is more than just a sourcing company. We are your strategic partner in navigating the complex world of Amazon FBA. Our U.S.-based team leverages deep industry knowledge and an exclusive network to find high-margin products that others miss.
            </p>
          </motion.div>

          {/* Stats Block */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4 bg-brand-navy rounded-[2.5rem] p-10 text-white relative overflow-hidden flex flex-col justify-between group"
          >
            <div className="absolute inset-0 opacity-10 dot-pattern group-hover:opacity-20 transition-opacity" />
            <div className="relative z-10">
              <div className="text-6xl font-black text-brand-gold mb-2 font-display">10+</div>
              <div className="text-xs font-bold uppercase tracking-[0.3em] opacity-60">Years of Market Dominance</div>
            </div>
            <div className="relative z-10 mt-12">
              <p className="text-sm leading-relaxed opacity-80 italic">
                "Our longevity in the Amazon space is built on a foundation of trust, precision, and an unwavering commitment to our partners' growth."
              </p>
            </div>
          </motion.div>

          {/* Image Block */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-5 h-[500px] rounded-[2.5rem] overflow-hidden relative group"
          >
            <img 
              src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&q=80&w=1000" 
              alt="Sourcing Operations" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent" />
            <div className="absolute bottom-10 left-10 right-10">
              <div className="text-xs font-black text-brand-gold uppercase tracking-[0.3em] mb-2">Global Logistics</div>
              <div className="text-2xl font-bold text-white uppercase tracking-wider">U.S. Based Operations</div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="lg:col-span-7 grid md:grid-cols-2 gap-8">
            {[
              { 
                title: "Data-Driven Research", 
                desc: "We don't guess. Every product is validated with real-time market data and velocity metrics.",
                icon: <BarChart3 size={32} />
              },
              { 
                title: "Exclusive Networks", 
                desc: "Access manufacturers and wholesalers that don't work with the general public.",
                icon: <ShieldCheck size={32} />
              },
              { 
                title: "Quality Control", 
                desc: "Rigorous inspection standards to ensure every unit meets Amazon's strict requirements.",
                icon: <Zap size={32} />
              },
              { 
                title: "Strategic Scaling", 
                desc: "Custom growth roadmaps designed to take your business from $10k to $100k+ monthly.",
                icon: <TrendingUp size={32} />
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + (i * 0.1) }}
                className="bg-white p-10 rounded-[2rem] border border-brand-navy/5 hover:border-brand-gold/30 transition-all duration-500 group shadow-sm hover:shadow-xl"
              >
                <div className="w-14 h-14 bg-brand-offwhite rounded-2xl flex items-center justify-center text-brand-gold mb-8 group-hover:bg-brand-gold group-hover:text-white transition-all duration-500">
                  {item.icon}
                </div>
                <h4 className="text-xl font-black text-brand-navy mb-4 uppercase tracking-widest leading-tight break-words">{item.title}</h4>
                <p className="text-brand-gray leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Stats Section */}
    <section className="bg-brand-navy py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 dot-pattern" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: "Products Sourced", value: "12,000+", icon: <BarChart3 size={32} /> },
            { label: "Active Clients", value: "500+", icon: <Users size={32} /> },
            { label: "Avg. Client ROI", value: "35%", icon: <TrendingUp size={32} /> },
            { label: "Global Partners", value: "150+", icon: <Globe size={32} /> },
          ].map((stat, i) => (
            <StatItem key={i} index={i} label={stat.label} value={stat.value} icon={stat.icon} />
          ))}
        </div>
      </div>
    </section>

    {/* Services Overview */}
    <section className="bg-brand-offwhite py-32">
      <div className="section-padding">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <SectionHeading 
              title="Comprehensive Sourcing Solutions"
              subtitle="From online arbitrage to wholesale supplier negotiations, we provide the data and the connections you need to maintain a competitive edge on Amazon."
            />
          </div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/services" 
              className="btn-primary mb-16 inline-block"
            >
              View All Services
            </Link>
          </motion.div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { 
              title: "Product Sourcing", 
              desc: "High-ROI products identified through rigorous data analysis and market validation.",
              icon: <Search size={32} />
            },
            { 
              title: "Wholesale Sourcing", 
              desc: "Direct access to manufacturers and authorized distributors for scalable growth.",
              icon: <Globe size={32} />
            },
            { 
              title: "Online Arbitrage", 
              desc: "Fast-turning retail opportunities sourced from top U.S. retailers.",
              icon: <TrendingUp size={32} />
            }
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <Card className="flex flex-col h-full border-t-0 border-x-0 border-b-4">
                <div className="w-20 h-20 bg-brand-navy text-white flex items-center justify-center mb-10 group-hover:bg-brand-gold transition-colors duration-500 shadow-lg">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-black text-brand-navy mb-4 uppercase tracking-widest break-words">{service.title}</h3>
                <p className="text-brand-gray leading-relaxed mb-10 flex-grow text-lg">{service.desc}</p>
                <Link to="/services" className="text-brand-gold font-black uppercase tracking-[0.2em] text-[10px] flex items-center gap-3 hover:gap-5 transition-all">
                  Learn More <ArrowRight size={14} />
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials Section */}
    <section className="bg-white py-32 overflow-hidden relative">
      <div className="section-padding z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[800px] mx-auto mb-20"
        >
          <div className="flex justify-center mb-6">
            <div className="border-2 border-brand-gold py-1 px-6 rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-brand-navy">Testimonials</div>
          </div>

          <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tighter text-brand-navy text-center mb-8">
            What our <span className="text-brand-gold italic">Partners</span> say
          </h2>
          <p className="text-center text-brand-gray text-lg max-w-2xl leading-relaxed">
            We build long-term relationships with Amazon sellers who are serious about scaling their business profitably through precision sourcing.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[800px] overflow-hidden">
          <TestimonialsColumn 
            testimonials={[
              {
                text: "Jerikae LLC transformed my sourcing strategy. Their wholesale network is unmatched, and the ROI on the products they source is consistently high.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
                name: "David M.",
                role: "Amazon Seller ($30K/mo)",
              },
              {
                text: "The data-driven approach they use gives me the confidence to scale. I've seen a 40% increase in my profit margins since partnering with them.",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
                name: "Sarah L.",
                role: "Amazon Seller ($15K/mo)",
              },
              {
                text: "Implementing their sourcing leads was smooth and quick. The quality of products and the reliability of their suppliers is top-notch.",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
                name: "Michael R.",
                role: "FBA Entrepreneur",
              },
            ]} 
            duration={25} 
          />
          <TestimonialsColumn 
            className="hidden md:block"
            testimonials={[
              {
                text: "Their support team is exceptional, guiding us through supplier negotiations and providing ongoing assistance for our Amazon store.",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
                name: "Jessica K.",
                role: "E-commerce Director",
              },
              {
                text: "The robust features of their sourcing platform and quick support have transformed our workflow, making us significantly more efficient.",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
                name: "Robert T.",
                role: "Operations Manager",
              },
              {
                text: "The smooth implementation exceeded expectations. It streamlined our procurement processes, improving overall business performance.",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
                name: "Emily W.",
                role: "Business Analyst",
              },
            ]} 
            duration={32} 
          />
          <TestimonialsColumn 
            className="hidden lg:block"
            testimonials={[
              {
                text: "Our business functions improved with their user-friendly design and positive feedback from our customers on product quality.",
                image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200",
                name: "Chris P.",
                role: "Marketing Director",
              },
              {
                text: "They delivered a solution that exceeded expectations, understanding our specific niche needs and enhancing our operations.",
                image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=200",
                name: "Amanda S.",
                role: "Sales Manager",
              },
              {
                text: "Using Jerikae's sourcing leads, our online presence and conversions significantly improved, boosting our business performance.",
                image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200",
                name: "Kevin B.",
                role: "E-commerce Manager",
              },
            ]} 
            duration={28} 
          />
        </div>
      </div>
    </section>

    {/* Case Studies Section */}
    <Casestudies />

    {/* CTA Section */}
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="section-padding"
    >
      <GlobeFeatureSection onAction={() => navigate('/contact')} />
    </motion.div>
  </div>
);
};

const ServicesPage = () => (
  <div className="pb-32">
    <section className="bg-brand-navy pt-48 pb-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 dot-pattern" />
      <div className="section-padding relative z-10">
        <SectionHeading 
          title="Our Sourcing Expertise" 
          subtitle="Expertly crafted sourcing solutions designed to maximize your ROI and minimize your operational overhead."
          light
        />
      </div>
    </section>

    <section className="section-padding -mt-20 relative z-20">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { 
            title: "Product Sourcing", 
            desc: "Our core service focuses on identifying high-demand products with proven sales history and sustainable margins.",
            benefits: ["30%+ Target ROI", "Low Competition Focus", "Category Specific Research"],
            icon: <Search size={32} />
          },
          { 
            title: "Online Arbitrage", 
            desc: "We scan thousands of retail sites daily to find price discrepancies and profitable flips for your Amazon store.",
            benefits: ["Fast Inventory Turn", "Verified Lead Lists", "Scalable Daily Leads"],
            icon: <TrendingUp size={32} />
          },
          { 
            title: "Wholesale Sourcing", 
            desc: "Build long-term stability with direct manufacturer relationships and authorized wholesale accounts.",
            benefits: ["Brand Direct Access", "Sustainable Supply", "Higher Volume Potential"],
            icon: <Globe size={32} />
          },
          { 
            title: "Supplier Negotiation", 
            desc: "Our team handles the communication and negotiation to secure the best possible pricing and terms.",
            benefits: ["Better Profit Margins", "Exclusive Terms", "Professional Representation"],
            icon: <MessageSquare size={32} />
          },
          { 
            title: "Market Research", 
            desc: "Deep-dive analysis into market trends, competitor behavior, and future demand forecasting.",
            benefits: ["Risk Mitigation", "Trend Identification", "Strategic Planning"],
            icon: <BarChart3 size={32} />
          },
          { 
            title: "Product Validation", 
            desc: "Every lead goes through a multi-step validation process before it ever reaches your dashboard.",
            benefits: ["Quality Assurance", "Data Verification", "Compliance Checks"],
            icon: <ShieldCheck size={32} />
          }
        ].map((service, idx) => (
          <Card key={idx} className="flex flex-col h-full">
            <div className="w-16 h-16 bg-brand-navy text-white flex items-center justify-center mb-8 group-hover:bg-brand-gold transition-colors duration-500">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold text-brand-navy mb-4 uppercase tracking-wider break-words">{service.title}</h3>
            <p className="text-brand-gray leading-relaxed mb-8">{service.desc}</p>
            <div className="mt-auto pt-8 border-t border-gray-100">
              <ul className="space-y-3">
                {service.benefits.map((benefit, bIdx) => (
                  <li key={bIdx} className="flex items-center gap-3 text-sm font-bold text-brand-navy uppercase tracking-widest">
                    <CheckCircle2 size={16} className="text-brand-gold" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>
    </section>
  </div>
);

const HowItWorksPage = () => (
  <div className="pb-32">
    <section className="bg-brand-navy pt-48 pb-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 dot-pattern" />
      <div className="section-padding relative z-10">
        <SectionHeading 
          title="Our Strategic Process" 
          subtitle="A transparent, data-driven 4-step process to take your Amazon business to the next level."
          light
          centered
        />
      </div>
    </section>

    <section className="section-padding -mt-20 relative z-20">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { 
            step: "01", 
            title: "Consultation", 
            desc: "We discuss your current revenue, goals, and specific sourcing needs to build a custom strategy.", 
            icon: <Users size={32} />,
            details: ["Revenue Analysis", "Goal Setting", "Niche Selection"]
          },
          { 
            step: "02", 
            title: "Validation", 
            desc: "Our team performs rigorous market analysis to find winning products with proven history.", 
            icon: <Search size={32} />,
            details: ["ROI Projection", "Competition Check", "Sales Velocity"]
          },
          { 
            step: "03", 
            title: "Sourcing", 
            desc: "We connect with our network to secure the best pricing and terms for your inventory.", 
            icon: <Globe size={32} />,
            details: ["Supplier Outreach", "Price Negotiation", "Account Setup"]
          },
          { 
            step: "04", 
            title: "Scaling", 
            desc: "You receive the inventory or leads and begin scaling your profits with our ongoing support.", 
            icon: <TrendingUp size={32} />,
            details: ["Inventory Management", "Profit Tracking", "Ongoing Support"]
          }
        ].map((item, idx) => (
          <Card key={idx} className="text-center group flex flex-col h-full">
            <div className="w-20 h-20 bg-brand-navy text-white flex items-center justify-center mx-auto mb-8 group-hover:bg-brand-gold transition-all duration-500 relative">
              <div className="absolute -top-2 -right-2 bg-brand-gold text-white text-xs font-bold w-8 h-8 flex items-center justify-center border-2 border-white">
                {item.step}
              </div>
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-4 uppercase tracking-wider break-words">{item.title}</h3>
            <p className="text-brand-gray text-sm leading-relaxed mb-8 flex-grow">{item.desc}</p>
            <div className="pt-6 border-t border-gray-100">
              <div className="flex flex-wrap justify-center gap-2">
                {item.details.map((detail, dIdx) => (
                  <span key={dIdx} className="text-[10px] font-bold text-brand-gold uppercase tracking-widest bg-brand-gold/5 px-2 py-1">
                    {detail}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  </div>
);

const AboutPage = () => (
  <div className="pb-32">
    <section className="bg-brand-navy pt-48 pb-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 dot-pattern" />
      <div className="section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading 
            title="Our Story & Vision" 
            subtitle="We are more than just a sourcing agency; we are your strategic partner in the complex world of Amazon FBA."
            light
          />
        </motion.div>
      </div>
    </section>

    <section className="section-padding -mt-20 relative z-20">
      <div className="grid lg:grid-cols-2 gap-16 items-center bg-white p-8 md:p-16 shadow-2xl rounded-3xl">
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-gold/20 blur-2xl rounded-full" />
          <img 
            src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&q=80&w=1000" 
            alt="Jerikae LLC Office" 
            className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 shadow-xl"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-8 -right-8 bg-brand-navy text-white p-10 hidden lg:block z-20 border-l-8 border-brand-gold shadow-2xl rounded-2xl">
            <div className="text-5xl font-black mb-2 font-display">5+ Years</div>
            <div className="text-[10px] font-bold opacity-60 uppercase tracking-[0.2em]">Industry Experience</div>
          </div>
        </div>
        
        <div className="space-y-8">
          <div className="inline-block px-4 py-1 bg-brand-gold/10 text-brand-gold text-[10px] font-black uppercase tracking-[0.3em]">
            Our Mission
          </div>
          <h2 className="text-4xl md:text-5xl text-brand-navy font-display leading-tight uppercase tracking-wider break-words">
            Empowering Sellers Through <span className="text-brand-gold italic">Precision</span> Sourcing
          </h2>
          <p className="text-brand-gray leading-relaxed text-lg">
            Founded on the principles of transparency and data-driven results, Jerikae LLC was established to bridge the gap between intermediate Amazon sellers and high-quality, U.S.-based sourcing opportunities.
          </p>
          <p className="text-brand-gray leading-relaxed">
            Our mission is to empower sellers with the inventory and supplier networks typically reserved for large-scale enterprises. We believe in long-term partnerships built on reliability and consistent ROI.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-8 pt-8 border-t border-gray-100">
            <div className="space-y-4">
              <div className="w-12 h-1 bg-brand-gold" />
              <div className="text-xl font-bold text-brand-navy uppercase tracking-wider">U.S. Based</div>
              <div className="text-sm text-brand-gray leading-relaxed">Headquartered in Wyoming, serving partners across the globe with reliable communication.</div>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-1 bg-brand-gold" />
              <div className="text-xl font-bold text-brand-navy uppercase tracking-wider">100% Data</div>
              <div className="text-sm text-brand-gray leading-relaxed">Every lead is validated through a multi-step data verification process before delivery.</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Values Section */}
    <section className="section-padding py-16 bg-brand-offwhite">
      <div className="max-w-4xl mx-auto text-center mb-20">
        <SectionHeading 
          title="Our Core Values" 
          subtitle="The principles that guide every sourcing decision we make for our partners."
          centered
        />
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { 
            title: "Integrity", 
            desc: "We prioritize long-term success over short-term gains, ensuring every deal is ethical and transparent.",
            icon: <ShieldCheck size={32} />
          },
          { 
            title: "Precision", 
            desc: "Our data-driven approach eliminates guesswork, focusing on high-probability outcomes for your business.",
            icon: <BarChart3 size={32} />
          },
          { 
            title: "Partnership", 
            desc: "We don't just provide leads; we work as an extension of your team to help you scale profitably.",
            icon: <Users size={32} />
          }
        ].map((value, i) => (
          <div key={i} className="bg-white p-12 text-center shadow-soft hover:shadow-strong transition-all duration-500 border border-gray-100 rounded-3xl">
            <div className="w-16 h-16 bg-brand-navy text-white flex items-center justify-center mx-auto mb-8">
              {value.icon}
            </div>
            <h3 className="text-2xl font-bold text-brand-navy mb-4 uppercase tracking-wider break-words">{value.title}</h3>
            <p className="text-brand-gray leading-relaxed">{value.desc}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

const FAQPage = () => (
  <div className="pb-32">
    <section className="bg-brand-navy pt-48 pb-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 dot-pattern" />
      <div className="section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading 
            title="Frequently Asked Questions" 
            subtitle="Everything you need to know about our sourcing services and how we help you scale."
            light
            centered
          />
        </motion.div>
      </div>
    </section>

    <section className="section-padding -mt-20 relative z-20">
      <div className="max-w-4xl mx-auto space-y-4">
        {[
          { q: "How do you find products?", a: "We combine proprietary data analysis tools with a deep manual research process. Our team analyzes thousands of data points including sales velocity, competition levels, and historical pricing to ensure every lead meets our strict ROI criteria." },
          { q: "What ROI can I expect?", a: "While results vary by category and sourcing method, we typically target a minimum ROI of 30% for our partners. Our case studies show many sellers achieving 40-60% ROI on specific product lines." },
          { q: "Do you work with all sellers?", a: "We specialize in working with intermediate sellers doing between $5K and $50K in monthly revenue. This allows us to provide the most value through scaling strategies and wholesale account acquisition." },
          { q: "How fast is delivery?", a: "For arbitrage leads, delivery is immediate via our daily lists. For wholesale sourcing and supplier negotiations, the process typically takes 2-4 weeks from initial research to account approval." },
          { q: "What marketplaces are supported?", a: "Currently, we focus exclusively on the Amazon U.S. marketplace to ensure the highest quality of sourcing and supplier relationships." }
        ].map((faq, idx) => (
          <details key={idx} className="group bg-white border border-gray-100 shadow-soft overflow-hidden transition-all duration-500 open:shadow-strong rounded-2xl">
            <summary className="flex items-center justify-between p-8 cursor-pointer font-bold text-lg list-none text-brand-navy uppercase tracking-wider hover:bg-brand-offwhite/50 transition-colors">
              <span className="pr-8">{faq.q}</span>
              <div className="w-10 h-10 bg-brand-navy/5 rounded-none flex items-center justify-center group-open:bg-brand-gold group-open:text-white transition-all shrink-0">
                <ChevronRight className="group-open:rotate-90 transition-transform" size={20} />
              </div>
            </summary>
            <div className="p-8 pt-0 text-brand-gray leading-relaxed border-t border-gray-50 bg-brand-offwhite/20">
              <div className="pt-8">
                {faq.a}
              </div>
            </div>
          </details>
        ))}
      </div>

          <div className="max-w-4xl mx-auto mt-20 p-12 bg-brand-navy text-center relative overflow-hidden rounded-3xl">
        <div className="absolute inset-0 opacity-5 dot-pattern" />
        <div className="relative z-10">
          <h3 className="text-3xl font-bold text-white mb-6 uppercase tracking-wider break-words">Still Have Questions?</h3>
          <p className="text-white/70 mb-10 max-w-xl mx-auto">
            Our team is ready to help you navigate your sourcing journey. Reach out to us for a personalized consultation.
          </p>
          <Link to="/contact" className="btn-accent cursor-pointer">Contact Support</Link>
        </div>
      </div>
    </section>
  </div>
);

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error("Submission failed");
        alert("There was an error sending your inquiry. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error sending your inquiry. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pb-32">
      <section className="bg-brand-navy pt-48 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 dot-pattern" />
        <div className="section-padding relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading 
              title="Connect With Our Experts" 
              subtitle="Ready to scale your Amazon business? Our senior sourcing strategists are standing by."
              light
            />
          </motion.div>
        </div>
      </section>

      <section className="section-padding -mt-20 relative z-20">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-12 shadow-2xl border border-gray-100 rounded-3xl">
              <h4 className="text-2xl font-bold text-brand-navy mb-10 uppercase tracking-wider">Contact Details</h4>
              
              <div className="space-y-12">
                <div className="flex items-start gap-6 group">
                  <div className="bg-brand-navy text-white p-4 group-hover:bg-brand-gold transition-colors duration-500">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.2em] mb-2">Call Us Directly</div>
                    <div className="text-xl font-bold text-brand-navy">307-317-8513</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-6 group">
                  <div className="bg-brand-navy text-white p-4 group-hover:bg-brand-gold transition-colors duration-500">
                    <Mail size={24} />
                  </div>
                  <div className="min-w-0 flex-grow">
                    <div className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.2em] mb-2">Email Inquiry</div>
                    <div className="text-xl font-bold text-brand-navy break-all">jerikaellc@gmail.com</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-6 group">
                  <div className="bg-brand-navy text-white p-4 group-hover:bg-brand-gold transition-colors duration-500">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.2em] mb-2">Our Headquarters</div>
                    <div className="text-xl font-bold text-brand-navy leading-tight">
                      2106 House Ave Suite 288,<br />
                      Cheyenne, WY 82001
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-brand-navy p-12 text-white relative overflow-hidden rounded-3xl">
              <div className="absolute inset-0 opacity-10 dot-pattern" />
              <div className="relative z-10">
                <h4 className="text-2xl font-bold mb-8 uppercase tracking-wider text-brand-gold">Business Hours</h4>
                <div className="space-y-4 text-xs font-bold uppercase tracking-widest opacity-80">
                  <div className="flex justify-between border-b border-white/10 pb-4">
                    <span>Monday - Friday</span>
                    <span className="text-white">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-4">
                    <span>Saturday</span>
                    <span className="text-white">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-brand-gold">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 bg-white p-10 md:p-20 shadow-2xl relative border border-gray-50 rounded-3xl">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="w-24 h-24 bg-brand-gold text-white flex items-center justify-center mx-auto mb-10 shadow-strong">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-4xl font-bold text-brand-navy mb-6 uppercase tracking-wider">Inquiry Received</h3>
                <p className="text-brand-gray text-xl mb-12 max-w-md mx-auto leading-relaxed">
                  Thank you for your interest. A senior sourcing strategist will review your business profile and contact you within 24 hours.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn-primary cursor-pointer">Send Another Inquiry</button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-navy">Full Name</label>
                    <input required name="name" type="text" className="w-full bg-brand-offwhite px-8 py-5 border-b-2 border-transparent focus:border-brand-gold outline-none transition-all font-bold text-brand-navy placeholder:text-brand-gray/40" placeholder="e.g. Alexander Pierce" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-navy">Email Address</label>
                    <input required name="email" type="email" className="w-full bg-brand-offwhite px-8 py-5 border-b-2 border-transparent focus:border-brand-gold outline-none transition-all font-bold text-brand-navy placeholder:text-brand-gray/40" placeholder="e.g. alex@company.com" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-navy">Phone Number</label>
                    <input name="phone" type="tel" className="w-full bg-brand-offwhite px-8 py-5 border-b-2 border-transparent focus:border-brand-gold outline-none transition-all font-bold text-brand-navy placeholder:text-brand-gray/40" placeholder="+1 (555) 000-0000" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-navy">Monthly Revenue</label>
                    <div className="relative">
                      <select name="revenue" className="w-full bg-brand-offwhite px-8 py-5 border-b-2 border-transparent focus:border-brand-gold outline-none transition-all font-bold text-brand-navy appearance-none cursor-pointer">
                        <option>$0 - $5,000</option>
                        <option>$5,000 - $20,000</option>
                        <option>$20,000 - $50,000</option>
                        <option>$50,000+</option>
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-brand-gold">
                        <ChevronRight className="rotate-90" size={20} />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-navy">Your Business Goals</label>
                  <textarea required name="goals" rows={5} className="w-full bg-brand-offwhite px-8 py-5 border-b-2 border-transparent focus:border-brand-gold outline-none transition-all font-bold text-brand-navy placeholder:text-brand-gray/40 resize-none" placeholder="Briefly describe your current operations and what you're looking to achieve..."></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`btn-primary w-full md:w-auto px-16 py-6 text-sm cursor-pointer shadow-xl hover:shadow-brand-gold/20 flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Processing...
                    </>
                  ) : 'Submit Inquiry'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

const BlogPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="pb-32">
      <section className="bg-brand-navy pt-48 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 dot-pattern" />
        <div className="section-padding relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading 
              title="Industry Insights" 
              subtitle="Expert strategies and updates to keep you ahead in the Amazon FBA marketplace."
              light
            />
          </motion.div>
        </div>
      </section>

      <section className="section-padding -mt-20 relative z-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {blogPosts.map((post, idx) => (
              <motion.div 
              key={post.slug} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -12 }}
              onClick={() => navigate(`/blog/${post.slug}`)}
              className="bg-white group cursor-pointer shadow-soft hover:shadow-strong transition-all duration-500 border border-gray-100 rounded-3xl flex flex-col h-full overflow-hidden"
            >
              <div className="overflow-hidden aspect-[16/10] relative">
                <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
                <div className="absolute top-4 left-4 bg-brand-gold text-white text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1">
                  {post.category}
                </div>
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <div className="text-[10px] font-bold text-brand-gray uppercase tracking-widest mb-4">{post.date}</div>
                <h3 className="text-2xl font-bold text-brand-navy mb-6 group-hover:text-brand-gold transition-colors uppercase tracking-wider leading-tight break-words">
                  {post.title}
                </h3>
                <p className="text-brand-gray text-sm leading-relaxed mb-8 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-auto flex items-center gap-2 text-brand-navy font-bold text-xs uppercase tracking-widest group-hover:text-brand-gold transition-colors">
                  Read Full Article <ArrowRight size={14} className="transition-transform group-hover:translate-x-2" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

const BlogPostPage: React.FC = () => {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="pt-48 pb-32 text-center">
        <h2 className="text-3xl font-bold text-brand-navy mb-8">Article Not Found</h2>
        <Link to="/blog" className="btn-primary">Back to Blog</Link>
      </div>
    );
  }

  return (
    <article className="pb-32">
      <header className="bg-brand-navy pt-48 pb-64 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 dot-pattern" />
        <div className="section-padding relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-block px-4 py-1 mb-8 text-[10px] font-black uppercase tracking-[0.3em] bg-white/10 text-brand-gold">
              {post.category}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight uppercase tracking-wider font-display break-words">
              {post.title}
            </h1>
            <div className="flex flex-wrap gap-8 text-white/60 text-xs font-bold uppercase tracking-widest">
              <span className="flex items-center gap-2"><Calendar size={14} className="text-brand-gold" /> {post.date}</span>
              <span className="flex items-center gap-2"><User size={14} className="text-brand-gold" /> By Jerikae Experts</span>
              <span className="flex items-center gap-2"><Tag size={14} className="text-brand-gold" /> {post.category}</span>
            </div>
          </motion.div>
        </div>
      </header>

      <div className="section-padding -mt-32 relative z-20">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 md:p-16 shadow-2xl border border-gray-50 rounded-3xl"
            >
              <div className="aspect-video overflow-hidden mb-12">
                <img src={post.img} alt={post.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div 
                className="prose prose-lg prose-brand max-w-none text-brand-gray leading-loose
                  prose-headings:text-brand-navy prose-headings:uppercase prose-headings:tracking-wider prose-headings:font-bold
                  prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-8
                  prose-p:mb-8
                  prose-strong:text-brand-navy
                  prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-8
                  prose-li:mb-2"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              <div className="mt-20 pt-10 border-t border-gray-100 flex justify-between items-center">
                <Link 
                  to="/blog"
                  className="flex items-center gap-2 text-brand-navy font-bold uppercase tracking-widest text-sm hover:text-brand-gold transition-colors"
                >
                  <ArrowRight size={16} className="rotate-180" /> Back to Insights
                </Link>
                <div className="flex gap-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-gray">Share:</span>
                  {/* Social icons could go here */}
                </div>
              </div>
            </motion.div>
          </div>

          <aside className="lg:col-span-1 space-y-12">
            <div className="bg-brand-navy p-10 text-white relative overflow-hidden rounded-3xl">
              <div className="absolute inset-0 opacity-10 dot-pattern" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 uppercase tracking-wider">Ready to Scale?</h3>
                <p className="text-white/70 mb-8 leading-relaxed">Let our experts handle your sourcing while you focus on growing your brand.</p>
                <Link to="/contact" className="btn-primary w-full inline-block text-center">Get Started Now</Link>
              </div>
            </div>

            <div className="bg-white p-10 border border-gray-100 rounded-3xl">
              <h3 className="text-xl font-bold text-brand-navy mb-8 uppercase tracking-wider border-b-2 border-brand-gold pb-4 inline-block">Recent Posts</h3>
              <div className="space-y-8">
                {blogPosts.filter(p => p.slug !== post.slug).slice(0, 3).map((recent) => (
                  <button 
                    key={recent.slug}
                    onClick={() => navigate(`/blog/${recent.slug}`)}
                    className="group text-left block"
                  >
                    <div className="text-[10px] font-bold text-brand-gold uppercase tracking-widest mb-2">{recent.date}</div>
                    <h4 className="text-sm font-bold text-brand-navy group-hover:text-brand-gold transition-colors uppercase tracking-wider leading-tight">
                      {recent.title}
                    </h4>
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
};

const LegalPage = () => (
  <div className="pb-32">
    <section className="bg-brand-navy pt-48 pb-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 dot-pattern" />
      <div className="section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading 
            title="Legal & Compliance" 
            subtitle="Our commitment to transparency, data protection, and professional standards."
            light
          />
        </motion.div>
      </div>
    </section>

    <section className="section-padding -mt-20 relative z-20">
      <div className="grid lg:grid-cols-4 gap-12">
        {/* Sticky Sidebar Nav */}
        <div className="lg:col-span-1 hidden lg:block">
          <div className="sticky top-32 space-y-4">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-gold mb-8">Navigation</div>
            <a href="#privacy" className="block text-sm font-bold uppercase tracking-widest text-brand-navy hover:text-brand-gold transition-colors border-l-2 border-brand-gold pl-4">Privacy Policy</a>
            <a href="#terms" className="block text-sm font-bold uppercase tracking-widest text-brand-gray hover:text-brand-gold transition-colors border-l-2 border-transparent pl-4">Terms of Service</a>
            <a href="#compliance" className="block text-sm font-bold uppercase tracking-widest text-brand-gray hover:text-brand-gold transition-colors border-l-2 border-transparent pl-4">Compliance</a>
          </div>
        </div>

        <div className="lg:col-span-3 bg-white p-12 md:p-20 shadow-2xl border border-gray-50 rounded-3xl">
          <div className="space-y-20 text-brand-gray leading-relaxed">
            <section id="privacy">
              <div className="flex items-center gap-6 mb-10">
                <div className="w-16 h-1 bg-brand-gold" />
                <h3 className="text-3xl font-bold text-brand-navy uppercase tracking-wider font-display">Privacy Policy</h3>
              </div>
              <div className="prose prose-brand max-w-none">
                <p className="mb-8 text-xl text-brand-navy font-medium leading-relaxed">At Jerikae LLC, we take your privacy seriously. This policy outlines how we collect, use, and protect your personal information when you use our services.</p>
                <p className="mb-6">We collect information such as your name, email, and business details only to provide you with tailored sourcing solutions. We never sell your data to third parties. Our systems are designed with high-level encryption to ensure your business data remains confidential at all times.</p>
                <p>Our data collection practices are strictly focused on enhancing your sourcing experience. We use industry-standard security protocols to safeguard your information against unauthorized access, disclosure, or alteration.</p>
              </div>
            </section>
            
            <section id="terms">
              <div className="flex items-center gap-6 mb-10">
                <div className="w-16 h-1 bg-brand-gold" />
                <h3 className="text-3xl font-bold text-brand-navy uppercase tracking-wider font-display">Terms of Service</h3>
              </div>
              <div className="prose prose-brand max-w-none">
                <p className="mb-8 text-xl text-brand-navy font-medium leading-relaxed">By using our services, you agree to comply with our terms. Our sourcing leads and supplier networks are provided for your exclusive use and should not be shared or resold.</p>
                <p className="mb-6">We strive for accuracy in all our data, but Amazon marketplace conditions can change rapidly. We do not guarantee specific financial outcomes. All partnerships are based on mutual professional respect and a commitment to ethical sourcing practices.</p>
                <p>Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account. Jerikae LLC reserves the right to terminate services for any breach of these terms.</p>
              </div>
            </section>

            <section id="compliance">
              <div className="flex items-center gap-6 mb-10">
                <div className="w-16 h-1 bg-brand-gold" />
                <h3 className="text-3xl font-bold text-brand-navy uppercase tracking-wider font-display">Compliance</h3>
              </div>
              <div className="prose prose-brand max-w-none">
                <p className="mb-6">Jerikae LLC operates in full compliance with U.S. business regulations and Amazon's Terms of Service. We prioritize ethical sourcing and transparent business practices in all our operations.</p>
                <p>Our team continuously monitors regulatory changes to ensure our sourcing strategies remain compliant and effective for our partners.</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  </div>
);

// --- Main App ---

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location.pathname]);

  const handlePostClick = (slug: string) => {
    navigate(`/blog/${slug}`);
  };

  const navLinks: { label: string, value: Page, path: string }[] = [
    { label: 'Home', value: 'home', path: '/' },
    { label: 'Services', value: 'services', path: '/services' },
    { label: 'How It Works', value: 'how-it-works', path: '/how-it-works' },
    { label: 'About', value: 'about', path: '/about' },
    { label: 'FAQ', value: 'faq', path: '/faq' },
    { label: 'Blog', value: 'blog', path: '/blog' },
    { label: 'Contact', value: 'contact', path: '/contact' }
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-brand-gold/30">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 py-1">
        <nav className="max-w-7xl mx-auto px-6 h-14 flex justify-between items-center">
          <Link to="/" className="hover:opacity-80 transition-opacity cursor-pointer">
            <Logo variant="transparent" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.value}
                to={link.path}
                className={cn(
                  "nav-link cursor-pointer",
                  location.pathname === link.path ? 'text-brand-gold after:w-full' : 'text-brand-navy'
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" className="btn-primary py-3 px-8 text-xs cursor-pointer shadow-lg hover:shadow-brand-gold/20">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-brand-navy cursor-pointer p-2 hover:bg-brand-offwhite transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-b border-gray-100 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                {navLinks.map((link) => (
                  <Link 
                    key={link.value}
                    to={link.path}
                    className={cn(
                      "text-left text-lg font-semibold cursor-pointer",
                      location.pathname === link.path ? 'text-brand-gold' : 'text-brand-navy'
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link to="/contact" className="btn-primary w-full mt-4 cursor-pointer">
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/how-it-works" element={<HowItWorksPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<BlogPage onPostClick={handlePostClick} />} />
              <Route path="/blog/:slug" element={<BlogPostPage onPostClick={handlePostClick} />} />
              <Route path="/legal" element={<LegalPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-brand-navy text-white pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 dot-pattern pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-16 mb-24 relative z-10">
          <div className="space-y-8">
            <Logo variant="dark" className="scale-150 origin-left" />
            <p className="text-white/50 leading-relaxed text-lg italic">
              "Empowering Amazon sellers with precision sourcing and data-driven insights."
            </p>
            <div className="flex gap-4">
              {/* Social placeholders could go here */}
            </div>
          </div>
          <div>
            <h4 className="font-display font-black text-xs uppercase tracking-[0.3em] mb-10 text-brand-gold">Quick Links</h4>
            <ul className="space-y-4 text-white/60 font-bold uppercase tracking-widest text-[10px]">
              {navLinks.slice(0, 4).map(link => (
                <li key={link.value}><Link to={link.path} className="hover:text-brand-gold transition-colors cursor-pointer">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-black text-xs uppercase tracking-[0.3em] mb-10 text-brand-gold">Support</h4>
            <ul className="space-y-4 text-white/60 font-bold uppercase tracking-widest text-[10px]">
              {navLinks.slice(4).map(link => (
                <li key={link.value}><Link to={link.path} className="hover:text-brand-gold transition-colors cursor-pointer">{link.label}</Link></li>
              ))}
              <li><Link to="/legal" className="hover:text-brand-gold transition-colors cursor-pointer">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-black text-xs uppercase tracking-[0.3em] mb-10 text-brand-gold">Contact Us</h4>
            <ul className="space-y-6 text-white/60 font-bold uppercase tracking-widest text-[10px]">
              <li className="flex items-start gap-4 group cursor-pointer">
                <MapPin size={18} className="text-brand-gold shrink-0 group-hover:scale-110 transition-transform" />
                <span className="leading-relaxed">2106 House Ave Suite 288, Cheyenne, WY 82001</span>
              </li>
              <li className="flex items-center gap-4 group cursor-pointer">
                <Phone size={18} className="text-brand-gold shrink-0 group-hover:scale-110 transition-transform" />
                <span>307-317-8513</span>
              </li>
              <li className="flex items-center gap-4 group cursor-pointer min-w-0">
                <Mail size={18} className="text-brand-gold shrink-0 group-hover:scale-110 transition-transform" />
                <span className="break-all">jerikaellc@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/30">
          <p>© 2026 Jerikae LLC. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link to="/legal" className="hover:text-brand-gold transition-colors cursor-pointer">Terms of Service</Link>
            <Link to="/legal" className="hover:text-brand-gold transition-colors cursor-pointer">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
