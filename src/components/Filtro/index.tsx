import { useDispatch, useSelector } from 'react-redux'
import { alteraFiltro } from '../../store/reducers/filtro'
import { Card, Contador, TituloCategoria } from './steles'
import * as enums from '../../utils/enums/tarefa'
import { RootReducer } from '../../store'

export type Props = {
  legenda: string
  criterio: 'categoria' | 'status' | 'todos'
  valor?: enums.Categoria | enums.Status
}

const Filtro = ({ legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch()
  const { filtro, tarefas } = useSelector((state: RootReducer) => state)

  const verificaEstaAtivo = () => {
    const vddCriterio = filtro.criterio == criterio
    const vddValor = filtro.valor == valor

    return vddCriterio && vddValor
  }

  const contaTarefas = () => {
    if (criterio == 'todos') return tarefas.itens.length
    if (criterio == 'categoria') {
      return tarefas.itens.filter((item) => item.categoria == valor).length
    }
    if (criterio == 'status') {
      return tarefas.itens.filter((item) => item.status == valor).length
    }
  }

  const filtrar = () => {
    dispatch(
      alteraFiltro({
        criterio,
        valor
      })
    )
  }

  const contador = contaTarefas()
  const ativo = verificaEstaAtivo()

  return (
    <Card ativo={ativo} onClick={filtrar}>
      <Contador>{contador}</Contador>
      <TituloCategoria>{legenda}</TituloCategoria>
    </Card>
  )
}

export default Filtro
