import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;

    @media screen and (max-width: 426px) {
        display: none;
    }
`

export const Item = styled.a`
    padding: 30px;
`

export const Menu = styled.div`
    display: flex;
    align-items: center;
`

export const Logo = styled.img`
    width: 120px;
    height: 60px;
`
export const Icon = styled.div`
    display: flex;
    align-items: center;
    padding: 30px;
`

export const IconFabars = styled.div`
    display: none;

    @media screen and (max-width: 426px) {
        display: flex; 
        justify-content: flex-end;
        padding: 30px;
    }
`

export const LogoMobile = styled.img`
    width: 100px;
    height: 50px;
    position: absolute;
    top: 1rem;
    left: 1rem;
`



