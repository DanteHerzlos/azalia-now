import React from "react"
import cl from "@/styles/components/BannerCard.module.scss"
import Banner from "./UI/Banner"
import ArrowButton from "./UI/ArrowButton"
import banner1 from "../../public/banner1.jpg"
import banner2 from "../../public/banner2.jpg"

interface BannerCardProps {
  title: string
}

const BannerCard: React.FC<BannerCardProps> = ({ title }) => {
  return (
    <div className={cl.card}>
      <div className={cl.card__title}>
        <h1>{title}</h1>
        <ArrowButton />
      </div>
      <div className={cl.card__banners}>
        <Banner
          direction="Right"
          title={"на товары для кабинета"}
          img={banner1}
          sale={"20"}
        />
        <Banner
          title={"на переферию для компьютера"}
          img={banner2}
          sale={"10"}
        />
      </div>
    </div>
  )
}

export default BannerCard
