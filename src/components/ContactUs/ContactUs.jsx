import { Button, TextField } from "@mui/material";
import Title from "../Title";

const ContactUs = () => {
	const data = [
		{
			icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDE0QzEzLjY1NjkgMTQgMTUgMTIuNjU2OSAxNSAxMUMxNSA5LjM0MzE1IDEzLjY1NjkgOCAxMiA4QzEwLjM0MzEgOCA5IDkuMzQzMTUgOSAxMUM5IDEyLjY1NjkgMTAuMzQzMSAxNCAxMiAxNFoiIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTcuNjU3IDE2LjY1NjdMMTMuNDE0IDIwLjg5OTdDMTMuMDM5IDIxLjI3NDMgMTIuNTMwNiAyMS40ODQ4IDEyLjAwMDUgMjEuNDg0OEMxMS40NzA0IDIxLjQ4NDggMTAuOTYyIDIxLjI3NDMgMTAuNTg3IDIwLjg5OTdMNi4zNDMgMTYuNjU2N0M1LjIyNDIyIDE1LjUzNzkgNC40NjIzNCAxNC4xMTI0IDQuMTUzNjkgMTIuNTYwNkMzLjg0NTA0IDExLjAwODcgNC4wMDM0OSA5LjQwMDIyIDQuNjA5MDEgNy45Mzg0NEM1LjIxNDUyIDYuNDc2NjUgNi4yMzk5IDUuMjI3MjUgNy41NTU0OCA0LjM0ODIxQzguODcxMDcgMy40NjkxOCAxMC40MTc4IDMgMTIgM0MxMy41ODIyIDMgMTUuMTI4OSAzLjQ2OTE4IDE2LjQ0NDUgNC4zNDgyMUMxNy43NjAxIDUuMjI3MjUgMTguNzg1NSA2LjQ3NjY1IDE5LjM5MSA3LjkzODQ0QzE5Ljk5NjUgOS40MDAyMiAyMC4xNTUgMTEuMDA4NyAxOS44NDYzIDEyLjU2MDZDMTkuNTM3NyAxNC4xMTI0IDE4Ljc3NTggMTUuNTM3OSAxNy42NTcgMTYuNjU2N1YxNi42NTY3WiIgc3Ryb2tlPSIjMUI1QkY3IiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=",
			text: "Ташкент, Мирзо-Улугбекский район, 5-й пр. Курган, 32 адрес",
		},
		{
			icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNiA0SDEwTDEyIDlMOS41IDEwLjVDMTAuNTcxIDEyLjY3MTUgMTIuMzI4NSAxNC40MjkgMTQuNSAxNS41TDE2IDEzTDIxIDE1VjE5QzIxIDE5LjUzMDQgMjAuNzg5MyAyMC4wMzkxIDIwLjQxNDIgMjAuNDE0MkMyMC4wMzkxIDIwLjc4OTMgMTkuNTMwNCAyMSAxOSAyMUMxNS4wOTkzIDIwLjc2MyAxMS40MjAyIDE5LjEwNjUgOC42NTY4MyAxNi4zNDMyQzUuODkzNSAxMy41Nzk4IDQuMjM3MDUgOS45MDA3NCA0IDZDNCA1LjQ2OTU3IDQuMjEwNzEgNC45NjA4NiA0LjU4NTc5IDQuNTg1NzlDNC45NjA4NiA0LjIxMDcxIDUuNDY5NTcgNCA2IDQiIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K",
			text: "+998 33 66 00 999",
		},
		{
			icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5IDVINUMzLjg5NTQzIDUgMyA1Ljg5NTQzIDMgN1YxN0MzIDE4LjEwNDYgMy44OTU0MyAxOSA1IDE5SDE5QzIwLjEwNDYgMTkgMjEgMTguMTA0NiAyMSAxN1Y3QzIxIDUuODk1NDMgMjAuMTA0NiA1IDE5IDVaIiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTMgN0wxMiAxM0wyMSA3IiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==",
			text: "azizbek.b@udevs.io",
		},
		{
			icon: "<TelegramIcon />",
			text: "t.me/azizbekbakhodirov",
		},
	];
	return (
		<div
			id="Contact"
			className="w-[85%] mx-auto min-h-screen py-20 md:w-[90%]  ">
			<Title title={"Contact Us"} />

			<div
				style={{ boxShadow: "2px 10px 28px rgba(75, 0, 129, .12)" }}
				className="w-full mt-24 min-h-screen rounded py-16  px-28 md:p-4">
				<div className="text-2xl font-semibold mb-10">Leave us a message</div>
				<div className="flex justify-between md:block">
					<div className="w-[45%]  my-4 md:w-full">
						<form>
							<TextField
								required
								label="Name"
								className="w-full"
								sx={{ marginBottom: "30px" }}
							/>
							<TextField
								required
								label="Your Email"
								className="w-full"
								sx={{ marginBottom: "30px" }}
							/>
							<TextField
								required
								label="Briefly describe your project"
								className="w-full"
								sx={{ marginBottom: "30px" }}
							/>
							<Button
								variant="contained"
								className="w-full">
								Send
							</Button>
						</form>
					</div>
					<div className="w-[50%] md:w-full">
						{data.map((item, i) => (
							<div
								key={i}
								className="flex items-center my-4">
								<img
									src={item.icon}
									alt=""
								/>
								<p className="ml-4 text-xl font-semibold">{item.text}</p>
							</div>
						))}
						<div
							className="md:w-full"
							style={{ position: "relative", overflow: "hidden" }}>
							<a
								href="https://yandex.uz/maps/10335/tashkent/?utm_medium=mapframe&utm_source=maps"
								style={{
									color: "#eee",
									fontSize: "12px",
									position: "absolute",
									top: "0px",
								}}>
								Toshkent
							</a>
							<a
								href="https://yandex.uz/maps/10335/tashkent/house/YkAYdQdhSUwHQFprfX9ycnpjZA==/?ll=69.301089%2C41.333600&utm_medium=mapframe&utm_source=maps&z=16.28"
								style={{
									color: "#eee",
									fontSize: "12px",
									position: "absolute",
									top: "14px",
								}}>
								Qorgon 5-tor kochasi, 32 — Yandex Xarita
							</a>
							<iframe
								src="https://yandex.uz/map-widget/v1/?ll=69.301089%2C41.333600&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoyNDkzMjA3NDQ0EjFPyrt6YmVraXN0b24sIFRvc2hrZW50LCBRb3Jnb24gNS10b3Iga28nY2hhc2ksIDMyIgoNKJqKQhWbVSVC&z=16.28"
								width="400"
								height="300"
								className="md:w-full my-8"
								allowFullScreen={true}
								style={{ position: "relative" }}></iframe>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
