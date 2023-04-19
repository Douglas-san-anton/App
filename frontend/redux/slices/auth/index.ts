import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthState } from './interfaceAuth'

// estado inicial
const initialState: AuthState = {
  accessToken: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    //funcion que me cambia el estado inicial
    setAccionToken(state, action: PayloadAction<string | null>) {
      state.accessToken = action.payload
    }
  }
})

export default authSlice.reducer
