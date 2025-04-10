import Filtro from '../../components/Filtro'
import { Aside, Busca, Filtros } from './styles'

const Menu = () => (
  <Aside>
    <div>
      <Busca type="text" placeholder="Buscar" />
      <Filtros>
        <Filtro legenda="espero" contador={10} />
        <Filtro legenda="espero" contador={10} />
      </Filtros>
    </div>
  </Aside>
)
export default Menu
