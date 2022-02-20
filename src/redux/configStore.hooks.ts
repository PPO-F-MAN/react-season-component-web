import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './configStore';

export const setTheme = () => useDispatch<AppDispatch>();

export const getTheme: TypedUseSelectorHook<RootState> = useSelector;
