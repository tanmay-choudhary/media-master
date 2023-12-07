import { useRouter } from "next/router";

const DetailPage = () => {
	const router = useRouter();
	const { id } = router.query;
	const handleBack = () => {
		router.back();
	};
	return (
		<>
			<div className="px-12 mt-4">
				<button
					onClick={handleBack}
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="#ffff"
						height="24"
						viewBox="0 0 24 24"
						width="24"
					>
						<path d="M0 0h24v24H0V0z" fill="none" />
						<path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
					</svg>
				</button>
			</div>
			<div className="px-12  mt-5 flex items-center justify-between">
				<h1 className="text-4xl">Title</h1>
				<p className="text-blue-400 font-semibold">230 views</p>
			</div>
			<div className="flex flex-col items-center justify-center h-[80vh] px-12 mt-8">
				<iframe
					className="lg:w-full lg:h-full w-full h-auto"
					src="https://www.youtube.com/embed/h2BcitZPMn4?si=klHk2Wd48eJoXxNv"
					frameBorder="0"
					allowFullScreen
				></iframe>
			</div>
		</>
	);
};

export default DetailPage;
