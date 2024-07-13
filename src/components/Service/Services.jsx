import NavItems from "../../constants/NavItems";
import Title from "../Title";
import ServicesItem from "./ServicesItem";

const Services = () => {
	return (
		<div
			id="Direction"
			className="py-20 min-h-screen">
			<Title title={"Our services"} />
			<div className="flex flex-wrap justify-between">
				{NavItems.map(
					(item) =>
						item.navItemList &&
						item.navItemList.map((nav, index) => (
							<ServicesItem
								key={index}
								img={nav.icon}
								text={nav.text}
							/>
						)),
				)}
			</div>
		</div>
	);
};

export default Services;
