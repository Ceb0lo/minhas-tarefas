import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import Tarefa from '../../components/Tarefa'
import { MainContainer, Titulo } from '../../styles'

const Lista = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraTarefa = () => {
    let tarefasFiltardas = itens
    if (termo !== undefined) {
      tarefasFiltardas = tarefasFiltardas.filter(
        (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      )
      if (criterio == 'categoria') {
        tarefasFiltardas = tarefasFiltardas.filter(
          (item) => item.categoria == valor
        )
      } else if (criterio == 'status') {
        tarefasFiltardas = tarefasFiltardas.filter(
          (item) => item.status == valor
        )
      }

      return tarefasFiltardas
    } else {
      return itens
    }
  }

  const exibeCabecalho = (quantidade: number) => {
    let mensagem = ''
    const textoPesquisa =
      termo !== undefined && termo.length > 0 ? `e "${termo}"` : ``
    if (criterio == 'todos') {
      mensagem = `${quantidade} tarefa(s) marcada(s) como: todos ${textoPesquisa}`
    } else {
      mensagem = `${quantidade} tarefa(s) marcarda(s) como: "${`${criterio}: ${valor}`}" ${textoPesquisa}`
    }
    return mensagem
  }

  const tarefas = filtraTarefa()
  const mensagem = exibeCabecalho(tarefas.length)

  return (
    <MainContainer>
      <Titulo as="p">{mensagem}</Titulo>
      <ul>
        {tarefas.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              id={t.id}
              descricao={t.descricao}
              titulo={t.titulo}
              categoria={t.categoria}
              status={t.status}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default Lista
