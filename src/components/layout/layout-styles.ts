import styled from 'styled-components'

export const StyledLayout = styled.div`

    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    header{
        background-color: var(--color-primary);
        width: 100%;
        padding: 10px;
        
    }   
    footer{
        background-color:  var(--color-primary);
        width: 100%;
        padding: 10px;
        color: #ffffff
    }
`
