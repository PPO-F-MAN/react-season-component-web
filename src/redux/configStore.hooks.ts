import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './configStore';

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelect: TypedUseSelectorHook<RootState> = useSelector;
