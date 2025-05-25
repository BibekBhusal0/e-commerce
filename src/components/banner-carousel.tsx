import React from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { Banner } from "../types";
import { motion } from "framer-motion";

interface BannerCarouselProps {
  banners: Banner[];
}

export const BannerCarousel: React.FC<BannerCarouselProps> = ({ banners }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);
  };
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="relative w-full h-[350px] sm:h-[450px] overflow-hidden rounded-lg">
      {banners.map((banner, index) => (
        <motion.div
          key={banner.id}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: index === currentIndex ? 1 : 0,
            zIndex: index === currentIndex ? 10 : 0
          }}
          transition={{ duration: 0.5 }}
        >
          <div 
            className="w-full h-full bg-cover bg-center relative"
            style={{ backgroundImage: `url(${banner.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex flex-col justify-center px-6 sm:px-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: index === currentIndex ? 1 : 0, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="bg-primary text-white text-xs px-3 py-1 rounded-full mb-3 inline-block">Limited Offer</span>
                <h2 className="text-white text-2xl sm:text-4xl font-bold mb-3">{banner.title}</h2>
                <p className="text-white/90 text-sm sm:text-base max-w-md mb-6">{banner.description}</p>
                <div className="flex gap-3">
                  <Button 
                    color="primary" 
                    className="w-fit"
                    endContent={<Icon icon="lucide:arrow-right" width={16} />}
                  >
                    Shop Now
                  </Button>
                  <Button 
                    variant="bordered" 
                    className="w-fit text-white border-white"
                  >
                    Learn More
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      ))}
      
      <Button
        isIconOnly
        variant="flat"
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/30 backdrop-blur-md hover:bg-white/50"
        onPress={prevSlide}
        aria-label="Previous slide"
      >
        <Icon icon="lucide:chevron-left" width={20} />
      </Button>
      
      <Button
        isIconOnly
        variant="flat"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/30 backdrop-blur-md hover:bg-white/50"
        onPress={nextSlide}
        aria-label="Next slide"
      >
        <Icon icon="lucide:chevron-right" width={20} />
      </Button>
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-1">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-primary w-4" : "bg-white/50"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};