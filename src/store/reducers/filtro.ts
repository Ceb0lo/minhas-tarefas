import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/tarefa'

type FiltroStatos = {
  termo?: string
  criterio: 'categoria' | 'status' | 'todos'
  valor?: enums.Categoria | enums.Status
}

const initialState: FiltroStatos = {
  termo: '',
  criterio: 'todos'
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alteraTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    alteraFiltro: (state, action: PayloadAction<FiltroStatos>) => {
      state.criterio = action.payload.criterio
      state.valor = action.payload.valor
    }
  }
})

export const { alteraTermo, alteraFiltro } = filtroSlice.actions

export default filtroSlice.reducer
