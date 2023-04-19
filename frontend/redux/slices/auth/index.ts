import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
  accessToken: string | null
}

const initialState: AuthState = {
  accessToken: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccionToken(state, action: PayloadAction<string | null>) {
      state.accessToken = action.payload
    }
  }
})

export default authSlice.reducer
