import { Provider } from 'react-redux'
import Lista from './containers/Lista'
import Menu from './containers/Menu'
import EstiloGlobal, { Container } from './styles'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <Menu />
        <Lista />
      </Container>
    </Provider>
  )
}

export default App
