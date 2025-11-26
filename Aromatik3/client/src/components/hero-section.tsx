import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { preloadCriticalResources } from '../utils/performance';
import { logger } from '@/utils/logger';
import { VIDEO_TIMING } from '@/utils/constants';

const safeLocalStorage = {
  getItem: (key: string): string | null => {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      logger.warn('LocalStorage getItem not available:', error);
      return null;
    }
  },
  setItem: (key: string, value: string): void => {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      logger.warn('LocalStorage setItem not available:', error);
    }
  }
};

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoEnded, setVideoEnded] = useState(false);
  const [showText, setShowText] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [shouldShowVideo, setShouldShowVideo] = useState(false);
  const [introVideoPlayed, setIntroVideoPlayed] = useState(false);
  const [showSkipButton, setShowSkipButton] = useState(false);
  
  // Refs to store scroll and header functions - accessible from anywhere in the component
  const unblockScrollRef = useRef<(() => void) | null>(null);
  const showHeaderRef = useRef<(() => void) | null>(null);
  // Ref to track all timeouts and clean them up on unmount
  const timeoutIdsRef = useRef<NodeJS.Timeout[]>([]);
  
  // Helper function to clear all scheduled timeouts
  const clearAllTimeouts = () => {
    timeoutIdsRef.current.forEach((timeoutId) => {
      clearTimeout(timeoutId);
    });
    timeoutIdsRef.current = [];
  };
  
  const scrollToNext = () => {
    document.getElementById('revelation')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Function to skip the intro
  const skipIntro = () => {
    clearAllTimeouts();
    
    const video = videoRef.current;
    if (video) {
      video.pause();
      if (!isNaN(video.duration) && video.duration > 0) {
        video.currentTime = video.duration;
      }
    }
    setVideoEnded(true);
    setShowSkipButton(false);
    setShowText(true);
    
    safeLocalStorage.setItem('introVideoPlayed', 'true');
    
    if (showHeaderRef.current) {
      showHeaderRef.current();
    }
    if (unblockScrollRef.current) {
      unblockScrollRef.current();
    }
  };

  // Check localStorage for intro video status
  useEffect(() => {
    preloadCriticalResources();
    
    // Check if the video was played before
    const videoPlayedBefore = safeLocalStorage.getItem('introVideoPlayed');
    const hasPlayedBefore = videoPlayedBefore === 'true';
    
    setIntroVideoPlayed(hasPlayedBefore);
    setShouldShowVideo(!hasPlayedBefore);
    
    // If already played before, show static content directly
    if (hasPlayedBefore) {
      setVideoEnded(true);
      setShowText(true);
      // Ensure the header is visible
      const headerElement = document.querySelector('nav');
      if (headerElement) {
        (headerElement as HTMLElement).style.transform = 'translateY(0)';
      }
      // Restore scroll
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
      document.body.style.position = 'static';
      document.body.style.top = 'auto';
      document.body.style.left = 'auto';
      document.body.style.width = 'auto';
      document.body.style.height = 'auto';
    } else {
      // Preload video only if it will be played - Single horizontal file for all devices
      const video = document.createElement('video');
      video.preload = 'metadata';
      
      // Single optimized file that adapts using object-fit: cover
      video.src = '/Brand_ID_Logo_Transformation_Animation_optimized.mp4';
      
      video.load();
    }
  }, [shouldShowVideo]);

  // Video, scroll and header control - only if video should be shown
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldShowVideo) return;

    // References for event listeners
    let preventScrollWheel: (e: Event) => void;
    let preventScrollTouch: (e: Event) => void;
    let preventScrollKeydown: (e: Event) => void;

    // Block scroll completely - multiple methods to ensure total blocking
    const blockScroll = () => {
      // Method 1: Body overflow
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      
      // Method 2: Fixed position on body to prevent any scroll
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.width = '100%';
      document.body.style.height = '100%';
      
      // Method 3: Event listeners to prevent scroll with keyboard/mouse
      preventScrollWheel = (e: Event) => {
        e.preventDefault();
        e.stopPropagation();
        return false;
      };

      preventScrollTouch = (e: Event) => {
        e.preventDefault();
        e.stopPropagation();
        return false;
      };

      preventScrollKeydown = (e: Event) => {
        const keyEvent = e as KeyboardEvent;
        // Block navigation keys: arrow keys, page up/down, space, home, end
        if ([32, 33, 34, 35, 36, 37, 38, 39, 40].includes(keyEvent.keyCode)) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }
      };

      // Block scroll events
      document.addEventListener('wheel', preventScrollWheel, { passive: false });
      document.addEventListener('touchmove', preventScrollTouch, { passive: false });
      document.addEventListener('keydown', preventScrollKeydown, { passive: false });
    };

    // Hide header during video - immediate and complete
    const hideHeader = () => {
      const header = document.querySelector('nav');
      if (header) {
        header.style.opacity = '0';
        header.style.pointerEvents = 'none';
        header.style.visibility = 'hidden';
        header.style.transform = 'translateY(-100%)';
        header.style.transition = 'all 0.1s ease-out';
      }
    };

    // Show header when video ends with cinematic transition
    const showHeader = () => {
      const header = document.querySelector('nav');
      if (header) {
        header.style.visibility = 'visible';
        header.style.transition = 'all 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        // Appear from top with smooth fade
        const timeoutId = setTimeout(() => {
          header.style.opacity = '1';
          header.style.transform = 'translateY(0)';
          header.style.pointerEvents = 'auto';
        }, 100);
        timeoutIdsRef.current.push(timeoutId);
      }
    };

    // Unblock scroll when video ends
    const unblockScroll = () => {
      // Get the position before restoring
      const scrollY = document.body.style.top;
      
      // Restore body styles
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.width = '';
      document.body.style.height = '';
      
      // Restore scroll position if there was one
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY) * -1);
      }
      
      // Remove event listeners with correct references
      if (preventScrollWheel) document.removeEventListener('wheel', preventScrollWheel);
      if (preventScrollTouch) document.removeEventListener('touchmove', preventScrollTouch);
      if (preventScrollKeydown) document.removeEventListener('keydown', preventScrollKeydown);
    };

    // Assign functions to refs so they can be accessed from anywhere
    unblockScrollRef.current = unblockScroll;
    showHeaderRef.current = showHeader;

    const handleVideoEnd = () => {
      logger.debug('Video ended - transitioning to static content');
      
      // Clear all pending timeouts before creating new ones
      clearAllTimeouts();
      
      setVideoEnded(true);
      setShowSkipButton(false);
      safeLocalStorage.setItem('introVideoPlayed', 'true');
      setIntroVideoPlayed(true);
      unblockScroll();
      
      // Longer delay for cinematic transition
      const timeoutId1 = setTimeout(() => {
        showHeader();
      }, VIDEO_TIMING.HEADER_TRANSITION_DELAY_MS);
      timeoutIdsRef.current.push(timeoutId1);
      
      // Show text after header appears
      const timeoutId2 = setTimeout(() => {
        setShowText(true);
      }, VIDEO_TIMING.TEXT_FADE_IN_DELAY_MS);
      timeoutIdsRef.current.push(timeoutId2);
    };

    // Smart handling for mobile - autoplay might fail
    const handlePlay = () => {
      logger.debug('Video started playing successfully');
    };

    const handlePause = () => {
      logger.debug('Video paused');
    };

    // Attempt to play manually if autoplay fails on mobile
    const attemptPlay = async () => {
      try {
        await video.play();
        logger.debug('Manual play successful');
      } catch (error) {
        logger.warn('Autoplay prevented, showing fallback:', error);
        
        // Clear all pending timeouts before changing state
        clearAllTimeouts();
        
        // If autoplay fails, show text immediately
        setVideoEnded(true);
        setShowText(true);
        setShowSkipButton(false);
        showHeader();
        unblockScroll();
        safeLocalStorage.setItem('introVideoPlayed', 'true');
      }
    };

    // Named function for loadedmetadata event listener
    const handleLoadedMetadata = () => {
      logger.debug('Video metadata loaded');
      // Show skip button after delay, with verification that video is still active
      const timeoutId = setTimeout(() => {
        // Only show skip button if video hasn't ended yet
        if (video && !video.ended && !video.error) {
          setShowSkipButton(true);
        }
      }, VIDEO_TIMING.SKIP_BUTTON_DELAY_MS);
      timeoutIdsRef.current.push(timeoutId);
      // Attempt to play if autoplay fails
      attemptPlay();
    };

    // Apply blocks immediately
    blockScroll();
    hideHeader();

    // Event listeners for video
    video.addEventListener('ended', handleVideoEnd);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      // Remove all event listeners
      video.removeEventListener('ended', handleVideoEnd);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      
      // Clear all timeouts to prevent state updates after unmount
      clearAllTimeouts();
      
      // Cleanup on component unmount
      unblockScroll();
      showHeader(); // Restore header on cleanup
    };
  }, [shouldShowVideo]);

  const text = "El perfume es libertad.";

  return (
    <section id="manifesto" className="min-h-screen aromatik-bg-black flex items-center justify-center relative overflow-hidden hero-video-container">
      {/* Background video - plays only if it's the first time */}
      {shouldShowVideo && (
        <>
          {/* Loading indicator while video loads */}
          {!videoLoaded && !videoError && (
            <div className="absolute top-0 left-0 w-full h-full bg-black z-30 flex items-center justify-center">
              <div className="w-12 h-12 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          {/* Fallback image if there's a video error */}
          {videoError && (
            <div 
              className="absolute top-0 left-0 w-full h-full z-0"
              style={{
                backgroundImage: `linear-gradient(45deg, #121212 0%, #1a1a1a 50%, #121212 100%)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          )}

          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            preload="metadata"
            loop={false}
            controls={false}
            disablePictureInPicture
            src="/Brand_ID_Logo_Transformation_Animation_optimized.mp4"
            className="absolute top-0 left-0 w-full h-full z-0 transition-opacity duration-1000"
            style={{
              filter: 'brightness(0.8) contrast(1.1)',
              willChange: 'opacity, transform',
              backgroundColor: '#121212',
              opacity: videoEnded ? 0 : 1,
              // Hardware acceleration
              transform: 'translate3d(0, 0, 0)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            }}
            onLoadStart={() => {
              logger.debug('Video loading started');
            }}
            onCanPlay={() => {
              logger.debug('Video can play');
              setVideoLoaded(true);
            }}
            onLoadedData={() => {
              logger.debug('Video data loaded');
            }}
            onError={(e) => {
              logger.error('Video error:', e);
              
              // Clear all pending timeouts before changing state
              clearAllTimeouts();
              
              setVideoError(true);
              // If video fails, show static content immediately
              setVideoEnded(true);
              setShowText(true);
              setShowSkipButton(false);
              
              // Use ref functions to restore scroll and header completely
              if (showHeaderRef.current) {
                showHeaderRef.current();
              }
              if (unblockScrollRef.current) {
                unblockScrollRef.current();
              }
              
              safeLocalStorage.setItem('introVideoPlayed', 'true');
            }}
            onWaiting={() => logger.debug('Video waiting for data')}
            onPlaying={() => logger.debug('Video started playing')}
            onStalled={() => logger.debug('Video stalled')}
            onSuspend={() => logger.debug('Video suspended')}
            onAbort={() => logger.debug('Video aborted')}
            onEmptied={() => logger.debug('Video emptied')}
          >
            Your browser does not support the video element.
          </video>

          {/* Black background that appears after video */}
          <div className={`absolute top-0 left-0 w-full h-full bg-black z-5 transition-opacity duration-1000 ${
            videoEnded ? 'opacity-100' : 'opacity-0'
          }`}></div>

          {/* Overlay during video */}
          <div className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 z-10 transition-opacity duration-1000 ${
            videoEnded ? 'opacity-0' : 'opacity-100'
          }`}></div>

          {/* Skip Intro Button - Discrete and elegant */}
          {showSkipButton && (
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onClick={skipIntro}
              className="absolute bottom-8 right-8 z-30 text-white text-sm font-light tracking-wide hover:text-gray-300 transition-colors duration-300 cursor-pointer"
              style={{
                fontFamily: 'Inter, sans-serif',
                letterSpacing: '0.05em',
                textShadow: '0 2px 4px rgba(0,0,0,0.5)',
              }}
            >
              Saltar Intro
            </motion.button>
          )}
        </>
      )}

      <div className="text-center max-w-5xl mx-auto px-6 md:px-8 relative z-20">
        <motion.h1 
          className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-normal text-white hero-mobile-text text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: showText ? 1 : 0 }}
          transition={{ 
            duration: 2,
            ease: "easeOut"
          }}
          style={{ 
            letterSpacing: '0.03em',
            lineHeight: '1.1',
            marginBottom: '0'
          }}
        >
          {text}
        </motion.h1>
      </div>

      <motion.div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: showText ? 1 : 0 }}
        transition={{ delay: 1, duration: 1.5 }}
        onClick={scrollToNext}
      >
        <motion.div 
          className="w-5 h-9 border border-white border-opacity-60 rounded-full flex justify-center relative"
          animate={{ 
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.div 
            className="w-0.5 h-2 bg-white bg-opacity-80 rounded-full mt-2"
            animate={{ 
              y: [0, 8, 0],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
