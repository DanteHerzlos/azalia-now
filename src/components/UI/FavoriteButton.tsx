import React from "react"
import FavoriteIcon from "../icons/FavoriteIcon"
import cl from "@/styles/components/UI/FavoriteButton.module.scss"

interface FavoriteButtonProps {
  active?: boolean
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  active = false,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={active ? [cl.btn, cl._active].join(" ") : cl.btn}
    >
      <FavoriteIcon active={active} className={cl.btn_icon} />
    </div>
  )
}

export default FavoriteButton
