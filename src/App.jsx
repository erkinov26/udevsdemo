import Navbar from "./components/Navbar/Navbar";
import "./App.css";

import Command from "./components/Command/Command";
import Mobile from "./components/Mobile/Mobile";
import Tools from "./components/Tools/Tools";
import Hero from "./components/hero/Hero";
import Services from "./components/Service/Services";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";

export default function App() {
	return (
		<>
			<div className="fixed w-full py-4 z-50 bg-white top-0">
				<Navbar />
			</div>

			<div className="w-[85%] mx-auto relative md:w-[90%]">
				<Hero />
				<Services />
			</div>
			<div className="bg-[#f4f7ff] min-h-screen">
				<Command />
			</div>
			<Mobile />
			<div
				id="Tools"
				className="bg-[#f4f7ff] min-h-screen">
				<Tools />
			</div>
			<ContactUs />
			<div className="bg-[#f4f7ff]  py-20">
				<Footer />
			</div>
		</>
	);
}
