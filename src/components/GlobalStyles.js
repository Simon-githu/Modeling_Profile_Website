import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
}


/* custom scroll bar */
::-webkit-scrollbar {
    width: 10px;
}
::-webkit-scrollbar-track {
    background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
    background: #cd853f;
}

::-webkit-scrollbar-thumb:hover {
    background: #555;
}
`;
export default GlobalStyles