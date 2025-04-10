import { BarraInferior, Botao, Card, Discricao, Tag, Titulo } from './styles'

const Tarefa = () => (
  <Card>
    <Titulo>Nome tarefa</Titulo>
    <Tag>categoria</Tag>
    <Discricao />
    <BarraInferior>
      <Botao>edidar</Botao>
      <Botao>remover</Botao>
    </BarraInferior>
  </Card>
)

export default Tarefa
