import styled from 'styled-components';

const Container = styled.div`
position: relative;
display: block;
width: 350px; max-width: 100%;
height: auto; max-height: 100%;
z-index: 200; margin: 20px;
background: ${props => props.theme.colors.dark};
border-radius: ${props => props.theme.border.radius};
`;



const Layout = styled.div`
display: flex;
align-items: center; justify-content: center;
width: 100vw; max-width: 100%;
height: 100vh; max-height: 100%;
overflow: hidden;
padding: 20px;
`;

const Logo = styled.div`
display: block;
width: 100%; max-width: 100%;
padding: 10px; padding-bottom: 0;
`;
const Form = styled.form`
display: block;
width: 100%; max-width: 100%;
height: auto; max-height: 100%;
padding: 10px;
`;
const Input = styled.input`
display: block;
width: 100%; max-width: 100%;
appearance: none; outline: none;
text-align: center;
border: 1px solid ${props => props.theme.border.color};
border-radius: ${props => props.theme.border.radius};
background: ${props => props.theme.colors.white};
height: 40px; line-height: 40px; padding: 0 15px; margin-bottom: 10px;
font-size: 18px;
&:focus {border-color: ${props => props.theme.colors.primary}; }
`;
const Submit = styled.button`
display: block;
width: 100%; max-width: 100%;
height: 40px; max-width: 100%;
line-height: 40px; padding: 0 10px;
font-size: 18px; font-weight: 300;
letter-spacing: 0.05em;
apperance: none;
color: ${props => props.theme.colors.white};
background: ${props => props.theme.colors.primary};
border-radius: ${props => props.theme.border.radius};

`;
const Actions = styled.div`
position: relative;
display: block;
width: 100%; max-width: 100%;
height: auto; max-height: 100%;
padding: 0px 40px;
margin-bottom: 20px;
`;
const Action = styled.button`
display: block; width: 100%;
text-align: center;
background: transparent;
font-size: 14px;
color: ${props => props.theme.colors.light};
transition: all 0.33s ease;
opacity: 0.5;
&:hover { color: ${props => props.theme.colors.white}; opacity: 1; }
`;
export {
    Container,
    Layout,
    Logo,
    Form,
    Input,
    Submit,
    Actions,
    Action
}