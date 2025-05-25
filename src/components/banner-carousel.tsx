import React from "react";
import { Button, cn } from "@heroui/react";
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
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative group h-[350px] w-full overflow-hidden rounded-lg sm:h-[450px]">
      {banners.map((banner, index) => (
        <motion.div
          key={banner.id}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{
            opacity: index === currentIndex ? 1 : 0,
            zIndex: index === currentIndex ? 10 : 0,
          }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="relative h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${banner.image})` }}
          >
            <div className="absolute inset-0 flex flex-col justify-center bg-gradient-to-r from-black/70 to-transparent px-6 sm:px-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: index === currentIndex ? 1 : 0, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="mb-3 inline-block rounded-full bg-primary px-3 py-1 text-xs text-white">
                  Limited Offer
                </span>
                <h2 className="mb-3 text-2xl font-bold text-white sm:text-4xl">{banner.title}</h2>
                <p className="mb-6 max-w-md text-sm text-white/90 sm:text-base">
                  {banner.description}
                </p>
                <div className="flex gap-3">
                  <Button
                    color="primary"
                    className="w-fit"
                    endContent={<Icon icon="lucide:arrow-right" width={16} />}
                  >
                    Shop Now
                  </Button>
                  <Button variant="bordered" className="w-fit border-white text-white">
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
        className="absolute left-2 top-1/2 z-20 -translate-y-1/2 hidden group-hover:flex"
        onPress={prevSlide}
        aria-label="Previous slide"
      >
        <Icon icon="lucide:chevron-left" width={20} />
      </Button>

      <Button
        isIconOnly
        variant="flat"
        className="absolute right-2 top-1/2 z-20 -translate-y-1/2 hidden group-hover:flex"
        onPress={nextSlide}
        aria-label="Next slide"
      >
        <Icon icon="lucide:chevron-right" width={20} />
      </Button>

      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-1">
        {banners.map((_, index) => (
          <button
            key={index}
            className={cn("h-2 w-2 rounded-full transition-all" ,
              index === currentIndex ? "w-4 bg-primary" : "bg-white/50"
            )
            }
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
