import React from "react";
import Food from "../assets/images/restauranfood.jpg";

const CallToAction = () => {
	return (
		<section className="hero-section">
			<div className="container">
				<div className="hero-section-content">
					<div>
						<h1>Little Lemon</h1>
						<h2>Chicago</h2>
					</div>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</p>
					<a
						href="/reservations"
						role="button"
						aria-label="On Click"
					>
						Reserve a Table
					</a>
				</div>
				<img
					src={Food}
					alt="Restauran food"
				/>
			</div>
		</section>
	);
};

export default CallToAction;
