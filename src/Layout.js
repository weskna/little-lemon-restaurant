import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";

const Layout = ({ children }) => {
	return (
		<>
			<section className="main-nav container">
				<Header />
				<Nav />
			</section>
			{children}
			<Footer />
		</>
	);
};

export default Layout;
