import logger from 'redux-logger';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import themeSlice from './features/theme';

const rootReducer = combineReducers({
  user: themeSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
