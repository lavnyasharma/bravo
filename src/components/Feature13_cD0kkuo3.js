import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Feature13_cD0kkuo3.css";

const features = [
	{
		title: "Value your car",
		description:
			"Get a free, instant car valuation. Then add info and take photos to create a profile of your vehicle.",
		image: "https://static.motorway.co.uk/static/assets_seller/step_1.c9110622a4312fb7925a.avif",
	},
	{
		title: "Get your best offer",
		description:
			"5,000+ dealers compete to buy your car in an online sale. We share their best offer that day for you to approve.",
		image: "https://static.motorway.co.uk/static/assets_seller/step_2.b5e1e86238989057aca3.avif",
	},
	{
		title: "Complete your sale",
		description:
			"Complete your sale in as little as 24 hours, with home collection and fast payment.† All completely free.",
		image: "https://ewsorupyhavslsemnmhd.supabase.co/storage/v1/object/public/car-images/images.jpeg",
	},
];

const FeatureItem = ({ feature }) => {
	return (
		<div className="ezy__featured13_cD0kkuo3-item position-relative p-4 p-lg-5">
			<img
				src={feature.image}
				alt=""
				className="img-fluid ezy__featured13_cD0kkuo3-banner mb-4"
			/>
			<h4 className="ezy__featured13_cD0kkuo3-title fs-4 fw-bold mb-3">
				{feature.title}
			</h4>
			<p className="ezy__featured13_cD0kkuo3-content mb-0">{feature.description}</p>
		</div>
	);
};

FeatureItem.propTypes = {
	feature: PropTypes.object.isRequired,
};

const Feature13_cD0kkuo3 = () => {
	return (
		<section className="ezy__featured13_cD0kkuo3" id="features">
			<Container>
				<Row className="justify-content-center mb-5">
					<Col lg={7} className="text-center">
						<h2 className="ezy__featured13_cD0kkuo3-heading mb-4">Ready. Set. Sold</h2>
						<p className="ezy__featured13_cD0kkuo3-sub-heading mb-4">
						Sell your car the more money way, in three easy steps
						</p>
					</Col>
				</Row>
				<Row className="text-center">
					{features.map((feature, i) => (
						<Col md={4} className={classNames({ "mt-4 mt-md-0": i })} key={i}>
							<FeatureItem feature={feature} />
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default Feature13_cD0kkuo3;

