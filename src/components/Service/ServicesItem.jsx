/* eslint-disable react/prop-types */
const ServicesItem = ({ img, text }) => {
	return (
		<div className="p-8 w-[30%] min-h-[180px] md:min-h-[140px] my-4 bg-[#f4f7ff] rounded xs:mx-auto md:w-[44%] s:w-[90%] ">
			<img
				src={img}
				alt={img}
			/>
			<p className="text-2xl  font-semibold mt-6 md:text-xl xs:text-xs s:text-xl">
				{text}
			</p>
		</div>
	);
};

export default ServicesItem;
