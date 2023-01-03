import { configureStore } from '@reduxjs/toolkit'
import itemReducer from './ItemSlider';
export const store = configureStore({
  reducer: {item:itemReducer},
})