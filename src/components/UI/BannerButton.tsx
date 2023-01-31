import React from "react"
import CircleIcon from "../icons/CircleIcon"
import cl from "@/styles/components/UI/BannerButton.module.scss"

interface BannerButtonProps {
  className?: string
}

const BannerButton: React.FC<BannerButtonProps> = ({ className }) => {
  return (
    <div className={[className, cl.btn].join(" ")}>
      <span className={cl.btn__text}>Выбрать</span>
      <CircleIcon className={cl.btn__icon} />
    </div>
  )
}

export default BannerButton
