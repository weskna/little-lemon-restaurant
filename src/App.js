import React from "react";
import "./App.css";
import HomePage from "./HomePage";
import ReservationPage from "./ReservationPage";
import { Route, Routes } from "react-router";
import AboutPage from "./AboutPage";
import MenuPage from "./MenuPage";
import OrderOnlinePage from "./components/OrderOnlinePage";
import LoginPage from "./components/LoginPage";

function App() {
	return (
		<Routes>
			<Route
				path="/"
				element={<HomePage />}
			/>
			<Route
				path="/about"
				element={<AboutPage />}
			/>
			<Route
				path="/menu"
				element={<MenuPage />}
			/>
			<Route
				path="/reservations"
				element={<ReservationPage />}
			></Route>
			<Route
				path="/order-online"
				element={<OrderOnlinePage />}
			/>
			<Route
				path="/login"
				element={<LoginPage />}
			/>
		</Routes>
	);
}

export default App;
