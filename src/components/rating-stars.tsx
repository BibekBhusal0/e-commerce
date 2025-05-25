import React from "react";
import { Icon } from "@iconify/react";

interface RatingStarsProps {
  rating: number;
  size?: number;
}

export const RatingStars: React.FC<RatingStarsProps> = ({ rating, size = 16 }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => {
        if (i < fullStars) {
          return <Icon key={i} icon="lucide:star" className="text-warning" width={size} />;
        } else if (i === fullStars && hasHalfStar) {
          return <Icon key={i} icon="lucide:star-half" className="text-warning" width={size} />;
        } else {
          return <Icon key={i} icon="lucide:star" className="text-default-300" width={size} />;
        }
      })}
    </div>
  );
};
