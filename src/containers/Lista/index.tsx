import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const Lista = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  return (
    <Container>
      <p>
        X tarefas marcardas como: &quot;categoria&ldquo; e &quot;termo&ldquo;
      </p>
      <ul>
        {itens.map((t) => (
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
