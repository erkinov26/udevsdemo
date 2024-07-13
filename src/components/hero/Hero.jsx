import { Button } from "@mui/material";
import icon from "../../assets/images/icon.svg";
import TypeWriter from "./ReactTyped";

const Hero = () => {
	return (
		<div className="flex justify-between items-center min-h-screen md:block   ">
			<div className="w-[30%] md:w-[90%] md:text-center md:mx-auto md:mt-32  xs:w-full">
				<img
					src={icon}
					alt={icon}
					className="md:w-[50%] xs:w-[50%] md:block md:mx-auto"
				/>
				<p className="text-gray-500 font-bold text-4xl my-4 md:text-center xs:text-2xl">
					IT-Outsourcing Company
				</p>
				<TypeWriter />
				<Button
					variant="contained"
					sx={{
						fontWeight: "bold",
						mt: "20px",
						width: "200px",
						height: "50px",
					}}>
					Contact
				</Button>
			</div>
			<div className="w-[50%] md:mt-20 md:w-[70%] md:mx-auto xs:w-[90%]">
				<img
					className=" md:w-full"
					src="https://udevs.io/static/hero-304cdf863047286a47c1e063154824d8.svg"
					alt="image"
				/>
			</div>
		</div>
	);
};

export default Hero;
