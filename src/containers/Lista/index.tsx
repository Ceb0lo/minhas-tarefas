import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const taref = [
  {
    titulo: 'boata um titulo',
    categoria: 'Pra min esses dois era a msm coisa',
    status: 'Pra min esses dois era a msm coisa',
    descricao: 'Imagina um texto gigante'
  }
]

const Lista = () => (
  <Container>
    <p>X tarefas marcardas como: &quoo;categoria&ldquo; e &quoo;termo&ldquo;</p>
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
