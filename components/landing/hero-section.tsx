"use client"

import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, Code, Lock, Zap, ChevronRight, Terminal, Cpu, Database, Network, Eye } from 'lucide-react';

export function HeroSection() {
  const { t } = useTranslation();
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = t('hero.subtitle');
  const typingSpeed = 50;
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });
  
  useEffect(() => {
    if (!isInView) return;
    
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        setCurrentIndex(prev => prev + 1);
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);
    
    return () => clearInterval(typingInterval);
  }, [fullText, currentIndex, isInView]);

  const floatingIcons = [
    { icon: Shield, delay: 0, position: { x: 100, y: 50 } },
    { icon: Code, delay: 0.5, position: { x: -80, y: 100 } },
    { icon: Lock, delay: 1, position: { x: 120, y: -30 } },
    { icon: Terminal, delay: 1.5, position: { x: -100, y: -50 } },
    { icon: Cpu, delay: 2, position: { x: 80, y: 120 } },
    { icon: Database, delay: 2.5, position: { x: -120, y: 80 } },
  ];

  return (
    <section ref={containerRef} className="relative pt-40 pb-32 md:pt-48 md:pb-40 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-8 z-10 relative"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Badge className="px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border-cyan-500/30 backdrop-blur-sm text-base">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Zap className="mr-2 h-4 w-4" />
                </motion.div>
                {t('hero.promotion')}
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl xl:text-8xl font-bold leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {t('hero.title')}
              </span>
            </motion.h1>
            
            <motion.div 
              className="h-16 flex items-center"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                {typedText}
                <motion.span 
                  className="text-cyan-400"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  |
                </motion.span>
              </p>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <Link href="/register">
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6, 182, 212, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-blue-500 hover:from-cyan-700 hover:to-blue-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-cyan-500/25">
                    {t('hero.getStarted')} 
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ChevronRight className="h-5 w-5" />
                    </motion.div>
                  </Button>
                </motion.div>
              </Link>
              <Link href="/demo">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" variant="outline" className="border-2 border-purple-500/50 hover:border-purple-400 hover:bg-purple-500/10 text-purple-300 hover:text-purple-200 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm">
                    {t('hero.tryDemo')}
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Right Content - Futuristic Terminal */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 100, rotateY: -30 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {/* Floating Icons */}
            {floatingIcons.map((item, index) => (
              <motion.div
                key={index}
                className="absolute z-0"
                style={{
                  left: `${50 + item.position.x}%`,
                  top: `${50 + item.position.y}%`,
                }}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={isInView ? { 
                  opacity: 0.3, 
                  scale: 1, 
                  rotate: 0,
                  y: [0, -20, 0],
                } : {}}
                transition={{ 
                  duration: 2, 
                  delay: item.delay,
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                <item.icon className="h-8 w-8 text-cyan-400/50" />
              </motion.div>
            ))}

            {/* Main Terminal */}
            <motion.div
              className="relative bg-black/60 backdrop-blur-xl border border-cyan-500/30 rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/20"
              whileHover={{ 
                boxShadow: "0 0 50px rgba(6, 182, 212, 0.3)",
                scale: 1.02
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Terminal Header */}
              <div className="flex items-center justify-between p-6 border-b border-cyan-500/20 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
                <div className="flex space-x-3">
                  <motion.span 
                    className="w-4 h-4 rounded-full bg-red-500"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.span 
                    className="w-4 h-4 rounded-full bg-yellow-500"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                  />
                  <motion.span 
                    className="w-4 h-4 rounded-full bg-green-500"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                  />
                </div>
                <div className="text-sm text-cyan-300 font-mono flex items-center">
                  <Terminal className="h-4 w-4 mr-2" />
                  kalium@labs:~
                </div>
              </div>
              
              {/* Terminal Content */}
              <div className="p-6 space-y-6 font-mono text-sm">
                <TerminalLine 
                  prompt="$" 
                  command="whoami" 
                  output="cybersecurity_student"
                  delay={1}
                />
                
                <TerminalLine 
                  prompt="$" 
                  command="ls -la challenges/" 
                  delay={2}
                >
                  <div className="mt-2 grid grid-cols-1 gap-2">
                    {['Pentesting_Web/', 'Cryptography/', 'Programming/', 'Network_Security/'].map((item, i) => (
                      <motion.div 
                        key={i} 
                        className="flex items-center space-x-3 text-cyan-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 2.5 + i * 0.2 }}
                      >
                        <span className="text-purple-400">drwxr-xr-x</span>
                        <span>{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </TerminalLine>
                
                <TerminalLine 
                  prompt="$" 
                  command="kalium start --challenge xss_injection" 
                  delay={4}
                >
                  <div className="mt-2 space-y-1">
                    <motion.p 
                      className="text-yellow-400"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 4.5 }}
                    >
                      Loading environment... 
                      <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                      >
                        ▊
                      </motion.span>
                    </motion.p>
                    <motion.p 
                      className="text-green-400 flex items-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 5.5 }}
                    >
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="mr-2"
                      >
                        ⚡
                      </motion.span>
                      Challenge ready! Happy hacking!
                    </motion.p>
                  </div>
                </TerminalLine>
              </div>

              {/* Bottom Glow */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-purple-500" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface TerminalLineProps {
  prompt: string;
  command: string;
  output?: string;
  children?: React.ReactNode;
  delay: number;
}

function TerminalLine({ prompt, command, output, children, delay }: TerminalLineProps) {
  const [showCommand, setShowCommand] = useState(false);
  const [showOutput, setShowOutput] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowCommand(true), delay * 1000);
    const timer2 = setTimeout(() => setShowOutput(true), (delay + 0.5) * 1000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [delay]);

  return (
    <div>
      <motion.div 
        className="flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: showCommand ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <span className="text-green-400 mr-2">{prompt}</span>
        <motion.span 
          className="text-blue-400"
          initial={{ width: 0 }}
          animate={{ width: showCommand ? "auto" : 0 }}
          transition={{ duration: 0.5 }}
        >
          {command}
        </motion.span>
      </motion.div>
      
      {(output || children) && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: showOutput ? 1 : 0, y: showOutput ? 0 : 10 }}
          transition={{ duration: 0.3 }}
        >
          {output && <p className="mt-1 text-purple-400">{output}</p>}
          {children}
        </motion.div>
      )}
    </div>
  );
}