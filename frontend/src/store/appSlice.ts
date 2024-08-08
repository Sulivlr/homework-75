import {createSlice} from '@reduxjs/toolkit';

export interface AppState {
  encodedMessage: string;
  decodedMessage: string;
  error: string | null;
  isLoading: boolean;
}

const initialState: AppState = {
  encodedMessage: '',
  decodedMessage: '',
  error: null,
  isLoading: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: () => {

  },
  selectors: {
    selectAppEncode: (state) => state.encodedMessage,
    selectAppDecode: (state) => state.decodedMessage,
    selectAppError: (state) => state.error,
    selectAppIsLoading: (state) => state.isLoading,
  }
});

export const appReducer = appSlice.reducer;

export const {
  selectAppEncode,
  selectAppDecode,
  selectAppError,
  selectAppIsLoading
} = appSlice.selectors;