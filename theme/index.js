import { createGlobalStyle } from 'styled-components';
const FontFaceObserver = require('fontfaceobserver');

const Theme = {
    colors: {
      primary: '#09539e',
      white: '#FFFFFF',
      black: '#000000',
      dark: '#020E1B',
      light: '#E4EFFB',
    },
    border: {
      color: '#dee2e6',
      radius: '10px',
    },
    wrapper: {
      width: "1440px",
      height: "auto",
      padding: "20px",
      margin: "0 auto",
    },
    shadow: {
      one: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      two: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
      three: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
      four: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
      five: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
      transition: 'box-shadow 0.7s cubic-bezier(0.25, 0.1, 0.25, 1)'
    }
}



const GlobalStyles = createGlobalStyle`
  #__next {
    display:flex;
    flex-direction: column;
    align-items: center; justify-content: center;
    min-height: 100vh;
  }
  body {
      display: block;
      width: auto; max-width: 100%;
      height: auto; max-height: 100%;
      margin: 0; padding: 0;
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
      font-weight: 400;
      * { box-sizing: border-box; }
      background: #192531;
      background: linear-gradient(4deg, #01080F, #2D3843);
      background-size: 400% 400%;
      animation: gradientEffect 30s ease infinite;
  }
  a {text-decoration: none;}
  svg {
    display: block; 
    width: auto; max-width: 100%;
    height: auto; max-height: 100%;
    transition: all 0.33s ease;
  }
  button {
      cursor: pointer;
      appearance: none;
      outline: none;
      border: none;
      box-shadow: none;
      font: inherit;
  }
  @keyframes gradientEffect { 
    0%{background-position:50% 0%}
    50%{background-position:51% 100%}
    100%{background-position:50% 0%}
  }
`;

const Fonts = () => {
  const link = document.createElement('link')
  link.href = 'https://fonts.googleapis.com/css?family=Roboto:100,400,700&display=swap'
  link.rel = 'stylesheet'
  document.head.appendChild(link)
  const font = new FontFaceObserver('Roboto')
  font.load().then(() => {
    document.documentElement.classList.add('font-loaded')
  })
}
export {Theme, GlobalStyles, Fonts}