import { useContext } from "react";

import { ProductContext } from "../../contexts/products.context";

import ProductCard from "../../components/product-card/product-card.componenet";

import "./shop.styles.scss";

const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} props={product} />
      ))}
    </div>
  );
};

export default Shop;