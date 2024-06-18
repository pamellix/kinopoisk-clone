import React, { Suspense } from "react";
import { Outlet } from "react-router";
import Header from "./headers/Header";

const MainLayout: React.FC = () => {
	return (<div>
		<Header />
		<Suspense fallback={<div></div>}>
			<Outlet/>
		</Suspense>
	</div>);
};

export default MainLayout;