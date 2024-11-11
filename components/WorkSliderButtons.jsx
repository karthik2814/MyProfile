"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi'

const WorkSliderButtons = ({containerStyles,buttonStyles, iconStyles}) => {
    const swiper = useSwiper();
    return (
    <div className={containerStyles}>
        <button className={buttonStyles} onClick={()=>swiper.slidePrev()}>
            <PiCaretLeftBold className={iconStyles}/>
        </button>
        <button className={buttonStyles}>
            <PiCaretRightBold className={iconStyles} onClick={()=>swiper.slideNext()} />
        </button>
    </div>
  )
}

export default WorkSliderButtons