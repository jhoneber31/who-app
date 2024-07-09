import { useParams } from "react-router-dom"

import { useEffect, useState } from "react";

import { mockProducts, ProductsCategory } from "../../utils";
import { BodyProduct, DetailProduct, RelatedProducts } from "./components";

export const ProductPage = () => {

  const [product, setProduct] = useState<ProductsCategory | null>(null)

  const { id } = useParams<{ id: string }>();

  useEffect(() => {

    const getProduct = ()=> {
      if(id) {
        const productId = parseInt(id);

        for(const category of mockProducts) {
          const foundProduct = category.products.find(product => product.id === productId);
          if(foundProduct) {
            setProduct(foundProduct);
            break;
          }
        }
      }
    }

    getProduct();

  }, [id])
  

  return (
    <section>
      <div className="container mx-auto px-5 py-5">
        {
          product ? (
            <>
              <BodyProduct product={product}/>
              <DetailProduct/>
              <RelatedProducts/>
            </>
          ) :
          <div>
            <h3>Product not found</h3>
          </div>
        }
      </div>
    </section>
  )
}
