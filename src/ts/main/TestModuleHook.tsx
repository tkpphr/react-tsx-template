import React, { useState } from "react";
import styled from "styled-components";

const Container=styled.div`
    width:400px;
    height:400px;
    background:black;
    margin-bottom: 16px;
    * {
        margin-left: 16px;
    }
`;

const Message = styled.p`
    color:chartreuse;
`;

const Button = styled.button`
    background: blue;
`;

const Counter = styled.div`
    color:aqua;
`;

export default function TestModuleHook(props:{
    message:string
}) : JSX.Element {
    const [count,setCount] = useState(0);
    return (
        <Container>
            <img src={"assets/img/image.bmp"}/>
            <Message>
                {props.message}
            </Message>
            <Button onClick={() => setCount(count + 1)}>
                {"Add + 1"}
            </Button>
            <Counter>
                {count}
            </Counter>
        </Container>
    )
}