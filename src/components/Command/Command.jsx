import Text from "../Text";
import Title from "../Title";

const Command = () => {
	return (
		<div
			id="Command"
			className="w-[85%] md:w-[90%] md:block mx-auto py-20">
			<Title title={"Team"} />
			<div className="flex justify-between items-center md:flex-col-reverse">
				<div className="w-[45%] md:w-full">
					<Text
						text={
							"For each project, we form a team that includes a project manager, business analyst, UI / UX designer, DevOps, QA engineer, backend and front-end developers."
						}
					/>
					<div className="md:my-10 md:text-center">
						<div className="text-9xl font-bold text-[#165bf7] xs:text-6xl xs:mb-3 s:text-3xl">
							100+
						</div>
						<div className="text-4xl font-bold s:text-3xl">Dedicated team</div>
					</div>
				</div>
				<div className="w-[50%] md:my-10 md:w-[70%]">
					<img
						src="https://udevs.io/static/teamIcon-7e3107c853b8ec1d129a87af0e68945a.svg"
						alt="img"
						className="w-full"
					/>
				</div>
			</div>
		</div>
	);
};

export default Command;
