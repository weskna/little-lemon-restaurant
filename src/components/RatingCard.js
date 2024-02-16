import React from "react";

const RatingCard = ({ image, name, description, rating }) => {
	return (
		<article className="rating-card">
			<div>{rating}/5 stars</div>
			<div class="rating-card-content">
				<img
					src={image}
					alt={name}
				/>
				<h3>{name}</h3>
			</div>
			<p>{description}</p>
		</article>
	);
};

export default RatingCard;
