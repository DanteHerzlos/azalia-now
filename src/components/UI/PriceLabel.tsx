import React from "react"
import cl from "@/styles/components/UI/PriceLabel.module.scss"

interface PriceLabelProps {
  price: number
}
const PriceLabel: React.FC<PriceLabelProps> = ({price}) => {
  return (
    <div className={cl.label}>
      <span className={cl.label__price}>{(price * 70).toFixed(2)} ₽</span>
      <span className={cl.label__item}>/шт.</span>
    </div>
  )
}

export default PriceLabel
