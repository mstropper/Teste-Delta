import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 300px;

    @media screen and (min-width: 426px) {
        display: flex;
        width: 100%;
        height: 380px;
    }

`

export const Slider = styled.div`
    width: 100%;
    padding: 10px;
    border-radius: 10px;

    @media screen and (min-width: 426px) {
        display: flex;
        width: 100%;
        height: 350px;
        padding: 10px; 
        align-items: center;
    }

    @media screen and (min-width: 1024px) {
        display: flex;
        width: 100%;
        height: 350px;
        padding: 10px; 
        align-items: center;
    }
    @media screen and (min-width: 1440px) {
        display: flex;
        width: 100%;
        height: 350px;
        padding: 190px; 
        align-items: center;
    }
`

export const Image = styled.img`
    width: 380px;
    height: 253px;
`



