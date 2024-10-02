import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import PropTypes from "prop-types";
import "./NavigationBar.css";

const routes = [
	{ name: "Home", href: "/" },
	{ name: "Our Features", href: "#features" },
	{ name: "Testimonials", href: "#testi" },
	{ name: "FAQ", href: "#faq" },

	
];

const NavMenu = ({ routes }) => (
	<Nav className="ms-auto mb-2 mb-lg-0 mt-4 mt-lg-0">
		{routes.map((route, i) => (
			<Nav.Item key={i}>
				<Nav.Link href={route.href}>{route.name}</Nav.Link>
			</Nav.Item>
		))}
	</Nav>
);

NavMenu.propTypes = {
	routes: PropTypes.array.isRequired,
};

const NavigationBar = () => {
	return (
		<div className="ezy__nav1_tRoDi3Ka">
			<Navbar expand="lg" className="py-3">
				<Container>
					<Navbar.Brand href="/">Bravo car deals</Navbar.Brand>
					<Navbar.Toggle aria-controls="ezy__nav1_tRoDi3Ka-navbar-nav">
						<span>
							<span />
						</span>
					</Navbar.Toggle>
					<Navbar.Collapse id="ezy__nav1_tRoDi3Ka-navbar-nav">
						<NavMenu routes={routes} />
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default NavigationBar;

