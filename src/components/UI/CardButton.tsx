import React, { useState } from "react"
import cl from "@/styles/components/UI/CardButton.module.scss"
import MinusIcon from "../icons/MinusIcon"
import PlusIcon from "../icons/PlusIcon"

interface CardButtonProps {
  inCart?: boolean
}

const CardButton: React.FC<CardButtonProps> = ({ inCart = false }) => {
  const [count, setCount] = useState<number>(1)
  const [status, setStatus] = useState<boolean>(inCart)

  return (
    <div className={cl.cardbtn}>
      <div
        onClick={() => setStatus(!status)}
        className={
          status ? [cl.cardbtn__btn, cl._incart].join(" ") : cl.cardbtn__btn
        }
      >
        В корзин{status ? "е" : "у"}
      </div>
      <div
        className={
          status ? [cl.cardbtn__count, cl._incart].join(" ") : cl.cardbtn__count
        }
      >
        <div onClick={() => setCount((prev) => (prev !== 1 ? prev - 1 : 1))}>
          <MinusIcon />
        </div>
        <span>{count}</span>
        <div onClick={() => setCount((prev) => prev + 1)}>
          <PlusIcon />
        </div>
      </div>
    </div>
  )
}

export default CardButton
