/* eslint-disable react/prop-types */
const Text = ({ text }) => {
	return (
		<p className=" text-3xl md:text-2xl leading-loose mt-[50px] md:text-center md:my-10 s:text-xl">
			{text}
		</p>
	);
};

export default Text;
