import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    height : 80vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;

`;

const Block = styled.div`
    width: 100px;
    height: 100px;
    background-color: ${(props)=>props.bgcolor};
    :hover {background-color: white}
`;

function FlexboxTest(props) {
    return (
        <Wrapper>
            <Block bgcolor='red'>1</Block>
            <Block bgcolor='green'>2</Block>
            <Block bgcolor='blue'>3</Block>
        </Wrapper>
    );
}

export default FlexboxTest;