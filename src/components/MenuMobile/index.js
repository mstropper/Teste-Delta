import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import * as S from './styles'

export function MenuMobile ({menuIsVisible, menusetIsVisible}) {
  useEffect ( () => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
  }, [menuIsVisible])
    
    return (
        <S.Container isVisible={menuIsVisible}>  
          
          <IoClose size={20} onClick={() => menusetIsVisible(false)}/>

            <S.Menu>
                <S.Item>Primeiro menu</S.Item>
                <S.Item>Segundo menu</S.Item>
                <S.Item>Terceiro menu</S.Item>
                <S.Item>Quarto menu</S.Item>
                
            </S.Menu>

        </S.Container>
    )
  }
  
  export default MenuMobile