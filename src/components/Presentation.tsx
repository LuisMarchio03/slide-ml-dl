import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaPlay, FaPause } from 'react-icons/fa';
import type { SlideData } from '../types';

interface SlideProps {
  slide: SlideData;
  isActive: boolean;
  onDragEnd?: (event: any, info: any) => void;
}

const Slide: React.FC<SlideProps> = ({ slide, isActive, onDragEnd }) => {
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const getSlideContent = () => {
    switch (slide.type) {
      case 'intro':
        return (
          <motion.div 
            className="intro-slide"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="slide-title"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {slide.title}
            </motion.h1>
            <motion.div 
              className="intro-content"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {slide.content.map((item, index) => (
                <motion.p
                  key={index}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 + index * 0.2 }}
                  className="intro-item"
                >
                  {item}
                </motion.p>
              ))}
            </motion.div>
            {/* {slide.duration && (
              <motion.div 
                className="duration-badge"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5 }}
              >
                {slide.duration}
              </motion.div>
            )} */}
          </motion.div>
        );

      case 'explanation':
        return (
          <motion.div 
            className="explanation-slide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2 
              className="slide-title"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {slide.title}
            </motion.h2>
            <motion.ul 
              className="explanation-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {slide.content.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.3 }}
                  className="explanation-item"
                >
                  <span className="bullet">•</span>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            {/* {slide.duration && (
              <motion.div 
                className="duration-badge"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1 }}
              >
                {slide.duration}
              </motion.div>
            )} */}
          </motion.div>
        );

      case 'practical':
        return (
          <motion.div 
            className="practical-slide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2 
              className="slide-title"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {slide.title}
            </motion.h2>
            {slide.practicalExample && (
              <motion.div 
                className="practical-content"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="example-title">{slide.practicalExample.title}</h3>
                <p className="example-description">{slide.practicalExample.description}</p>
                <div className="visualization-wrapper">
                  <slide.practicalExample.visualization />
                </div>
              </motion.div>
            )}
          </motion.div>
        );

      case 'conclusion':
        return (
          <motion.div 
            className="conclusion-slide"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="slide-title"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {slide.title}
            </motion.h2>
            <motion.div 
              className="conclusion-content"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {slide.content.map((item, index) => (
                <motion.p
                  key={index}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 + index * 0.2 }}
                  className="conclusion-item"
                >
                  ✓ {item}
                </motion.p>
              ))}
            </motion.div>
            {slide.animations?.elements && (
              <motion.div 
                className="conclusion-image"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <img src={slide.animations.elements[0]} alt="Conclusão" style={{ maxWidth: '100%', height: 'auto' }} />
              </motion.div>
            )}
            {/* {slide.duration && (
              <motion.div 
                className="duration-badge"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5 }}
              >
                {slide.duration}
              </motion.div>
            )} */}
          </motion.div>
        );

      default:
        return <div>Slide type not supported</div>;
    }
  };

  if (!isActive) return null;

  return (
    <motion.div
      className={`slide slide-${slide.type}`}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.2}
      onDragEnd={onDragEnd}
    >
      {getSlideContent()}
    </motion.div>
  );
};

interface PresentationProps {
  slides: SlideData[];
}

export const Presentation: React.FC<PresentationProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  // Touch gesture handlers
  const handleDragEnd = (_event: any, info: any) => {
    const threshold = 100;
    if (info.offset.x > threshold) {
      prevSlide();
    } else if (info.offset.x < -threshold) {
      nextSlide();
    }
  };

  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay, currentSlide]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowRight':
        case ' ':
          event.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
          event.preventDefault();
          prevSlide();
          break;
        case 'Escape':
          setIsAutoPlay(false);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div className="presentation-container">
      <div className="presentation-header">
        <div className="slide-counter">
          {currentSlide + 1} / {slides.length}
        </div>
        <div className="presentation-controls">
          <button
            className="control-btn"
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            title={isAutoPlay ? 'Pausar apresentação' : 'Iniciar apresentação automática'}
          >
            {isAutoPlay ? <FaPause /> : <FaPlay />}
          </button>
        </div>
      </div>

      <div className="slides-container">
        <AnimatePresence mode="wait" custom={direction}>
          <Slide
            key={currentSlide}
            slide={slides[currentSlide]}
            isActive={true}
            onDragEnd={handleDragEnd}
          />
        </AnimatePresence>
      </div>

      <div className="presentation-footer">
        <button 
          className="nav-btn prev-btn"
          onClick={prevSlide}
          disabled={currentSlide === 0}
          title="Slide anterior (←)"
        >
          <FaArrowLeft />
        </button>

        <div className="slide-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              title={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>

        <button 
          className="nav-btn next-btn"
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          title="Próximo slide (→)"
        >
          <FaArrowRight />
        </button>
      </div>

      <div className="keyboard-hints">
        <span>← → Navegar</span>
        <span>Espaço: Próximo</span>
        <span>Esc: Parar auto-play</span>
      </div>
    </div>
  );
};
