import { motion } from 'framer-motion';

export const LoginButton = () => (
  <motion.a
    href="#contact"
    className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.35em] text-white/80 backdrop-blur transition hover:border-gold-light/80 hover:text-gold-light"
    whileHover={{ scale: 1.04 }}
    whileTap={{ scale: 0.98 }}
  >
    Login
  </motion.a>
);
