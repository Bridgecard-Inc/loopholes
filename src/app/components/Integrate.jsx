import React from "react";

const Integrate = () => {
	return (
		<div className="lg:px-[10%] px-[5%] lg:py-24 py-24 flex flex-col items-center">
			<h1 className="text-center font-medium md:text-6xl text-2xl mt-6 lg:max-w-[800px] ">
				Integrate Seamlessly
			</h1>

			<div className="grid md:grid-cols-2 flex-column justify-center gap-6 mt-14">
				<div className="bg-teal-50 h-[400px] rounded-2xl p-8">
					<p className="text-base opacity-80">
						With Loopholes, you gain real-time insights into your financial
						ecosystem. Our SDK tracks transactions across all channels, flagging
						any discrepancies or anomalies before they become costly mistakes.
					</p>
				</div>

				<div className="bg-gray-100 h-[400px] rounded-2xl p-8">
					<p className="text-base opacity-80">
						Our SDK is designed to seamlessly integrate into your fintech
						product and monitor every transaction with precision. From credits
						to debits, from your platform to third-party partners, Loopholes
						ensures that every movement of money is accounted for and you don't
						lose money.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Integrate;
