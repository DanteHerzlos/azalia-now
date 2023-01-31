import React from "react"
import cl from "@/styles/components/UI/Banner.module.scss"
import Image, { StaticImageData } from "next/image"
import SaleBadge from "./SaleBadge"
import BannerButton from "./BannerButton"

interface BannerProps {
  direction?: "Left" | "Right"
  img: StaticImageData
  title: string
  sale: string
}

const Banner: React.FC<BannerProps> = ({
  direction = "Left",
  img,
  title,
  sale,
}) => {
  return (
    <div
      className={
        direction === "Left" ? cl.banner : [cl.banner, cl._reverse].join(" ")
      }
    >
      <div
        className={
          direction === "Left"
            ? cl.banner__content
            : [cl.banner__content, cl._reverse].join(" ")
        }
      >
        <div className={cl.banner__content__sale}>
          Скидка
          <SaleBadge sale={sale} />
        </div>
        {title}
        <BannerButton
          className={
            direction === "Left"
              ? cl.banner__content__btn
              : [cl.banner__content__btn, cl._reverse].join(" ")
          }
        />
      </div>
      <Image
        className={cl.banner__img}
        src={img}
        width="185"
        height="140"
        alt=""
      />
    </div>
  )
}

export default Banner
