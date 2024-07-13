import { Typewriter } from "react-simple-typewriter";

const TypeWriter = () => {
	const handleType = (count) => {
		// access word count number
		console.log(count);
	};

	const handleDone = () => {
		console.log(`Done after 5 loops!`);
	};

	return (
		<h1 className="text-5xl font-semibold text-[#165bf7] xs:text-3xl xs:font-bold">
			<Typewriter
				words={[
					"Development and implementation ERP systems",
					"User interface, User experience design",
					"Optimization IT consulting infrastructure",
					"IT consulting!",
				]}
				loop={Infinity}
				cursor
				cursorStyle="_"
				typeSpeed={70}
				deleteSpeed={50}
				delaySpeed={1000}
				onLoopDone={handleDone}
				onType={handleType}
			/>
		</h1>
	);
};

export default TypeWriter;
