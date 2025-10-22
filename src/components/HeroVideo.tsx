import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface HeroVideoProps {
  src: string;
  poster?: string;
  opacity?: number;
}

export const HeroVideo = ({ src, poster, opacity = 0.6 }: HeroVideoProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onCanPlay = () => {
      setIsReady(true);
      if (video.paused) {
        void video.play().catch(() => {
          /* autoplay may be blocked; ignore */
        });
      }
    };

    video.addEventListener('canplay', onCanPlay);

    return () => {
      video.removeEventListener('canplay', onCanPlay);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="absolute inset-0 overflow-hidden"
      aria-hidden={true}
    >
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        style={{ opacity }}
      />
      {!isReady && poster ? (
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={poster}
          alt="Hero background placeholder"
        />
      ) : null}
      <div className="video-overlay" />
    </motion.div>
  );
};
