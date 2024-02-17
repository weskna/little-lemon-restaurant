import React from "react";
import Layout from "../Layout";

const ConfirmedBooking = () => {
	return (
		<Layout>
			<section
				className="container"
				style={{ padding: "80px 20px" }}
			>
				<h2>Your booking has been confirmed!</h2>
				<a
					href="/bookings"
					role="button"
					style={{ marginTop: "32px" }}
				>
					Back to booking page
				</a>
			</section>
		</Layout>
	);
};

export default ConfirmedBooking;
