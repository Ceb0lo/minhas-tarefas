import Tarefa from '../../components/Tarefa'
import { Container } from './styles'
import * as enums from '../../utils/enums/tarefa'

const taref = [
  {
    titulo: 'boata um titulo',
    categoria: enums.Categoria.IMPORTANTE,
    status: enums.Status.PENDENTE,
    descricao: 'Imagina um texto gigante'
  }
]

const Lista = () => (
  <Container>
    <p>X tarefas marcardas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      {taref.map((t) => (
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

export default Lista
