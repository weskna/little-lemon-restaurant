import React from "react";
import AboutImage1 from "../assets/images/mario-and-adrian-a.jpg";
import AboutImage2 from "../assets/images/mario-and-adrian-b.jpg";

const About = () => {
	return (
		<section className="about-section container">
			<div>
				<h2>Little Lemon</h2>
				<h3>Chicago</h3>
				<p>
					Amet minim mollit non deserunt ullamco est sit aliqua dolor
					do amet sint. Velit officia consequat duis enim velit
					mollit. Exercitation veniam consequat sunt nostrud amet.
					Amet minim mollit non deserunt ullamco est sit aliqua dolor
					do amet sint. Velit officia consequat duis enim velit
					mollit.
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
	);
};

export default About;
