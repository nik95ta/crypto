import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from '@/features/token/tokenSlice';

export const store = configureStore({
  reducer: {
    tokens: tokenReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
