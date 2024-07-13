import { Button } from "@mui/material";
import NavItems from "../../constants/NavItems";
import { useEffect, useState } from "react";
import UdevsIcon from "../UdevsIcon";
import SocialsList from "../SocialsList";

const Navbar = () => {
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);
	const [show, setShow] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setScreenWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div className="flex justify-between items-center w-[85%] md:w-90% mx-auto my-0 bg-white">
			<UdevsIcon />
			<div
				className={`w-[90%] flex justify-end duration-300 items-center md:absolute md:w-full md:h-screen ${
					show ? "md:right-0" : "md:-right-[100%]"
				} md:top-0 md:bg-[#f4f7ff] md:block`}>
				<div className="hidden w-full justify-between p-6 md:flex mb-20 ">
					<UdevsIcon />
					<div
						onClick={() => {
							setShow(false);
						}}
						className="hidden md:block  text-4xl font-bold cursor-pointer top-5 right-5 ">
						<i className="bx bx-x"></i>
					</div>
				</div>
				{NavItems.map((item, i) =>
					item.type ? (
						<a
							href={`#${item.navItem}`}
							key={i}>
							<Button
								onClick={() => {
									setShow(false);
								}}
								variant="contained"
								sx={(theme) => ({
									fontWeight: "bold",
									marginLeft: "2%",
									color: "white",
									[theme.breakpoints.down(960)]: {
										width: "90%",
										fontSize: "30px",
										display: "block",
										margin: "0 auto",
										marginTop: "80px",
									},
								})}>
								{item.navItem}
							</Button>
						</a>
					) : (
						<a
							key={i}
							href={`#${item.navItem}`}>
							<Button
								onClick={() => {
									setShow(false);
								}}
								key={i}
								sx={(theme) => ({
									fontWeight: "bold",
									marginLeft: "2%",
									color: "black",
									borderBottomLeftRadius: "0",
									borderBottomRightRadius: "0",
									borderBottom: {
										...(screenWidth > 960 && {
											borderBottom: "2px solid transparent",
										}),
									},
									"&:hover": {
										...(screenWidth > 960 && {
											borderBottom: "2px solid blue",
											backgroundColor: "transparent",
										}),
									},
									[theme.breakpoints.down(960)]: {
										display: item.isShow ? "block" : "none",
										margin: "0 auto",
										fontSize: "30px",
										marginBottom: "10px",
									},
								})}>
								{item.navItem}
							</Button>
						</a>
					),
				)}
				<div className="hidden md:flex justify-center mt-10">
					<SocialsList />
				</div>
			</div>
			<div
				className="cursor-pointer hidden md:block"
				onClick={() => {
					setShow(true);
				}}>
				<i
					className="bx bx-menu"
					style={{ fontSize: "40px" }}></i>
			</div>
		</div>
	);
};

export default Navbar;
