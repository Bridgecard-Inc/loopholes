import React from "react";

const Hero = () => {
	return (
		<section className="h-auto flex flex-col items-center lg:px-[10%] px-[5%] lg:py-24 md:py-24 py-16 bg-teal-50">
			<h1 className="font-medium lg:text-6xl text-3xl md:text-4xl md:max-w-[800px] text-center md:leading-[48px] lg:leading-[65px] text-primary">
				Track how money moves through your financial product.
			</h1>
			<p className="text-center mt-8 lg:max-w-[800px] text-primary sm:text-base md:max-w-[600px] text-sm">
				{`	With fintech products, transactions zip through APIs and Webhooks at
				lightning speed, making manual reconciliation a near-impossible task. If
				you've ever faced inconsistencies in your financial records or struggled
				to reconcile transactions with third-party partners, Loopholes is right
				for you.`}
			</p>

			<button class="bg-primary text-white font-bold py-3 px-5 rounded-full mt-10">
				Request a Demo
			</button>
		</section>
	);
};

export default Hero;
