import styled, { css } from 'styled-components'

export const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    z-index: 5;
    justify-content: center;
    align-items: center;

    background: #F5F5F5 0% 0% no-repeat padding-box;
    opacity: 0;
    pointer-events: none;

    > svg {
        position: absolute;
        top: 1rem;
        right: 1rem;
    }

    ${({ isVisible})  => isVisible && css`
    opacity: 1;
    pointer-events: auto;
    `}

    @media screen and (min-width: 768px) {
        display: none;
    }
`

export const Item = styled.a`
    padding: 10px;
`

export const Menu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
`

export const Logo = styled.img`
    width: 90px;
    height: 40px;
    position: absolute;
    top: 1rem;
    left: 1rem;
`

