import { ButtonNum, Container, DivCenter, DivColu, DivLinha, DivNum, Result } from "./style"


export const Body = () => {
    return(
        <Container>
            <Result> Resultado</Result>
            <DivNum>
                <DivCenter>
                    <DivLinha>
                        <ButtonNum>1</ButtonNum>
                        <ButtonNum>2</ButtonNum>
                        <ButtonNum>3</ButtonNum>
                    </DivLinha>
                    <DivLinha>
                        <ButtonNum>4</ButtonNum>
                        <ButtonNum>5</ButtonNum>
                        <ButtonNum>6</ButtonNum>
                    </DivLinha>
                    <DivLinha>
                        <ButtonNum>7</ButtonNum>
                        <ButtonNum>8</ButtonNum>
                        <ButtonNum>9</ButtonNum>
                    </DivLinha>
                    <DivLinha>
                        <ButtonNum>0</ButtonNum>
                    </DivLinha>
                </DivCenter>
                <DivColu>
                    <ButtonNum>+</ButtonNum>
                    <ButtonNum>-</ButtonNum>
                    <ButtonNum>x</ButtonNum>
                    <ButtonNum>/</ButtonNum>
                    <ButtonNum>=</ButtonNum>
                </DivColu>
            </DivNum>
        </Container>
    )
}