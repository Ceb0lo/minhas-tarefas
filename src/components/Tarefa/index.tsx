import { useDispatch } from 'react-redux'
import { useState } from 'react'
import * as S from './styles'
import * as enums from '../../utils/enums/tarefa'
import { remover } from '../../store/reducers/tarefas'
import TarefaClass from '../../models/Tarefa'

type Props = TarefaClass

const Tarefa = ({ descricao, categoria, status, titulo, id }: Props) => {
  const dispatch = useDispatch()
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
            <S.BotaoRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoRemover>
          </>
        )}
      </S.BarraInferior>
    </S.Card>
  )
}

export default Tarefa
