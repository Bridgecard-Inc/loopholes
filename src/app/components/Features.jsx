import React from "react";
import Card from "./shared/Card";

const Features = () => {
	return (
		<div className="lg:px-[10%] px-[5%] lg:py-24 py-24 flex flex-col items-center bg-gray-100">
			<h4 className="text-center text-primary font-medium">Use Loopholes</h4>
			<h1 className="text-center font-medium md:text-4xl text-2xl mt-6 lg:max-w-[800px] lg:leading-[50px] ">
				Say goodbye to manual reconciliations and hello to streamlined financial
				accounting.
			</h1>

			<div className="mt-20 grid md:grid-cols-3 gap-3 max-w-[500px] md:max-w-screen-lg">
				<Card
					heading={"Real-time Transaction Accounting: "}
					text={`Each time money moves across your entire fintech platform, Loopholes does the accounting to ensure that you receive the expected value and that you’re not giving out more than you should.
`}
				/>
				<div className="grid gap-3">
					<Card
						heading={"Customizable Alerts: "}
						text={` Tailor Loopholes to your specific needs and receive alerts for potential issues.

`}
					/>{" "}
					<Card
						heading={"Seamless Integration and third-party support: "}
						text={`

Loopholes supports several third party software where you hold your money and also Integrates seamlessly into your existing infrastructure, without disrupting your workflow.

`}
					/>
				</div>
				<Card
					heading={"Bridge between accounting and engineering:  "}
					text={`With our SDK, your engineering team can securely log all transactions and revenue for accounting and you can easily spot engineering bugs making you lose money.

`}
				/>{" "}
			</div>
		</div>
	);
};

export default Features;
