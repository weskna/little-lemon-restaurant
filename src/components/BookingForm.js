import React, { useEffect, useState } from "react";

const BookingForm = ({ availableTimes, updateTimes, submitForm }) => {
	const [date, setDate] = useState();
	const [time, setTime] = useState();
	const [guests, setGuests] = useState();
	const [occasion, setOccasion] = useState("Birthday");

	useEffect(() => {
		if (!time && availableTimes.length !== 0) {
			setTime(availableTimes[0]);
		}
	}, [availableTimes]);

	return (
		<>
			<h2>Book Now</h2>
			<form
				style={{
					display: "grid",
					maxWidth: "200px",
					gap: "20px",
					marginTop: "48px"
				}}
				onSubmit={() => {
					submitForm({
						date,
						time,
						guests,
						occasion
					});
				}}
			>
				<label htmlFor="res-date">Choose date</label>
				<input
					type="date"
					id="res-date"
					defaultValue={date}
					onChange={(e) => setDate(e.target.value)}
					required
				/>
				<label htmlFor="res-time">Choose time</label>
				<select
					id="res-time"
					defaultValue={time}
					onChange={(e) => {
						setTime(e.target.value);
						updateTimes(e.target.value);
					}}
					required
				>
					{availableTimes.map((time, index) => (
						<option key={index}>{time}</option>
					))}
				</select>
				<label htmlFor="guests">Number of guests</label>
				<input
					type="number"
					placeholder="1"
					min="1"
					max="10"
					id="guests"
					defaultValue={guests}
					onChange={(e) => setGuests(e.target.value)}
					required
				/>
				<label htmlFor="occasion">Occasion</label>
				<select
					id="occasion"
					defaultValue={occasion}
					onChange={(e) => setOccasion(e.target.value)}
					required
				>
					<option>Birthday</option>
					<option>Anniversary</option>
				</select>
				<input
					type="submit"
					value="Make Your reservation"
					style={{ marginTop: "48px" }}
				/>
			</form>
		</>
	);
};

export default BookingForm;
