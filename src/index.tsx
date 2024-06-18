import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";
import {PersistGate} from "redux-persist/integration/react";
import {persistStore} from "redux-persist";

import "./index.css";

import App from "./App";

const container = document.getElementById("root") as HTMLDivElement;
const root = createRoot(container!);
const persistor = persistStore(store);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<App />
			</PersistGate>
		</Provider>
	</React.StrictMode>
);
