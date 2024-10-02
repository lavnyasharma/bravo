import React, { useState } from "react";
import { Button, Col, Collapse, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import "./Faq.css";

const faqList = [
	{
		isActive: true,
		question: "Can I sell my car on finance?",
		answer:
			"Yes, you can sell your financed car, with bravocardeals if it’s on a Hire Purchase (HP) or Personal Contract Purchase (PCP) agreement. You don’t have to have paid off all of the finance already; but subject to your contract, there may be a minimum repayment before you have the right to sell. If you’re ready to sell on finance, the first step is to get a settlement letter with the ‘settlement figure’ from your lender, and get a car valuation. Read more in our guide to selling your financed car.",
	},
	{
		isActive: false,
		question: "Is it free to sell my car with bravocardeals?",
		answer:
			"It’s always free to value your car with zero obligations, and there are no admin, payment, collection fees, or hidden charges of any kind when you sell with us. You’ll receive your highest offer from our online daily sale, and if your car is as described during profiling, you’ll receive every penny. We take a commission fee from the dealer who buys your car, to keep bravocardeals completely free for our customers. See how it works here.",
	},
	{
		isActive: false,
		question: "How can I sell my car fast?",
		answer:
			"It’s easy to sell your car fast with bravocardeals. It’s quick to value your vehicle and get your car ready for sale. You’ll receive your best price from over 5,000+ dealers the same day and have your car sold in as little as 24 hours. Fast, free home collection and payment also means you’ll have funds in your bank account in no time too. There’s no compromise between speed and convenience when you sell the bravocardeals way. Sell quickly today!",
	},
	{
		isActive: false,
		question: "How much is my car worth?",
		answer:
			"bravocardeals’s smart valuation tech uses live data from the UK car market and daily sales info from our own network, so no matter when you check your used car’s value, your estimated selling price will always be accurate. Click here for a free car valuation and tracking.",
	},
	{
		isActive: false,
		question: "Who will buy my car?",
		answer:
			"At bravocardeals, dealers compete to give you their best price, and buy your car. Once your car has received competing offers from our network in the daily online sale, you can agree to sell it to the dealer who offers the highest price. ",
	},
	{
		isActive: false,
		question: "Can I use Bravo Car Deals designs in my portfolio?",
		answer:
			"When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different.",
	},
	
];

const FaqItem = ({ faq }) => {
	const [isOpen, setIsOpen] = useState(faq.isActive || false);

	const toggleFaq = () => setIsOpen(!isOpen);

	return (
		<div className="ezy__faq2_2NBg5iEa-item mt-4">
			<Button
				variant=""
				className="p-3 p-lg-4 w-100 text-start d-flex justify-content-between align-items-center ezy__faq2_2NBg5iEa-btn-collapse"
				type="button"
				onClick={toggleFaq}
			>
				<span>{faq.question}</span>
				{isOpen ? (
					<FontAwesomeIcon icon={faMinus} />
				) : (
					<FontAwesomeIcon icon={faPlus} />
				)}
			</Button>
			<Collapse in={isOpen}>
				<div>
					<div className="ezy__faq2_2NBg5iEa-content px-3 px-lg-4 pb-lg-4">
						<p className="opacity-50 mb-0">{faq.answer}</p>
					</div>
				</div>
			</Collapse>
		</div>
	);
};

FaqItem.propTypes = {
	faq: PropTypes.object.isRequired,
};

const Faq2_2NBg5iEa = () => {
	return (
		<section className="ezy__faq2_2NBg5iEa" id="faq">
			<Container>
				<Row className="justify-content-center mb-md-4">
					<Col lg={8} xl={7} className="text-center">
						<h2 className="ezy__faq2_2NBg5iEa-heading mb-3">
							Frequently Asked Questions
						</h2>
						<p className="ezy__faq2_2NBg5iEa-sub-heading mb-0">
							It’s easier to reach your savings goals when you have the right
							savings account. Take a look and find the right one for you!
						</p>
					</Col>
				</Row>
				<Row>
					<Col md={6}>
						{faqList.slice(0, Math.floor(faqList.length / 2)).map((faq, i) => (
							<FaqItem faq={faq} key={i} />
						))}
					</Col>
					<Col md={6}>
						{faqList
							.slice(Math.floor(faqList.length / 2), faqList.length)
							.map((faq, i) => (
								<FaqItem faq={faq} key={i} />
							))}
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Faq2_2NBg5iEa;

