import React from "react";
import Logo from "../assets/images/logo.svg";

const Header = () => {
	return (
		<header>
			<img
				src={Logo}
				alt="Little Lemon Logo"
			/>
		</header>
	);
};

export default Header;
