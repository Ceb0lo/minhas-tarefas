import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const Lista = () => (
  <Container>
    <p>X tarefas marcardas como: &quoo;categoria&ldquo; e &quoo;termo&ldquo;</p>
    <ul>
      <li>
        <Tarefa />
      </li>
    </ul>
  </Container>
)

export default Lista
