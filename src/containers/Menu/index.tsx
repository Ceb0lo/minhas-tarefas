import Filtro from '../../components/Filtro'
import { Aside, Busca, Filtros } from './styles'

const Menu = () => (
  <Aside>
    <div>
      <Busca type="text" placeholder="Buscar" />
      <Filtros>
        <Filtro legenda="pendente" contador={10} />
        <Filtro legenda="concluida" contador={10} />
        <Filtro legenda="urgente" contador={10} />
        <Filtro legenda="importante" contador={10} />
        <Filtro legenda="normal" contador={10} />
        <Filtro legenda="todas" contador={10} />
      </Filtros>
    </div>
  </Aside>
)
export default Menu
