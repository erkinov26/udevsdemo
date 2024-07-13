import {
	design,
	optimization,
	phoneSrc,
	struct,
	team,
} from "../assets/images/struct";
import { consult } from "../assets/images/struct";
const NavItems = [
	{
		navItem: "Direction",
		isShow: false,
	},
	{
		navItem: "Command",
		isShow: true,
	},
	{
		navItem: "Services",
		isShow: true,
		navItemList: [
			{
				icon: phoneSrc,
				text: "Development of mobile applications",
			},
			{
				icon: consult,
				text: `IT Consulting`,
			},
			{
				icon: team,
				text: "Team",
			},
			{
				icon: struct,
				text: `Development and implementation ERP systems`,
			},
			{
				icon: design,
				text: "User interface, User experience design",
			},
			{
				icon: optimization,
				text: `Optimization IT consulting infrastructure`,
			},
		],
	},
	{
		navItem: "Tools",
		isShow: false,
	},
	{
		navItem: "Clients",
		isShow: true,
	},
	{
		navItem: "Portfolio",
		isShow: false,
	},
	{
		navItem: "Language",
		isShow: false,
	},
	{
		navItem: "Contact",
		isShow: true,
		type: "button",
	},
];

export default NavItems;
