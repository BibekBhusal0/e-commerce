import { BannerCarousel } from "../../components/banner-carousel";
import { ProductCategorySection } from "../../components/product-category-section";
import { banners, products, categories } from "../../data/mock-data";

export const HomePage = () => {
  // Group products by category
  const productsByCategory = categories.reduce<Record<string, typeof products>>((acc, category) => {
    acc[category] = products.filter((product) => product.category === category);
    return acc;
  }, {});

  return (
    <div className="space-y-8">
      <BannerCarousel banners={banners} />

      {/* Featured Products */}
      <div className="mb-8">
        <ProductCategorySection
          title="Featured Products"
          products={products.filter(
            (p) => p.tags.includes("hot") || p.tags.includes("most popular")
          )}
          category="featured"
        />
      </div>

      {/* New Arrivals */}
      <div className="mb-8">
        <ProductCategorySection
          title="New Arrivals"
          products={products.filter((p) => p.tags.includes("new"))}
          category="new"
        />
      </div>

      {/* Products by Category */}
      {categories.map((category) => (
        <div key={category} className="mb-8">
          <ProductCategorySection
            title={`${category.charAt(0).toUpperCase() + category.slice(1)}`}
            products={productsByCategory[category]}
            category={category}
          />
        </div>
      ))}
    </div>
  );
};
