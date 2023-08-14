import React from "react";
import { FaSistrix, FaBars } from "react-icons/fa";
import Logo from "../../assets/logo.jpg";
import * as S from './styles'

export function Menu ({menusetIsVisible}) {
    
    return (
        <>
        <S.Container>  
          
            <S.Menu>
                <S.Logo src={Logo} alt="Logo"/>
                <S.Item>Primeiro menu</S.Item>
                <S.Item>Segundo menu</S.Item>
                <S.Item>Terceiro menu</S.Item>
                <S.Item>Quarto menu</S.Item>
            </S.Menu>

            <S.Icon>
                <FaSistrix  size={20}/>
            </S.Icon>

        </S.Container>

        <S.IconFabars>
            <S.LogoMobile src={Logo} alt="Logo"/>
            <FaBars  size={20} onClick={() => menusetIsVisible(true)} />
        </S.IconFabars>
        </>
    )
  }

  export default Menu