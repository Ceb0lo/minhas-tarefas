import styled from 'styled-components'
import { Props } from '.'

//PropsSLC = Props sem contator e legenda
type PropsSLC = Omit<Props, 'contador' | 'legenda'>

export const Card = styled.div<PropsSLC>`
  padding: 8px;
  border: 1px solid ${(props) => (props.ativo ? '#1e90ff' : '#a1a1a1')};
  backgranund-color: ${(props) => (props.ativo ? '#fff' : '#fcfcfc')};
  color: ${(props) => (props.ativo ? '#1e90ff' : '#5e5e5e')};
  border-radius: 8px;
`

export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const TituloCategoria = styled.span`
  font-size: 14px;
`
