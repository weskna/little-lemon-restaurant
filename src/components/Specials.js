import React from "react";
import SpecialsCard from "./SpecialsCard";
import LemonDesert from "../assets/images/lemon-dessert.jpg";
import GreekSalad from "../assets/images/greek-salad.jpg";

const Specials = () => {
	return (
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
					image={GreekSalad}
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
	);
};

export default Specials;
