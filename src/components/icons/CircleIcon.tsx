import React from "react"

interface CircleIconProps {
  className?: string
}

const CircleIcon: React.FC<CircleIconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="-1"
        y="1"
        width="18"
        height="18"
        rx="9"
        transform="matrix(-1 0 0 1 18 0)"
        stroke="white"
        strokeWidth="2"
      />
    </svg>
  )
}

export default CircleIcon
