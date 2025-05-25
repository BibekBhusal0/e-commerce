import { ProductTag } from "../types";

export type TagStyle = {
  color: string;
  gradient: string;
  icon: string;
};

export const tagStyles: Record<ProductTag, TagStyle> = {
  new: {
    color: "success",
    gradient: "from-green-400 to-emerald-600",
    icon: "lucide:sparkles",
  },
  hot: {
    color: "danger",
    gradient: "from-red-400 to-rose-600",
    icon: "lucide:flame",
  },
  "30% off": {
    color: "warning",
    gradient: "from-amber-400 to-orange-600",
    icon: "lucide:tag",
  },
  "most popular": {
    color: "secondary",
    gradient: "from-purple-400 to-violet-600",
    icon: "lucide:trending-up",
  },
};

const default_tag: TagStyle = {
  color: "default",
  gradient: "from-blue-400 to-indigo-600",
  icon: "",
}

export const getTagColor = (tag: ProductTag): TagStyle => {
  return tagStyles[tag] || default_tag
}


