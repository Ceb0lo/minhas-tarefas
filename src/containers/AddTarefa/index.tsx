import { BotaoSalvar, Campo, MainContainer, Titulo } from '../../styles'
import { Categorias, Form } from './styles'

const AddTarefa = () => (
  <MainContainer>
    <Titulo>Nova Tarefa</Titulo>
    <Form>
      <Campo type="text" placeholder="Titulo" />
      <Campo as="textarea" placeholder="Descricao da tarefa" />
      <Categorias>
        <input name="categoria" type="radio" id="urgente" />
        <label htmlFor="urgente">Urgente</label>
        <input name="categoria" type="radio" id="importante" />
        <label htmlFor="importante">Importante</label>
        <input name="categoria" type="radio" id="normal" />
        <label htmlFor="normal">Normal</label>
      </Categorias>
      <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
    </Form>
  </MainContainer>
)

export default AddTarefa
