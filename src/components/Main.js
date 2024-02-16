import React from "react";
import CallToAction from "./CallToAction";
import Testimonials from "./Testimonials";
import About from "./About";
import Specials from "./Specials";

const Main = () => {
	return (
		<main>
			<CallToAction />
			<Specials />
			<Testimonials />
			<About />
		</main>
	);
};

export default Main;
