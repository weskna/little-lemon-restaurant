import React, { useState } from "react";

const BookingForm = ({ availableTimes, updateTimes }) => {
	const [date, setDate] = useState();
	const [time, setTime] = useState();
	const [guests, setGuests] = useState();
	const [occasion, setOccasion] = useState();

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
			>
				<label htmlFor="res-date">Choose date</label>
				<input
					type="date"
					id="res-date"
					defaultValue={date}
					onChange={(e) => setDate(e.target.value)}
				/>
				<label htmlFor="res-time">Choose time</label>
				<select
					id="res-time"
					defaultValue={time}
					onChange={(e) => {
						setTime(e.target.value);
						updateTimes(e.target.value);
					}}
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
				/>
				<label htmlFor="occasion">Occasion</label>
				<select
					id="occasion"
					defaultValue={occasion}
					onChange={(e) => setOccasion(e.target.value)}
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
