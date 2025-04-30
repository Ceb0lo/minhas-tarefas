import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import * as enums from '../../utils/enums/tarefa'
import { Botao } from '../../styles'

type TegProps = {
  categoria?: enums.Categoria
  status?: enums.Status
  parametro: 'status' | 'categoria'
}

function retornaCorDeFundo(props: TegProps): string {
  if (props.parametro == 'categoria') {
    if (props.categoria == enums.Categoria.URGENTE) return variaveis.vermelho
    if (props.categoria == enums.Categoria.IMPORTANTE) return variaveis.amareloL
  } else {
    if (props.status == enums.Status.PENDENTE) return variaveis.amareloV
    if (props.status == enums.Status.CONCLUIDA) return variaveis.verde
  }
  return '#ccc'
}

export const Card = styled.div`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #fcfcfc;
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;

  label {
    display: flex;
    aline-items: center;
    margin-bottom: 16px;
  }
`

export const Titulo = styled.h3`
  font-weidht: bold;
  font-size: 18px;
  margin-left: 8px;
`

export const Tag = styled.span<TegProps>`
  padding: 4px 8px;
  color: #fff;
  font-weidht: bold;
  font-size: 10px;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`

export const Discricao = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`

export const BarraInferior = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const BotaoRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`

export const TegVibrante = styled(Tag)`
  background-color: ${variaveis.verde};
`
