import { useState } from 'react'
import * as S from './styles'
import * as enums from '../../utils/enums/tarefa'

type Props = {
  titulo: string
  categoria: enums.Categoria
  status: enums.Status
  descricao: string
}

const Tarefa = ({ descricao, categoria, status, titulo }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag parametro="categoria" categoria={categoria}>
        {categoria}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Discricao value={descricao} />
      <S.BarraInferior>
        {estaEditando ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoRemover onClick={() => setEstaEditando(false)}>
              Cancelar
            </S.BotaoRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Edidar</S.Botao>
            <S.BotaoRemover>Remover</S.BotaoRemover>
          </>
        )}
      </S.BarraInferior>
    </S.Card>
  )
}

export default Tarefa
