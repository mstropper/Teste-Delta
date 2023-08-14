import React from "react";
import * as S from './styles'

import Image1 from "../../assets/4.png";
import Image2 from "../../assets/5.png";
import Image3 from "../../assets/6.png";
import Avatar from "../../assets/7.jpg";

export function Card () {
    
    return (
        <S.Container>  
            <S.Card>
                <S.Image src={Image1}/>

                <S.Title>
                Lorem ipsum dolor sit amet,
                <br />
                consetetur sadipscing elitr,
                <br />
                sed diam
                </S.Title>

                <S.Align>
                    <S.Avatar src={Avatar}/>
                    <S.Text>Matheus Hetkowski Stropper <br/> 15  de abril de 1998</S.Text>
                </S.Align>
            </S.Card>

            <S.Card>
                <S.Image src={Image2}/>

                <S.Title>
                Lorem ipsum dolor sit amet,
                <br />
                consetetur sadipscing elitr,
                <br />
                sed diam
                </S.Title>

                <S.Align>
                    <S.Avatar src={Avatar}/>
                    <S.Text>Matheus Hetkowski Stropper <br/> 15  de abril de 1998</S.Text>
                </S.Align>
            </S.Card>

            <S.Card>
                <S.Image src={Image3}/>

                <S.Title>
                Lorem ipsum dolor sit amet,
                <br />
                consetetur sadipscing elitr,
                <br />
                sed diam
                </S.Title>

                <S.Align>
                    <S.Avatar src={Avatar}/>
                    <S.Text>Matheus Hetkowski Stropper <br/> 15  de abril de 1998</S.Text>
                </S.Align>
            </S.Card>
        </S.Container>
    )
  }
  
  export default Card