import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookF,
	faTwitter,
	faPinterestP,
	faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";
import "./Footer.css";

const quickLinks = [
	{ value: "Home", href: "#!" },
	{ value: "About Us", href: "#!" },
	{ value: "Services", href: "#!" },
];

const socialMedia = [
	{ value: "Facebook", href: "#!" },
	{ value: "Instagram", href: "#!" },
	{ value: "LinkedIn", href: "#!" },
	{ value: "Twitter", href: "#!" },
];

const jobInfo = [
	{ value: "Select", href: "#!" },
	{ value: "Service", href: "#!" },
	{ value: "Payment", href: "#!" },
];

const contactUs = [
	{
		value: "United Kingdom",
		href: "#!",
	},
	{
		value: "bravocardeals14@gmail.com",
		href: "#!",
	},
	{
		value: "+880 1742-0****0",
		href: "#!",
	},
];

const navigations = [
	{
		value: "Home",
		href: "#!",
	},
	{
		value: "About",
		href: "#!",
	},
	{
		value: "Contact",
		href: "#!",
	},
];

const sociaIcons = [
	{
		icon: faFacebookF,
		href: "#!",
	},
	{
		icon: faTwitter,
		href: "#!",
	},
	{
		icon: faPinterestP,
		href: "#!",
	},
	{
		icon: faLinkedinIn,
		href: "#!",
	},
];

const QuickLinks = ({ qLink }) => (
	<li>
		<a href={qLink.href}>{qLink.value}</a>
	</li>
);
QuickLinks.propTypes = {
	qLink: PropTypes.object.isRequired,
};

const SocialMedia = ({ media }) => (
	<li>
		<a href={media.href}>{media.value}</a>
	</li>
);
SocialMedia.propTypes = {
	media: PropTypes.object.isRequired,
};

const JobInfo = ({ job }) => (
	<li>
		<a href={job.href}>{job.value}</a>
	</li>
);
JobInfo.propTypes = {
	job: PropTypes.object.isRequired,
};
const ContactUs = ({ contact }) => (
	<li>
		<a href={contact.href}>{contact.value}</a>
	</li>
);
ContactUs.propTypes = {
	contact: PropTypes.object.isRequired,
};

const NavigationItem = ({ item }) => (
	<Nav.Item>
		<Nav.Link href={item.href}>{item.value}</Nav.Link>
	</Nav.Item>
);

NavigationItem.propTypes = {
	item: PropTypes.object.isRequired,
};

const SocialItem = ({ social }) => (
	<li>
		<a
			href={social.href}
			className="border d-flex justify-content-center align-items-center rounded-circle"
		>
			<FontAwesomeIcon icon={social.icon} />
		</a>
	</li>
);

SocialItem.propTypes = {
	social: PropTypes.object.isRequired,
};

const Footer = () => {
	return (
		<section className="ezy__footer2_wa59NKzY">
			<Container>
				<Row className="text-center text-sm-start">
					<Col lg={3}>
						<h2 className="fw-bold">Bravo Car Deals</h2>
					</Col>
					<Col sm={6} lg={2} className="mt-4 mt-lg-0">
						<h5>Quick Links</h5>
						<Nav className="flex-column ezy__footer2_wa59NKzY-quick-links">
							{quickLinks.map((qLink, i) => (
								<QuickLinks qLink={qLink} key={i} />
							))}
						</Nav>
					</Col>
					<Col sm={6} lg={2} className="mt-4 mt-lg-0">
						<h5>Social Media</h5>
						<Nav className="flex-column ezy__footer2_wa59NKzY-quick-links">
							{socialMedia.map((media, i) => (
								<SocialMedia media={media} key={i} />
							))}
						</Nav>
					</Col>
					{/* <Col sm={6} lg={2} className="mt-4 mt-lg-0">
						<h5>Job Info</h5>
						<Nav className="flex-column ezy__footer2_wa59NKzY-quick-links">
							{jobInfo.map((job, i) => (
								<JobInfo job={job} key={i} />
							))}
						</Nav>
					</Col> */}
					<Col sm={6} lg={2} className="mt-4 mt-lg-0">
						<h5>Contact Us</h5>
						<Nav className="flex-column ezy__footer2_wa59NKzY-quick-links">
							{contactUs.map((contact, i) => (
								<ContactUs contact={contact} key={i} />
							))}
						</Nav>
					</Col>
				</Row>
				<hr />
				<Row className="d-flex justify-content-between align-items-center text-center text-lg-start">
					<Col lg={4}>
						<p className="mb-0 mt-1">
							Copyright &copy;Bravo Car Deals, All rights reserved
						</p>
					</Col>
					<Col lg={4} className="text-center">
						<Nav className="ezy__footer2_wa59NKzY-nav justify-content-center mt-1">
							{navigations.map((item, i) => (
								<NavigationItem item={item} key={i} />
							))}
						</Nav>
					</Col>
					<Col
						lg={4}
						className="d-flex justify-content-center justify-content-lg-end text-center text-lg-end mt-1"
					>
						<Nav className="ezy__footer2_wa59NKzY-social">
							{sociaIcons.map((social, i) => (
								<SocialItem social={social} key={i} />
							))}
						</Nav>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Footer;

