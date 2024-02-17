import React from "react";
import "./App.css";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import { Route, Routes } from "react-router";
import AboutPage from "./AboutPage";
import MenuPage from "./MenuPage";
import OrderOnlinePage from "./OrderOnlinePage";
import LoginPage from "./LoginPage";

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
				path="/bookings"
				element={<BookingPage />}
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
