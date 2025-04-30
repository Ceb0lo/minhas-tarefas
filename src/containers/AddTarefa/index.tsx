import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { BotaoSalvar, Campo, MainContainer, Titulo } from '../../styles'
import { Categorias, Form, Opcao } from './styles'
import * as enums from '../../utils/enums/tarefa'
import { cadastar } from '../../store/reducers/tarefas'

const AddTarefa = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [descricao, setDescricao] = useState('')
  const [titulo, setTitulo] = useState('')
  const [categoria, setCategoria] = useState(enums.Categoria.NROMAL)

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastar({
        titulo,
        categoria,
        status: enums.Status.PENDENTE,
        descricao
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Nova Tarefa</Titulo>
      <Form onSubmit={cadastrarTarefa}>
        <Campo
          value={titulo}
          onChange={(evento) => setTitulo(evento.target.value)}
          type="text"
          placeholder="Titulo"
        />
        <Campo
          value={descricao}
          onChange={(evento) => setDescricao(evento.target.value)}
          as="textarea"
          placeholder="Descricao da tarefa"
        />
        <Categorias>
          {Object.values(enums.Categoria).map((categoria) => (
            <Opcao key={categoria}>
              <input
                value={categoria}
                onChange={(evento) =>
                  setCategoria(evento.target.value as enums.Categoria)
                }
                name="categoria"
                type="radio"
                id={categoria}
                defaultChecked={categoria == enums.Categoria.NROMAL}
              />
              <label htmlFor={categoria}>{categoria}</label>
            </Opcao>
          ))}
        </Categorias>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default AddTarefa
