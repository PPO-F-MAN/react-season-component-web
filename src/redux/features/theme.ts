import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface theme {
  currentTheme: 'spring' | 'summer' | 'autumn' | 'winter' | 'morning' | 'day' | 'evening' | 'night';
}

const initialState: theme = {
  currentTheme: 'winter',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<theme>) => action.payload,
  },
});

export default themeSlice;
