import React, { useState } from "react"
import cl from "@/styles/components/ProductCard.module.scss"
import Image from "next/image"
import CardButton from "./UI/CardButton"
import FavoriteButton from "./UI/FavoriteButton"
import PriceLabel from "./UI/PriceLabel"
import Reviews from "./UI/Reviews"
import { IProduct } from "@/types/IProduct"
import HitIcons from "./icons/HitIcon"

interface ProductCardProps {
  product: IProduct
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false)
  return (
    <div className={cl.card}>
      {product.rating.count >= 300 && (
        <div className={cl.card__hit}>
          <HitIcons />
        </div>
      )}
      <div className={cl.card__img_box}>
        {product.image && (
          <Image className={cl.card__img_box__img} src={product.image} width={220} height={220} alt="" />
        )}
      </div>
      <div className={cl.card__category_rate}>
        {product.category && (
          <span className={cl.card__category}>{product.category}</span>
        )}
        {product.rating && (
          <Reviews rate={product.rating.rate} reviews={product.rating.count} />
        )}
      </div>
      {product.title && <p className={cl.card__title}>{product.title}</p>}
      {product.price && <PriceLabel price={product.price} />}
      <div className={cl.card__btns}>
        <CardButton />
        <FavoriteButton
          active={isFavorite}
          onClick={() => setIsFavorite(!isFavorite)}
        />
      </div>
    </div>
  )
}

export default ProductCard
