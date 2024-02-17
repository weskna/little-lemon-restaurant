import React, { useEffect, useReducer } from "react";
import Layout from "./Layout";
import BookingForm from "./components/BookingForm";
import { useNavigate } from "react-router";

let dates = [];

// generate random dates since the provided API doesn't work
const generateRandomTime = () => {
	const time = new Date(Math.random() * (new Date(2023, 0, 1) - new Date()));
	return `${time.getHours()}:${time.getMinutes()}`;
};

const submitAPI = (data) => {
	return true;
};

const fetchAPI = () => {
	if (dates.length === 0) {
		for (let index = 0; index < 7; index++) {
			dates.push(generateRandomTime());
		}
		return dates;
	} else {
		return dates;
	}
};

const updateTimes = (state, date) => {
	return fetchAPI(new Date(date));
};

const initializeTimes = () => fetchAPI(new Date());

const BookingPage = () => {
	const [availableTimes, dispatch] = useReducer(
		updateTimes,
		initializeTimes()
	);
	const navigate = useNavigate();

	const submitForm = (data) => {
		console.log("data", data);
		if (submitAPI(data)) {
			navigate("/confirmed-booking");
		}
	};

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
					submitForm={(data) => submitForm(data)}
				/>
			</main>
		</Layout>
	);
};

export default BookingPage;
