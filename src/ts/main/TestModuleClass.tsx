import React from "react";
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

interface Props {
    message:string;
}

interface State {
    count:number;
}

export default class TestModuleClass extends React.Component<Props,State> {
    constructor(props:Props){
        super(props);
        this.state = {count:0};
    }

    render():JSX.Element{
        return (
            <Container>
                <img src={"assets/img/image.bmp"}/>
                <Message>
                    {this.props.message}
                </Message>
                <Button onClick={(() => this.setState({count:this.state.count + 1})) }>
                    {"Add + 1"}
                </Button>
                <Counter>
                    {this.state.count}
                </Counter>
            </Container>
        )
    }

}