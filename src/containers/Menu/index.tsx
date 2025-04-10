import Filtro from '../../components/Filtro'
import { Aside, Filtros } from './styles'

const Menu = () => (
  <Aside>
    <div>
      <input type="text" placeholder="Buscar" />
      <Filtros>
        <Filtro legenda="espero que nao fique assim" contador={10} />
      </Filtros>
    </div>
  </Aside>
)
export default Menu
