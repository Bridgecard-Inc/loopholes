"use client";

import React, { useState } from "react";
import SVG from "react-inlinesvg";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Navbar = () => {
	const [mobileNavOpen, setMobileNavOpen] = useState(false);
	const router = useRouter();

	const pathname = usePathname();

	const onActiveLink = route => {
		return pathname === route ? "nav__link--active" : null;
	};

	return (
		<React.Fragment>
			<motion.nav
				className="h-20 bg-teal-50 w-100 flex flex-row justify-between items-center lg:px-[10%] px-[5%]"
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					type: "spring",
					stiffness: 100,
					duration: 0.5,
					delay: 0.5,
				}}
			>
				<div className="nav__left">
					<h1 className="font-bold text-2xl text-primary ">Loopholes</h1>
				</div>

				<div className="nav__right"></div>
			</motion.nav>
			{/* {mobileNavOpen && <MobileNavbar setMobileNavOpen={setMobileNavOpen} />} */}
		</React.Fragment>
	);
};

export default Navbar;
