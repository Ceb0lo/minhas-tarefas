import { useState } from 'react'
import {
  BarraInferior,
  Botao,
  BotaoRemover,
  BotaoSalvar,
  Card,
  Discricao,
  Tag,
  Titulo
} from './styles'

type Props = {
  titulo: string
  categoria: string
  status: string
  descricao: string
}

const Tarefa = ({ descricao, categoria, status, titulo }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <Card>
      <Titulo>{titulo}</Titulo>
      <Tag categoria={categoria}>{categoria}</Tag>
      <Tag status={status}>{status}</Tag>
      <Discricao value={descricao} />
      <BarraInferior>
        {estaEditando ? (
          <>
            <BotaoSalvar>Salvar</BotaoSalvar>
            <BotaoRemover onClick={() => setEstaEditando(false)}>
              Cancelar
            </BotaoRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Edidar</Botao>
            <BotaoRemover>Remover</BotaoRemover>
          </>
        )}
      </BarraInferior>
    </Card>
  )
}

export default Tarefa
