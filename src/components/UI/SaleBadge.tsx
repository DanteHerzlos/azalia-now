import React from "react"
import SaleIcon from "../icons/SaleIcon"
import cl from "@/styles/components/UI/SaleBadge.module.scss"

interface SaleBadgeProps {
  sale: string
}

const SaleBadge: React.FC<SaleBadgeProps> = ({ sale }) => {
  return (
    <div className={cl.badge}>
      <b className={cl.badge__sale}>{sale}%</b>
      <SaleIcon />
    </div>
  )
}

export default SaleBadge
