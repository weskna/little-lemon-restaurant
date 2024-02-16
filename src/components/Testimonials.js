import React from "react";
import RatingCard from "./RatingCard";
import Food from "../assets/images/restauranfood.jpg";

const Testimonials = () => {
	return (
		<section className="testimonials-section">
			<div className="container">
				<h2>Testimonials</h2>
				<div className="rating-cards">
					<RatingCard
						rating="4"
						image={Food}
						name="John Smith"
						description="Amet minim mollit non deserunt ullamco est sit aliqua"
					/>
					<RatingCard
						rating="5"
						image={Food}
						name="Samantha Arley"
						description="Velit officia consequat duis enim velit mollit"
					/>
					<RatingCard
						rating="4"
						image={Food}
						name="Eva Minoz"
						description="Amet minim mollit non deserunt ullamco est sit aliqua"
					/>
					<RatingCard
						rating="4"
						image={Food}
						name="Mark Martin"
						description="Velit officia consequat duis enim
						velit mollit"
					/>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
