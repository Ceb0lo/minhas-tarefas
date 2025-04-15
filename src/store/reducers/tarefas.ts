import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/tarefa'

const tarefaSlice = createSlice({
  name: 'tarefa',
  initialState: [
    new Tarefa(
      'Coloca um Titulo',
      enums.Categoria.URGENTE,
      enums.Status.PENDENTE,
      '',
      1
    ),
    new Tarefa(
      'Boata um Titulo',
      enums.Categoria.NROMAL,
      enums.Status.CONCLUIDA,
      '',
      2
    ),
    new Tarefa(
      'Inventa um Titulo',
      enums.Categoria.IMPORTANTE,
      enums.Status.PENDENTE,
      '',
      3
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefaSlice.actions

export default tarefaSlice.reducer
