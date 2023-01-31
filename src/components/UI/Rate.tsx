import React from 'react'
import StarIcon from '../icons/StarIcon'
import cl from "@/styles/components/UI/Rate.module.scss"

interface RateProps {
  rate: number
}

const Rate:React.FC<RateProps> = ({rate}) => {
  const activeStars = Math.round(rate)

  return (
    <span className={cl.rate}>
      <StarIcon active={activeStars >= 1} />
      <StarIcon active={activeStars >= 2} />
      <StarIcon active={activeStars >= 3} />
      <StarIcon active={activeStars >= 4} />
      <StarIcon active={activeStars === 5} />
    </span>
  )
}

export default Rate