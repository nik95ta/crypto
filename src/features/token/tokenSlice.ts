import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TokenInterface } from '@/interfaces';

interface TokenState {
  selectedTokens: TokenInterface[];
}

const initialState: TokenState = {
  selectedTokens: [],
};

const tokenSlice = createSlice({
  name: 'tokens',
  initialState,
  reducers: {
    toggleToken: (state, action: PayloadAction<TokenInterface>) => {
      const index = state.selectedTokens.findIndex((token) => token.symbol === action.payload.symbol);
      if (index >= 0) {
        state.selectedTokens.splice(index, 1);
      } else {
        state.selectedTokens.push(action.payload);
      }
    },
  },
});

export const { toggleToken } = tokenSlice.actions;
export default tokenSlice.reducer;
