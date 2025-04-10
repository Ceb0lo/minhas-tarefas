import { Card, Contador, TituloCategoria } from './steles'

export type Props = {
  ativo?: boolean
  contador: number
  legenda: string
}

const Filtro = ({ ativo, legenda, contador }: Props) => (
  <Card ativo={ativo}>
    <Contador>{contador}</Contador>
    <TituloCategoria>{legenda}</TituloCategoria>
  </Card>
)

export default Filtro
