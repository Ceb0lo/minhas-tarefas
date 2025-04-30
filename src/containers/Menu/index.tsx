import { useDispatch, useSelector } from 'react-redux'
import Filtro from '../../components/Filtro'
import { Aside, Filtros } from './styles'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/tarefa'
import { Botao, Campo } from '../../styles'
import { useNavigate } from 'react-router-dom'

type Props = {
  mostarFiltros: boolean
}

const Menu = ({ mostarFiltros }: Props) => {
  const dispatch = useDispatch()
  const navegate = useNavigate()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <Aside>
      <div>
        {mostarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
            />
            <Filtros>
              <Filtro
                valor={enums.Status.PENDENTE}
                criterio="status"
                legenda="pendente"
              />
              <Filtro
                valor={enums.Status.CONCLUIDA}
                criterio="status"
                legenda="concluida"
              />
              <Filtro
                valor={enums.Categoria.URGENTE}
                criterio="categoria"
                legenda="urgente"
              />
              <Filtro
                valor={enums.Categoria.IMPORTANTE}
                criterio="categoria"
                legenda="importante"
              />
              <Filtro
                valor={enums.Categoria.NROMAL}
                criterio="categoria"
                legenda="normal"
              />
              <Filtro criterio="todos" legenda="todos" />
            </Filtros>
          </>
        ) : (
          <Botao onClick={() => navegate('/')}>Voltar a lista de tarefas</Botao>
        )}
      </div>
    </Aside>
  )
}

export default Menu
