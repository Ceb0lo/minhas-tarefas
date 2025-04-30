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
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id == action.payload.id
      )
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    },
    cadastar: (state, action: PayloadAction<Tarefa>) => {
      const tarefaExiste = state.itens.find(
        (tarefa) =>
          tarefa.titulo.toLowerCase() == action.payload.titulo.toLowerCase()
      )

      if (tarefaExiste) {
        alert('Ja existe uma tarefa com esse nome')
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { remover, editar, cadastar } = tarefaSlice.actions

export default tarefaSlice.reducer
