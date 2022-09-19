import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { CategoriesContext } from "../../contexts/categories.context";
import { selectCategoriesMap } from "../../store/categories/categoriesSelector";

import ProductCard from "../../components/product-card/product-card.component";

import "./category.styles.scss";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  // const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProduts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProduts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <h2 className="category-title">
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default Category;
