import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const NoMatch = () => {
  return (
    <NoMatchWrapper>
      <h2>Nada para ver aqui</h2>
      <Link to='/'>Voltar para home</Link>
    </NoMatchWrapper>
  )
}

const NoMatchWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center
`
