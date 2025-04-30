import BotaoAdd from '../../components/BotaoAdd'
import Lista from '../../containers/Lista'
import Menu from '../../containers/Menu'

const Home = () => (
  <>
    <Menu mostarFiltros />
    <Lista />
    <BotaoAdd />
  </>
)

export default Home
