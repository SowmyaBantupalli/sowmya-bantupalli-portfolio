import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}

const Card = ({ children, className = '', hover = true, glass = false }: CardProps) => {
  const baseClasses = glass
    ? 'bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6'
    : 'bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-2xl p-6 shadow-sm';

  return (
    <motion.div
      className={`${baseClasses} ${className}`}
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default Card;
