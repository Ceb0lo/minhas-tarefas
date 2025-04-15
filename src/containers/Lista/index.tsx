import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const Lista = () => {
  const { tarefas } = useSelector((state: RootReducer) => state)
  return (
    <Container>
      <p>
        X tarefas marcardas como: &quot;categoria&ldquo; e &quot;termo&ldquo;
      </p>
      <ul>
        {tarefas.map((t) => (
          <li key={t.titulo}>
            <Tarefa
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
