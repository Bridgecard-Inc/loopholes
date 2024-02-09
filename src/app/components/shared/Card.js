import React from "react";

export default function Card({ heading, text }) {
	return (
		<div className="bg-white h-auto shadow-xl rounded-2xl p-5">
			<h1 className="font-semibold mb-4 text-base">{heading}</h1>
			<p className="text-sm">{text}</p>
		</div>
	);
}
