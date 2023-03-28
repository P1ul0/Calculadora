import styled from "styled-components";
import {BsCalculator} from "react-icons/bs"

export const Container = styled.header`
    height: 100px;
    background-color: black;
    display: flex;
    justify-content: center;
`

export const Img = styled(BsCalculator)`
    position: absolute;
    left: 0;
    height: 80px;
    width: 80px;
    margin: 10px 23px ;
    color: #DC0000;
`

export const TextHeader = styled.p`
    align-self: center;
    font-size: 60px;
    font-weight: bolder;
    color: #DC0000;
`