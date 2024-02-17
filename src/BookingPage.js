import React, { useEffect, useReducer } from "react";
import Layout from "./Layout";
import BookingForm from "./components/BookingForm";

const updateTimes = (state, date) => {
	return state;
};

const initializeTimes = () => [
	"17:00",
	"18:00",
	"19:00",
	"20:00",
	"21:00",
	"22:00"
];

const BookingPage = () => {
	const [availableTimes, dispatch] = useReducer(
		updateTimes,
		initializeTimes()
	);

	return (
		<Layout>
			<main
				className="container"
				style={{ padding: "80px 20px" }}
			>
				<h1>Reservations</h1>
				<BookingForm
					availableTimes={availableTimes}
					updateTimes={dispatch}
				/>
			</main>
		</Layout>
	);
};

export default BookingPage;
