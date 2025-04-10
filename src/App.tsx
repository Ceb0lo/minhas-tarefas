import Lista from './containers/Lista'
import Menu from './containers/Menu'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Menu />
        <Lista />
      </Container>
    </>
  )
}

export default App
