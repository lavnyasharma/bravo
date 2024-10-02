import React, { Fragment, useEffect, useLayoutEffect, useState } from "react";
import { Card, Carousel, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import PropTypes from "prop-types";
import "./Testimonial.css";

const testimonialList = [
	{
		author: {
			fullName: "Akshay Kumar",
			picture: "https://cdn.easyfrontend.com/pictures/users/user22.jpg",
		},
		rating: 3.5,
		description:
			"Over third given bring lights divide saying. Fowl, all creeping second saw creature isn't gathered likeness shall fruitful saying let.",
	},
	{
		author: {
			fullName: "Raima Sen",
			picture: "https://cdn.easyfrontend.com/pictures/users/user4.jpg",
		},
		rating: 4,
		description:
			"Tree the whales fifth for their whose. Deep From fruitful spirit creature morning, fowl greater said, it first creepeth after.",
	},
	{
		author: {
			fullName: "Arjun Kapur",
			picture: "https://cdn.easyfrontend.com/pictures/users/user20.jpg",
		},
		rating: 5,
		description:
			"Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores, illum at, aliquid blanditiis eligendi qui.",
	},
	{
		author: {
			fullName: "Akshay Kumar",
			picture: "https://cdn.easyfrontend.com/pictures/users/user22.jpg",
		},
		rating: 3.5,
		description:
			"Over third given bring lights divide saying. Fowl, all creeping second saw creature isn't gathered likeness shall fruitful saying let.",
	},
	{
		author: {
			fullName: "Raima Sen",
			picture: "https://cdn.easyfrontend.com/pictures/users/user4.jpg",
		},
		rating: 4,
		description:
			"Tree the whales fifth for their whose. Deep From fruitful spirit creature morning, fowl greater said, it first creepeth after.",
	},
	{
		author: {
			fullName: "Arjun Kapur",
			picture: "https://cdn.easyfrontend.com/pictures/users/user20.jpg",
		},
		rating: 5,
		description:
			"Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores, illum at, aliquid blanditiis eligendi qui.",
	},
];

const Rating = ({ rating, showLabel, className, ...rest }) => (
	<p
		className={classNames("mb-4 ezy__testimonial7_otOa5FTR-rating", className)}
		{...rest}
	>
		<span>
			{[...Array(5)].map((_, i) => {
				const index = i + 1;
				let content = "";
				if (index <= Math.floor(rating))
					content = <FontAwesomeIcon icon={faStar} className="me-1 active" />;
				else if (rating > i && rating < index + 1)
					content = (
						<FontAwesomeIcon icon={faStarHalfAlt} className="me-1 active" />
					);
				else if (index > rating)
					content = <FontAwesomeIcon icon={faStar} className="me-1" />;

				return <Fragment key={i}>{content}</Fragment>;
			})}
		</span>
		{showLabel && <span>{rating.toFixed(1)}</span>}
	</p>
);

Rating.propTypes = {
	rating: PropTypes.number.isRequired,
	showLabel: PropTypes.bool,
	className: PropTypes.string,
};

const TestimonialItem = ({ testimonial }) => (
	<Card className="ezy__testimonial7_otOa5FTR-item">
		<Card.Body className="px-lg-4 pt-4 pb-lg-5">
			<img
				src={testimonial.author.picture}
				alt={testimonial.author.fullName}
				className="img-fluid rounded-circle mb-4 border"
				width="100"
			/>
			<h4 className="ezy__testimonial7_otOa5FTR-title fs-5 mb-1">
				{testimonial.author.fullName}
			</h4>
			<Rating rating={testimonial.rating} showLabel={false} />
			<p className="ezy__testimonial7_otOa5FTR-content mb-0">
				{testimonial.description}
			</p>
		</Card.Body>
	</Card>
);

TestimonialItem.propTypes = {
	testimonial: PropTypes.object.isRequired,
};

const TestimonialList = ({ testimonials, perSlide }) => {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<Carousel activeIndex={index} onSelect={handleSelect} controls={false}>
			{testimonials
				.reduce((list, item, index) => {
					const chunkI = Math.floor(index / perSlide);
					if (!list[chunkI]) list[chunkI] = [];
					list[chunkI].push(item);

					return list;
				}, [])
				.map((testimonialChunk, chunkI) => (
					<Carousel.Item key={chunkI}>
						<Row className="ezy__testimonial7_otOa5FTR-card">
							{testimonialChunk.map((testimonial, i) => (
								<Col className="mt-3 mt-lg-4" key={i}>
									<TestimonialItem testimonial={testimonial} />
								</Col>
							))}
						</Row>
					</Carousel.Item>
				))}
		</Carousel>
	);
};

TestimonialList.propTypes = {
	testimonials: PropTypes.array.isRequired,
	perSlide: PropTypes.number.isRequired,
};

TestimonialList.defaultProps = {
	perSlide: 1,
};

const Testimonial = () => {
	const [windowWidth, setWindowWidth] = useState(0);
	const [perSlide, setPerSlide] = useState(3);

	useLayoutEffect(() => {
		function updateWindowWidth() {
			setWindowWidth(window.innerWidth);
		}
		window.addEventListener("resize", updateWindowWidth);
		updateWindowWidth();
		return () => window.removeEventListener("resize", updateWindowWidth);
	}, []);

	useEffect(() => {
		if (windowWidth > 991) setPerSlide(3);
		else if (windowWidth > 767) setPerSlide(2);
		else setPerSlide(1);
	}, [windowWidth]);

	return (
		<section className="ezy__testimonial7_otOa5FTR" id="testi">
			<Container>
				<Row className="mb-4 mb-md-5">
					<Col lg={5}>
						<h2 className="ezy__testimonial7_otOa5FTR-heading mb-4">
							Everyone should believe in What Our Client Say.
						</h2>
					</Col>
					<Col lg={4} className="offset-lg-1">
						<p className="ezy__testimonial7_otOa5FTR-sub-heading mb-0">
							It’s easier to reach your savings goals when you have the right
							savings account. Take a look and find the right one for you!
						</p>
					</Col>
				</Row>

				<TestimonialList testimonials={testimonialList} perSlide={perSlide} />
			</Container>
		</section>
	);
};

export default Testimonial;

