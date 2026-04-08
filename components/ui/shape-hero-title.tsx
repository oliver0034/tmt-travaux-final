"use client";

import { motion, type Variants } from "framer-motion";

function ElegantShape({
  className,
  delay = 0,
  width = 300,
  height = 100,
  rotate = 0,
  gradient = "from-gold/20",
  borderRadius = 16,
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
  borderRadius?: number;
}) {
  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ opacity: 0, y: -120, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
    >
      <motion.div
        className="relative"
        style={{ width, height }}
        animate={{ y: [0, 12, 0] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-r ${gradient} to-transparent backdrop-blur-[1px] ring-1 ring-white/[0.04]`}
          style={{ borderRadius }}
        />
      </motion.div>
    </motion.div>
  );
}

interface ShapeHeroTitleProps {
  badge?: string;
  line1: string;
  line2: string;
  description?: string;
  children?: React.ReactNode;
}

export default function ShapeHeroTitle({
  badge,
  line1,
  line2,
  description,
  children,
}: ShapeHeroTitleProps) {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        delay: 0.4 + i * 0.18,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <div className="relative overflow-hidden">
      {/* Formes flottantes en arrière-plan */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grand rectangle incliné — gauche */}
        <ElegantShape
          className="top-[-5%] left-[-8%]"
          delay={0.2}
          width={280}
          height={420}
          rotate={-10}
          gradient="from-gold/[0.18]"
          borderRadius={28}
        />
        {/* Rectangle horizontal — droite bas */}
        <ElegantShape
          className="bottom-[-8%] right-[-10%]"
          delay={0.4}
          width={480}
          height={160}
          rotate={12}
          gradient="from-amber-400/[0.15]"
          borderRadius={20}
        />
        {/* Carré moyen — milieu gauche */}
        <ElegantShape
          className="top-[35%] left-[-3%]"
          delay={0.3}
          width={220}
          height={220}
          rotate={20}
          gradient="from-gold/[0.12]"
          borderRadius={32}
        />
        {/* Petit rectangle — haut droite */}
        <ElegantShape
          className="top-[8%] right-[8%]"
          delay={0.55}
          width={200}
          height={80}
          rotate={-18}
          gradient="from-yellow-500/[0.14]"
          borderRadius={12}
        />
        {/* Rectangle moyen — milieu droit */}
        <ElegantShape
          className="top-[40%] right-[-6%]"
          delay={0.65}
          width={320}
          height={130}
          rotate={30}
          gradient="from-gold/[0.10]"
          borderRadius={18}
        />
        {/* Petit carré — bas gauche */}
        <ElegantShape
          className="bottom-[8%] left-[18%]"
          delay={0.15}
          width={170}
          height={170}
          rotate={-22}
          gradient="from-amber-300/[0.13]"
          borderRadius={24}
        />
      </div>

      {/* Contenu */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          {badge && (
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-6"
            >
              <span className="text-xs font-medium text-gold uppercase tracking-widest">
                {badge}
              </span>
            </motion.div>
          )}

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight"
          >
            <span className="text-white-warm">{line1} </span>
            <span
              style={{
                background: "linear-gradient(135deg, #C9A227 0%, #F0D060 45%, #C9A227 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {line2}
            </span>
          </motion.h1>

          {description && (
            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-6 text-lg text-white-warm/70 leading-relaxed max-w-2xl"
            >
              {description}
            </motion.p>
          )}

          {children && (
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
