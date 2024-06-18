import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import getAllFilmsReducer from "./slices/getAllFilms";
import getFilmByIdReducer from "./slices/getFilmById";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import favouriteFilmsReducer from "./slices/favouriteFilms";

const persistConfig = {
	key: "root",
	version: 1,
	storage
};

const rootReducer = combineReducers({
	getAllFilms: getAllFilmsReducer,
	getFilmById: getFilmByIdReducer,
	favouriteFilms: favouriteFilmsReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
});

// Типы для диспетчера и состояния
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
// Hook, который предоставляет типизированный доступ к диспетчеру
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


export default store;
