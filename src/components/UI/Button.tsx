import React, { ReactElement } from "react"
import cl from "@/styles/components/UI/Button.module.scss"

interface ButtonProps {
  children?: ReactElement | string
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return <div className={cl.btn}>{children}</div>
}

export default Button
