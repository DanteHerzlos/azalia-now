import { IProduct } from "@/types/IProduct"
import React from "react"
import ProductCard from "./ProductCard"
import cl from "@/styles/components/ProductList.module.scss"
import BannerCard from "./BannerCard"

interface ProductListProps {
  products: IProduct[]
  title: string
}

const ProductList: React.FC<ProductListProps> = ({ products, title }) => {
  return (
    <div className={cl.product_list}>
      <BannerCard title={title}/>
      {products.length !== 0 &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  )
}

export default ProductList
