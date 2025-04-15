import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/tarefa'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      titulo: 'Coloca um Titulo',
      categoria: enums.Categoria.NROMAL,
      status: enums.Status.CONCLUIDA,
      descricao: 'imagina um texto'
    },
    {
      id: 2,
      titulo: 'Coloca outro Titulo',
      categoria: enums.Categoria.IMPORTANTE,
      status: enums.Status.PENDENTE,
      descricao: 'imagina um texto'
    }
  ]
}

const tarefaSlice = createSlice({
  name: 'tarefa',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefaSlice.actions

export default tarefaSlice.reducer
