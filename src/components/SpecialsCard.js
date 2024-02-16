import React from "react";

const SpecialsCard = ({ image, title, alt, price, description }) => {
	return (
		<article className="specials-card">
			<img
				src={image}
				alt={alt ?? title}
			/>
			<header>
				<h2>{title}</h2>
				<span>{price}</span>
			</header>
			<div>
				<p>{description}</p>
				<a
					href="/reservations"
					role="button"
				>
					Order a delivery
				</a>
			</div>
		</article>
	);
};

export default SpecialsCard;
