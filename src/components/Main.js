import React from "react";
import Food from "../assets/images/restauranfood.jpg";
import LemonDesert from "../assets/images/lemon-dessert.jpg";
import GreekSalad from "../assets/images/greek-salad.jpg";
import AboutImage1 from "../assets/images/mario-and-adrian-a.jpg";
import AboutImage2 from "../assets/images/mario-and-adrian-b.jpg";
import SpecialsCard from "./SpecialsCard";
import RatingCard from "./RatingCard";

const Main = () => {
	return (
		<main>
			<section className="hero-section">
				<div className="container">
					<div className="hero-section-content">
						<div>
							<h1>Little Lemon</h1>
							<h2>Chicago</h2>
						</div>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua.
						</p>
						<a
							href="/reservations"
							role="button"
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
			<section className="specials-section container">
				<header>
					<h2>Specials</h2>
					<a
						href="/menu"
						role="button"
					>
						Online Menu
					</a>
				</header>
				<div className="specials-section-cards">
					<SpecialsCard
						image={Food}
						title="Greek salad"
						price="$ 12.99"
						description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
					/>
					<SpecialsCard
						image={GreekSalad}
						title="Bruchetta"
						price="$ 5.99"
						description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "
					/>
					<SpecialsCard
						image={LemonDesert}
						title="Lemon Dessert"
						price="$ 5.00"
						description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
					/>
				</div>
			</section>
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
			<section className="about-section container">
				<div>
					<h2>Little Lemon</h2>
					<h3>Chicago</h3>
					<p>
						Amet minim mollit non deserunt ullamco est sit aliqua
						dolor do amet sint. Velit officia consequat duis enim
						velit mollit. Exercitation veniam consequat sunt nostrud
						amet. Amet minim mollit non deserunt ullamco est sit
						aliqua dolor do amet sint. Velit officia consequat duis
						enim velit mollit.
					</p>
				</div>
				<div>
					<img
						src={AboutImage1}
						alt="Mario and Adrian"
					/>
					<img
						src={AboutImage2}
						alt="Mario and Adrian"
					/>
				</div>
			</section>
		</main>
	);
};

export default Main;
