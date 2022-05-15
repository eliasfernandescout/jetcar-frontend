import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root{
    --color-primary: gray;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    
    -webkit-font-smoothing: antialiased;

}
a{
    color: inherit;
}


`
