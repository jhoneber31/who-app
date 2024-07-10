import { useParams } from "react-router-dom"

import { useEffect, useState } from "react";

import { mockProducts, ProductsCategory } from "../../utils";
import { BodyProduct, DetailProduct, RelatedProducts } from "./components";
import { PageNotFound } from "../PageNotFound/PageNotFound";

export const ProductPage = () => {

  const [product, setProduct] = useState<ProductsCategory | null>(null)
  const [relatedProducts, setRelatedProducts] = useState<ProductsCategory[]>([])

  const { id } = useParams<{ id: string }>();

  useEffect(() => {

    const getProduct = ()=> {
      if(id) {
        const productId = parseInt(id);

        for(const category of mockProducts) {
          const foundProduct = category.products.find(product => product.id === productId);
          if(foundProduct) {
            setProduct(foundProduct);
            const productsByCategoryRelated = category.products.filter(product => product.id !== productId);
            setRelatedProducts(productsByCategoryRelated);
            break;
          }
        }
      }
    }

    getProduct();

  }, [id])
  

  return (
    <section>
      <div className="container mx-auto px-5 pt-5 pb-14">
        {
          product ? (
            <>
              <BodyProduct product={product}/>
              <DetailProduct/>
              <RelatedProducts products={relatedProducts}/>
            </>
          ) :
          <PageNotFound/>
        }
      </div>
    </section>
  )
}
