import React from "react"
import cl from "@/styles/components/UI/ArrowButton.module.scss"

const ArrowButton = () => {
  return (
    <div className={cl.btn}>
      <svg
        width="43"
        height="18"
        viewBox="0 0 43 18"
        fill="none"
        stroke="#2E2E33"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.3">
          <path d="M33 1L41 9L33 17" strokeWidth="2" strokeLinecap="round" />
          <path d="M1 9H41" strokeWidth="2" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  )
}

export default ArrowButton
