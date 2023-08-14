import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 1500px;
    
    @media screen and (min-width: 426px) {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
        height: 500px;
       
    }
`
export const Card = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    width: 100%;
    height: 466px;

    @media screen and (min-width: 426px) {
        display: flex;
        flex-direction: column;
        width: 380px;
        height: 466px;
        padding: 10px;
        
    }
    
`

export const Image = styled.img`
    width: 100%;
    height: 253px;
    border-radius: 5px;
`
export const Title = styled.strong`
    display: flex;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    padding: 30px 30px 30px;
`

export const Avatar = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    
`

export const Text = styled.p`
    text-align: left;
    font: normal normal medium 16px/30px Poppins;
    letter-spacing: 0.32px;
    color: #6D6D6D;
    opacity: 1;
    padding-left: 10px;
`

export const Align = styled.div`
    display: flex;
    align-items: center;
    padding-left: 25px;
`