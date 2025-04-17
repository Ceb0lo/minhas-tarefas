import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

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

  return (
    <Container>
      <p>
        X tarefas marcardas como: &quot;categoria&ldquo; e &quot;{termo}&ldquo;
      </p>
      <ul>
        {filtraTarefa().map((t) => (
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
    </Container>
  )
}

export default Lista
