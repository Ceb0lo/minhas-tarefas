import * as enums from '../utils/enums/tarefa'

class Tarefa {
  titulo: string
  categoria: enums.Categoria
  status: enums.Status
  descricao: string
  id: number

  constructor(
    titulo: string,
    categoria: enums.Categoria,
    status: enums.Status,
    descricao: string,
    id: number
  ) {
    this.titulo = titulo
    this.categoria = categoria
    this.status = status
    this.descricao = descricao
    this.id = id
  }
}

export default Tarefa
