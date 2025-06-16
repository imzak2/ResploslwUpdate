'use client';

import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { Terminal, Github, Twitter, Linkedin, Heart, Zap, Shield, Code } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const links = {
    resources: [
      {
        name: t('footer.sections.resources.items.documentation'),
        href: '/resources/documentation',
      },
      {
        name: t('footer.sections.resources.items.blog'),
        href: '/resources/blog',
      },
      {
        name: t('footer.sections.resources.items.community'),
        href: '/resources/community',
      },
    ],
    company: [
      {
        name: t('footer.sections.company.items.about'),
        href: '/company/about',
      },
      {
        name: t('footer.sections.company.items.careers'),
        href: '/company/careers',
      },
      {
        name: t('footer.sections.company.items.contact'),
        href: '/company/contact',
      },
      {
        name: t('footer.sections.company.items.privacy'),
        href: '/company/privacy',
      },
    ],
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="relative bg-black/60 backdrop-blur-xl border-t border-cyan-500/20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 mb-6 group"
            >
              <motion.div
                className="relative"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Terminal className="h-8 w-8 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <motion.div
                  className="absolute inset-0 rounded-full bg-cyan-400/20 blur-md"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              <span className="font-bold text-2xl bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                KaliumLabs
              </span>
            </motion.div>
            
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              {t('footer.description')}
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="group relative p-3 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  <social.icon className="h-5 w-5 text-gray-400 group-hover:text-cyan-300 transition-colors" />
                  <span className="sr-only">{social.label}</span>
                  
                  {/* Hover Glow */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Resources Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-4 text-white flex items-center">
              <Code className="h-4 w-4 mr-2 text-cyan-400" />
              {t('footer.sections.resources.title')}
            </h3>
            <ul className="space-y-3">
              {links.resources.map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-300 transition-colors duration-300 flex items-center group"
                  >
                    <motion.span
                      className="w-1 h-1 rounded-full bg-cyan-400 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.5 }}
                    />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-4 text-white flex items-center">
              <Shield className="h-4 w-4 mr-2 text-purple-400" />
              {t('footer.sections.company.title')}
            </h3>
            <ul className="space-y-3">
              {links.company.map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-purple-300 transition-colors duration-300 flex items-center group"
                  >
                    <motion.span
                      className="w-1 h-1 rounded-full bg-purple-400 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.5 }}
                    />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Separator className="my-8 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
        </motion.div>

        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-gray-400">
            {t('footer.copyright', { year: currentYear })}
          </p>
          <motion.p 
            className="text-sm text-gray-400 mt-2 md:mt-0 flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            {t('footer.builtWith')}
            <motion.span
              className="ml-1"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="h-4 w-4 text-red-400" />
            </motion.span>
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-60" />
    </footer>
  );
}