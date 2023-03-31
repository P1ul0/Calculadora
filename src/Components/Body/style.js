import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 700px;
    width: 600px;
    background-color: #0B2447;
    margin-top: 100px;
    border-radius: 20px;
    filter: drop-shadow(0px 0px 4px rgba(0,0,0,0.7));
`

export const Result = styled.p`
    font-size: 20px;
    font-weight: bold;
    color: #0B2447 ;
    text-align: center;
    padding: 5px 5px;
    background-color:#F5F3C1;
`

export const DivNum = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-self: center;
    height: 400px;
    width: 70%;
    background-color: #F5F3C1;
    margin-top: 50px;
    border-radius: 20px;
    filter: drop-shadow(0px 0px 4px #eeff008f);
`
export const DivCenter = styled.div`
    height: 300px;
    display: flex;
    position: relative;
    top: 200px;
    right: 80px;
    gap: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const DivLinha = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
`
export const DivColu = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    left: 150px;
    top: -150px;
`
export const ButtonNum = styled.button`
    margin: 5px 10px;
    height: 70px;
    width: 70px;
    font-size: 40px;
    font-weight: bold;
    color: #F5F3C1 ;
    background-color: #0B2447;
    border: none;
    cursor: pointer;
    border-radius: 20px;
    
`

