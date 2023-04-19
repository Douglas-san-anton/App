import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/auth'

const store = configureStore({
  reducer: {
    // agregar futuros reducer ejemplo user, coments, admin
    auth: authReducer
  }
})
export default store

//  Tipado para el funcionamiento correcto del store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
