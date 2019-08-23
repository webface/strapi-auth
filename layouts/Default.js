import React from 'react';
import {Container, Main, Wrapper} from './styles';

const DefaultLayout = props => {
    return (
        <Wrapper>
            <Container>
                <Main>
                    {props.children}
                </Main>  
            </Container>
        </Wrapper>
    );
}
export default DefaultLayout;