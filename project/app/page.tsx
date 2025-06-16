'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HeroSection } from '@/components/landing/hero-section';
import { FeatureSection } from '@/components/landing/feature-section';
import { Footer } from '@/components/landing/footer';
import { Navbar } from '@/components/landing/navbar';
import { Check, Crown, Terminal, Zap, Shield, Code, Lock, Sparkles, Cpu, Database } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, useMotionValue, useSpring, useTransform, useScroll, useInView } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useRef, useEffect, useState } from 'react';

export default function Home() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  const plans = [
    { 
      id: "kvip",
      name: "KVIP", 
      price: "15",
      description: "Perfect for getting started with web security",
      features: [
        "Access to Web Pentesting Lab",
        "25% discount on all courses",
        "Basic progress tracking",
        "Public leaderboard"
      ],
      icon: <Terminal className="h-6 w-6" />,
      gradient: "from-cyan-400 via-blue-500 to-purple-600"
    },
    { 
      id: "sudoer",
      name: "Sudoer", 
      price: "30",
      description: "For serious security professionals",
      features: [
        "All KVIP features",
        "45% discount on all courses",
        "Access to exclusive lab tools",
        "Priority support",
        "Private leaderboard",
        "Advanced analytics",
        "Team collaboration"
      ],
      popular: true,
      icon: <Crown className="h-6 w-6" />,
      gradient: "from-purple-400 via-pink-500 to-red-500"
    }
  ];

  const handleSubscribe = (planId: string) => {
    router.push(`/checkout?plan=${planId}`);
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
          }}
        />
        
        {/* Floating Orbs */}
        <motion.div 
          className="absolute top-20 left-20 w-96 h-96 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/2 right-20 w-80 h-80 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-1/3 w-64 h-64 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 blur-3xl"
          animate={{
            x: [0, 120, 0],
            y: [0, -40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Particle System */}
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <FeatureSection />

        {/* Futuristic Pricing Section */}
        <section id="pricing" className="py-32 relative">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Badge className="mb-6 px-6 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border-cyan-500/30 backdrop-blur-sm">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Pricing
                </Badge>
              </motion.div>
              
              <motion.h2 
                className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Choose Your Learning Path
              </motion.h2>
              
              <motion.p 
                className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Flexible plans designed to meet your learning needs. Start your journey in cybersecurity today.
              </motion.p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <FuturisticPricingCard 
                  key={index} 
                  plan={plan} 
                  onSubscribe={handleSubscribe}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

interface FuturisticPricingCardProps {
  plan: {
    id: string;
    name: string;
    price: string;
    description: string;
    features: string[];
    popular?: boolean;
    icon: React.ReactNode;
    gradient: string;
  };
  onSubscribe: (planId: string) => void;
  index: number;
}

function FuturisticPricingCard({ plan, onSubscribe, index }: FuturisticPricingCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 100, rotateX: 45 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        type: "spring",
        stiffness: 100
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group perspective-1000"
    >
      {/* Glow Effect */}
      <motion.div
        className={`absolute -inset-1 bg-gradient-to-r ${plan.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`}
        animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
      />
      
      {/* Main Card */}
      <motion.div
        className="relative bg-black/40 backdrop-blur-xl border border-gray-800/50 rounded-2xl overflow-hidden"
        animate={isHovered ? { 
          rotateY: 5,
          rotateX: 5,
          scale: 1.02
        } : { 
          rotateY: 0,
          rotateX: 0,
          scale: 1
        }}
        transition={{ duration: 0.3 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Popular Badge */}
        {plan.popular && (
          <motion.div 
            className="absolute top-0 right-0 -translate-y-1/2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm rounded-full font-semibold shadow-lg"
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, type: "spring" }}
          >
            <Sparkles className="inline h-3 w-3 mr-1" />
            Most Popular
          </motion.div>
        )}

        {/* Header */}
        <div className="p-8 pb-4">
          <div className="flex items-center space-x-4 mb-6">
            <motion.div 
              className={`p-4 rounded-xl bg-gradient-to-r ${plan.gradient} text-white shadow-lg`}
              animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
              transition={{ duration: 0.6 }}
            >
              {plan.icon}
            </motion.div>
            <div>
              <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
              <p className="text-gray-400">{plan.description}</p>
            </div>
          </div>
          
          <div className="flex items-baseline mb-6">
            <motion.span 
              className="text-5xl font-bold bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent"
              animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              ${plan.price}
            </motion.span>
            <span className="text-gray-400 ml-2 text-lg">/mo</span>
          </div>
        </div>

        {/* Features */}
        <div className="px-8 pb-8">
          <ul className="space-y-4 mb-8">
            {plan.features.map((feature, i) => (
              <motion.li 
                key={i} 
                className="flex items-center text-gray-300"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <motion.div
                  className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0"
                  animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Check className="h-5 w-5" />
                </motion.div>
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>
          
          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              className={`w-full py-4 text-lg font-semibold rounded-xl transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-gradient-to-r from-cyan-600 to-blue-500 hover:from-cyan-700 hover:to-blue-600 text-white shadow-lg shadow-cyan-500/25'
              }`}
              onClick={() => onSubscribe(plan.id)}
            >
              <motion.span
                animate={isHovered ? { x: 5 } : { x: 0 }}
                transition={{ duration: 0.2 }}
              >
                Get Started
              </motion.span>
              {plan.popular && (
                <motion.div
                  className="ml-2"
                  animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Zap className="h-5 w-5" />
                </motion.div>
              )}
            </Button>
          </motion.div>
        </div>

        {/* Bottom Glow */}
        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${plan.gradient} opacity-60`} />
      </motion.div>
    </motion.div>
  );
}