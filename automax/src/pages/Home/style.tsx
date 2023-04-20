import styled from "styled-components";
import banner from '../../assets/bmwRoxa.png'

export const StyledBannerDiv = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    color: white;
    font-size: 18px;
    background-size: cover;
    height: 400px;
    padding-bottom: 1.5rem;

    &::before {
        content: "";
        background-image: url(${banner});
        background-size: cover;
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        opacity: 0.75;
    }
    p {
        position: relative;
    }
    img {
        margin-top: 2.5rem;
        position: relative;
    }
    @media(min-width: 720px) {
        &::before {
            background-repeat: no-repeat;
            background-position: center center;
            background-size: cover;
        }
    }
`
export const StyledAnnounceList = styled.section`
    display: flex;
    padding: 2.5rem 0 0 1rem;
    aside {
        display: none;
    }
    ul {
        display: flex;
        /* padding: 2.5rem 0 0 1rem; */
        height: 420px;
        width: 74%;
    }
    ul li {
        margin-right: .4rem;

    }
    ul li:last-child {
        margin-right: 0;
    }
    @media(min-width: 720px) {
        aside {
            display: flex;
            width: 30%;
            max-width: 285px;
        }
    }
`
export const StyledFiltersAside = styled.aside`
    display: flex;
    flex-direction: column;

    div {
        display: flex;
        flex-direction: column;
        margin-bottom: 1.3rem;
    }
    div h2 {
        margin-bottom: .4rem;
    }
    div a {
        margin-left: .4rem;
        color: var(--colors-grey-3);
    }
    .km div {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .km div button {
        width: 100px;
        height: 40px;
        font-size: 14px;
        
    }
    .km div button:first-child {
        margin-right: .6rem;
    }
`

export const StyledFilterDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 180px;
    align-items: center;
    justify-content: space-between;
    padding-top: 1.5rem;
    margin-bottom: 2rem;
    button {
        width: 200px;
    }
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    div span {
        margin-bottom: 1rem;
    }
    @media(min-width: 720px) {
        .brand1 {display: none;}
        
    }
`