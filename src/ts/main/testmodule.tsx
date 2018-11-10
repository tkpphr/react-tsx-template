import * as React from "react";
import styled from "styled-components";
import * as image from "../../../assets/image.bmp";

interface Props{
    content:string;
}

interface State{
    count:number;
}

const ColorDiv=styled.div`
    width:400px;
    height:400px;
    background:lightgray;
    background-repeat: no-repeat;
    background-size:200px;
    background-image:url(${image});
    
`;

const ColorButton=styled.button`
    background:pink;
`;

const Counter=styled.p`
    color:blue;
`;

export default class TestModule extends React.Component<Props,State>{
    constructor(props:Props){
        super(props);
        this.state={count:0};
    }

    render(){
        return (
            <ColorDiv>
                <ColorButton onClick={this.onClick.bind(this)}>{this.props.content}</ColorButton>
                <Counter>Clicked : {this.state.count}</Counter>
            </ColorDiv>
        );
    }

    private onClick():void {
        this.setState({count:(this.state.count+1)});
    }
    
}