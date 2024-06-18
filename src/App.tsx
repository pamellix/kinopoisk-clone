import React, { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
const Homepage = lazy(() => import("./components/homepage/Homepage"));
const FilmPage = lazy(() => import("./components/filmPage/FilmPage"));
const FavouriteFilms = lazy(() => import("./components/favouriteFilms/FavouriteFilms"));
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";


const App: React.FC = () => {
	return (
		<BrowserRouter>
			<div className="container">
				<Routes>
					<Route path="/" element={<MainLayout/>}>
						<Route index element={<Homepage/>}></Route>
						<Route path=":slug" element={<FilmPage/>}></Route>
						<Route path="favourite-films" element={<FavouriteFilms/>}></Route>
					</Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default App;
