"use client"

import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { 
  ShieldCheck, 
  Trophy, 
  Layers, 
  Users, 
  BarChart, 
  Terminal, 
  Code, 
  Lock,
  Zap,
  Server,
  Database,
  Cpu,
  Shield,
  Crown,
  Sparkles,
  Network,
  Eye,
  Brain
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { supabase } from '@/lib/supabase-client';

export function FeatureSection() {
  const { t } = useTranslation();
  const router = useRouter();
  const featuresRef = useRef<HTMLDivElement>(null);
  const curriculumRef = useRef<HTMLDivElement>(null);
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const curriculumInView = useInView(curriculumRef, { once: true, margin: "-100px" });

  const handleViewChallenges = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (session) {
      router.push('/dashboard');
    } else {
      router.push('/login');
    }
  };

  const features = [
    {
      icon: <Terminal className="h-7 w-7" />,
      title: t('features.items.challenges.title'),
      description: t('features.items.challenges.description'),
      gradient: "from-cyan-500 to-blue-600",
      delay: 0
    },
    {
      icon: <Trophy className="h-7 w-7" />,
      title: t('features.items.progression.title'),
      description: t('features.items.progression.description'),
      gradient: "from-yellow-500 to-orange-600",
      delay: 0.1
    },
    {
      icon: <Users className="h-7 w-7" />,
      title: t('features.items.community.title'),
      description: t('features.items.community.description'),
      gradient: "from-purple-500 to-pink-600",
      delay: 0.2
    },
    {
      icon: <BarChart className="h-7 w-7" />,
      title: t('features.items.analytics.title'),
      description: t('features.items.analytics.description'),
      gradient: "from-green-500 to-emerald-600",
      delay: 0.3
    },
    {
      icon: <Shield className="h-7 w-7" />,
      title: t('features.items.disciplines.title'),
      description: t('features.items.disciplines.description'),
      gradient: "from-red-500 to-pink-600",
      delay: 0.4
    },
    {
      icon: <Layers className="h-7 w-7" />,
      title: t('features.items.paths.title'),
      description: t('features.items.paths.description'),
      gradient: "from-indigo-500 to-purple-600",
      delay: 0.5
    }
  ];

  const categories = [
    { 
      title: t('curriculum.categories.pentesting.title'),
      icon: <Server className="h-12 w-12" />,
      items: t('curriculum.categories.pentesting.items', { returnObjects: true }) || [],
      gradient: "from-cyan-400 via-blue-500 to-purple-600",
      delay: 0
    },
    { 
      title: t('curriculum.categories.programming.title'),
      icon: <Code className="h-12 w-12" />,
      items: t('curriculum.categories.programming.items', { returnObjects: true }) || [],
      gradient: "from-blue-400 via-purple-500 to-pink-600",
      delay: 0.2
    },
    { 
      title: t('curriculum.categories.cryptography.title'),
      icon: <Lock className="h-12 w-12" />,
      items: t('curriculum.categories.cryptography.items', { returnObjects: true }) || [],
      gradient: "from-green-400 via-emerald-500 to-cyan-600",
      delay: 0.4,
      beta: true
    }
  ];

  return (
    <>
      <section ref={featuresRef} id="features" className="py-32 relative">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={featuresInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Badge className="mb-6 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border-blue-500/30 backdrop-blur-sm text-base">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Zap className="mr-2 h-4 w-4" />
                </motion.div>
                {t('nav.features')}
              </Badge>
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {t('features.title')}
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t('features.description')}
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} inView={featuresInView} />
            ))}
          </div>
        </div>
      </section>
      
      <section ref={curriculumRef} id="curriculum" className="py-32 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={curriculumInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0, rotate: 180 }}
              animate={curriculumInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Badge className="mb-6 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-300 border-purple-500/30 backdrop-blur-sm text-base">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Cpu className="mr-2 h-4 w-4" />
                </motion.div>
                {t('nav.curriculum')}
              </Badge>
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={curriculumInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-purple-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {t('curriculum.title')}
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={curriculumInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t('curriculum.description')}
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <CurriculumCard 
                key={index} 
                category={category} 
                inView={curriculumInView}
                onViewChallenges={handleViewChallenges}
                t={t}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

interface FeatureCardProps {
  feature: {
    icon: React.ReactNode;
    title: string;
    description: string;
    gradient: string;
    delay: number;
  };
  inView: boolean;
}

function FeatureCard({ feature, inView }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: 45 }}
      animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ 
        duration: 0.6, 
        delay: feature.delay,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.05,
        rotateY: 5,
        rotateX: 5
      }}
      className="group perspective-1000"
    >
      <div className="relative">
        <div className={`absolute -inset-1 bg-gradient-to-r ${feature.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
        <Card className="relative bg-black/40 backdrop-blur-xl border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300 rounded-2xl overflow-hidden">
          <CardHeader className="pb-4">
            <motion.div 
              className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${feature.gradient} text-white mb-4 w-fit shadow-lg`}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              {feature.icon}
            </motion.div>
            <CardTitle className="text-xl text-white group-hover:text-cyan-300 transition-colors">
              {feature.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-300 leading-relaxed">
              {feature.description}
            </CardDescription>
          </CardContent>
          <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} opacity-60`} />
        </Card>
      </div>
    </motion.div>
  );
}

interface CurriculumCardProps {
  category: {
    title: string;
    icon: React.ReactNode;
    items: string[];
    gradient: string;
    delay: number;
    beta?: boolean;
  };
  inView: boolean;
  onViewChallenges: () => void;
  t: (key: string) => string;
}

function CurriculumCard({ category, inView, onViewChallenges, t }: CurriculumCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, rotateX: 45 }}
      animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ 
        duration: 0.8, 
        delay: category.delay,
        type: "spring",
        stiffness: 80
      }}
      whileHover={{ 
        scale: 1.02,
        rotateY: 5,
        rotateX: 5
      }}
      className="group perspective-1000"
    >
      <div className="relative h-full">
        <div className={`absolute -inset-1 bg-gradient-to-r ${category.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
        <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl border border-gray-800/50 h-full flex flex-col overflow-hidden">
          {category.beta && (
            <motion.div 
              className="absolute top-4 right-4 z-10"
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              <Badge variant="outline" className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-300 border-yellow-500/30 backdrop-blur-sm">
                <Crown className="mr-1 h-3 w-3" />
                Coming Soon Beta Access
              </Badge>
            </motion.div>
          )}
          <div className="p-8 pb-4">
            <div className="flex items-center space-x-4 mb-6">
              <motion.div 
                className={`p-4 rounded-xl bg-gradient-to-r ${category.gradient} text-white shadow-lg`}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                {category.icon}
              </motion.div>
              <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                {category.title}
              </h3>
            </div>
          </div>
          <div className="px-8 pb-8 flex-grow flex flex-col">
            <ul className="space-y-3 mb-8 flex-grow">
              {(Array.isArray(category.items) ? category.items : []).map((item: string, i: number) => (
                <motion.li 
                  key={i} 
                  className="flex items-center text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: category.delay + 0.1 + i * 0.1 }}
                >
                  <motion.span 
                    className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 mr-3 flex-shrink-0"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                  />
                  <span className="group-hover:text-white transition-colors">{item}</span>
                </motion.li>
              ))}
            </ul>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                variant="outline" 
                className={`w-full border-2 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent border-gray-700/50 hover:border-gray-600/50 hover:bg-white/5 backdrop-blur-sm py-3 rounded-xl font-semibold transition-all duration-300`}
                onClick={onViewChallenges}
              >
                <motion.span
                  className="bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                >
                  {t('curriculum.viewChallenges')}
                </motion.span>
              </Button>
            </motion.div>
          </div>
          <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${category.gradient} opacity-60`} />
        </div>
      </div>
    </motion.div>
  );
}
