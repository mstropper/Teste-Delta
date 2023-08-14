import React from "react";
import * as S from './styles'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Image1 from "../../assets/1.png";
import Image2 from "../../assets/2.png";
import Image3 from "../../assets/3.png";

export function Slider () {
    
    return (
        <S.Container>  
            <Carousel showThumbs={false} showStatus={false}>
                <S.Slider>
                    <S.Image src={Image1}/>
                </S.Slider>

                <S.Slider>
                    <S.Image src={Image2}/>
                </S.Slider>

                <S.Slider>
                    <S.Image src={Image3}/>
                </S.Slider>
            </Carousel>
        </S.Container>
    )
  }
  
  export default Slider