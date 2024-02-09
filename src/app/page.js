"use client";

import React from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Integrate from "./components/Integrate";

export default function Home() {
	return (
		<React.Fragment>
			<Hero />
			<Integrate />
			<Features />
		</React.Fragment>
	);
}
