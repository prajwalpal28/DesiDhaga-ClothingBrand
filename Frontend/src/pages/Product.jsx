import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';
import { Breadcrum } from '../components/Breadcrums/Breadcrum';
import { ProductDisplay } from '../components/ProductDisplay/ProductDisplay';
import { DescriptionBox } from '../components/DescriptionBox/DescriptionBox';
import { RelatedProduct } from '../components/RelatedProduct/RelatedProduct';

export const Product = () => {
  const { data_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = data_product.find((e) => e.id === Number(productId));

  // If product is not found, render a fallback UI
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox/>
      <RelatedProduct/>
    </div>
  );
};

export default Product;
