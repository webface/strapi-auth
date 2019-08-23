import styled from 'styled-components';
import Particles from 'react-particles-js';

const Background = styled(Particles)`
position: absolute;
width: 100%; max-width: 100%;
height: 100%; max-height: 100%;
top: 0; left: 0; right: 0; bottom: 0;
z-index: 1; overflow: hidden;
background: ${props => props.theme.colors.dark};
`;

const FullPage = styled.div`
position: relative; display: flex;
align-items: center; justify-content: center;
width: 100vw; max-width: 100%;
height: 100vh; max-height: 100%;
margin: 0; padding: 0;
overflow: hidden;
`;

const Container = styled.div`
position: relative; display: flex;
flex-direction: column;
width: calc(100vw - 40px); max-width: 100%;
height: auto; max-height: 100%;
margin: 0 auto; padding: 0;
min-height: calc(100vh - 40px);
background: #09539E;
box-shadow: ${props => props.theme.shadow.three};
border-radius: ${props => props.theme.border.radius};
`;

const Main = styled.main`
position: relative; display: block;
flex-grow: 1;
width: 100%; max-width: 100%;
height: auto; max-height: 100%;
margin: 0;
`;

const Wrapper = styled.div`
position: relative; display: block;
width: ${props => props.theme.wrapper.width}; max-width: 100%;
height: ${props => props.theme.wrapper.height}; max-height: 100%;
margin: ${props => props.theme.wrapper.margin};
padding: ${props => props.theme.wrapper.padding};
background: transparent;
`;

export {
    Background,
    Container,
    FullPage,
    Wrapper,
    Main,
}