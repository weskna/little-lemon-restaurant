import React from "react";
import Logo from "../assets/images/logo.svg";

const Footer = () => {
	return (
		<footer className="container">
			<header>
				<img
					src={Logo}
					alt="Little Lemon"
				/>
			</header>
			<div>
				<h3>Doormat Navigation</h3>
				<nav>
					<ul>
						<li>
							<a href="/home">Home</a>
						</li>
						<li>
							<a href="/about">About</a>
						</li>
						<li>
							<a href="/menu">Menu</a>
						</li>
						<li>
							<a href="/reservations">Reservations</a>
						</li>
						<li>
							<a href="/order-online">Order Online</a>
						</li>
						<li>
							<a href="/login">Login</a>
						</li>
					</ul>
				</nav>
			</div>
			<div>
				<h3>Contact</h3>
				<nav>
					<ul>
						<li>Address</li>
						<li>
							<a href="tel:">Telephone</a>
						</li>
						<li>
							<a href="mailto:">Email</a>
						</li>
					</ul>
				</nav>
			</div>
			<div>
				<h3>Social Media Links</h3>
				<nav>
					<ul>
						<li>Address</li>
						<li>
							<a href="tel:">Telephone</a>
						</li>
						<li>
							<a href="mailto:">Email</a>
						</li>
					</ul>
				</nav>
			</div>
		</footer>
	);
};

export default Footer;
