import icon from "../../assets/images/icon.svg";
import SocialsList from "../SocialsList";

const Footer = () => {
	const data = [
		{
			name: "AboutUs",
			list: ["Direction", "Command", "Tools", "Clients"],
		},
		{
			name: "Services",
			list: [
				"Development of mobile applications",
				"Development and implementation ERP systems",
				"User interface, User experience design",
				"IT consulting",
				"Optimization IT consulting infrastructure",
			],
		},
		{
			name: "Portfolio",
			list: ["Sms.uz", "Delever", "Goodzone", "Iman"],
		},
	];
	return (
		<div className="w-[85%] mx-auto md:w-[90%]">
			<div className="flex justify-center mb-10">
				<img
					src={icon}
					alt=""
				/>
			</div>

			<div className="flex justify-between md:block">
				{data.map((item, i) => (
					<div
						key={i}
						className="md:my-10">
						<h1 className="text-3xl font-semibold">{item.name}</h1>
						<div className="mt-8 md:mt-4">
							{item.list.map((listItem, i) => (
								<div
									className="text-[#1b5bf7] cursor-pointer my-2 font-semibold text-xl"
									key={i}>
									{listItem}
								</div>
							))}
						</div>
					</div>
				))}
			</div>

			<div className="w-full h-[1px] bg-[#1b5bf7] my-10"></div>
			<div className="flex justify-between items-center md:flex-col-reverse">
				<p className="text-[#1b5bf7] font-semibold md:mt-8">
					© 2024 Udevs. All rights reserved
				</p>
				<SocialsList />
			</div>
		</div>
	);
};

export default Footer;
