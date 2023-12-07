import Card from "@/components/Card";
import React, { useState } from "react";

function Index() {
	const cardData = [
		{
			id: 1,
			thumbnail: "https://placekitten.com/300/200",
			title: "Cute Kitten 1",
		},
		{
			id: 2,
			thumbnail: "https://placekitten.com/300/201",
			title: "Cute Kitten 2",
		},
		{
			id: 3,
			thumbnail: "https://placekitten.com/300/202",
			title: "Cute Kitten 3 ",
		},
		{
			id: 4,
			thumbnail: "https://placekitten.com/300/202",
			title: "Cute Kitten 3",
		},
		{
			id: 5,
			thumbnail: "https://placekitten.com/300/202",
			title: "Cute Kitten 3",
		},
	];

	const [thumbnailURL, setThumbnailURL] = useState("");
	const [title, setTitle] = useState("");
	const [videoURL, setVideoURL] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		onSubmit({ thumbnailURL, title, videoURL });

		setThumbnailURL("");
		setTitle("");
		setVideoURL("");
		setShowForm(false);
	};
	const [showForm, setShowForm] = useState(false);

	const handleCancel = () => {
		setShowForm(false);
	};

	return (
		<>
			<div className="p-8">
				<h1 className="text-2xl font-semibold ">
					{" "}
					Your Viewed History
				</h1>
			</div>
			<div className="p-8">
				<div className="flex justify-between items-center ">
					<h1 className="text-2xl font-semibold "> Watch</h1>
					<button
						className="py-3 px-7 text-blue-600 rounded-2xl  text-lg hover:text-blue-900 hover:underline"
						onClick={() => setShowForm(true)}
					>
						Add data
					</button>

					{showForm && (
						<div className="fixed inset-0 overflow-y-auto bg-black bg-opacity-50">
							<div className="flex items-center justify-center min-h-screen ">
								<div className="bg-white p-6 rounded shadow-lg">
									<div className="">
										<div className="mb-4">
											<label
												htmlFor="thumbnailURL"
												className="block text-sm font-medium text-gray-600"
											>
												Thumbnail URL
											</label>
											<input
												type="text"
												id="thumbnailURL"
												name="thumbnailURL"
												value={thumbnailURL}
												onChange={(e) =>
													setThumbnailURL(
														e.target.value,
													)
												}
												className="mt-1 p-2 w-full border rounded-md"
												required
											/>
										</div>

										<div className="mb-4">
											<label
												htmlFor="title"
												className="block text-sm font-medium text-gray-600"
											>
												Title
											</label>
											<input
												type="text"
												id="title"
												name="title"
												value={title}
												onChange={(e) =>
													setTitle(e.target.value)
												}
												className="mt-1 p-2 w-full border rounded-md"
												required
											/>
										</div>

										<div className="mb-4">
											<label
												htmlFor="videoURL"
												className="block text-sm font-medium text-gray-600"
											>
												Video URL
											</label>
											<input
												type="text"
												id="videoURL"
												name="videoURL"
												value={videoURL}
												onChange={(e) =>
													setVideoURL(e.target.value)
												}
												className="mt-1 p-2 w-full border rounded-md"
												required
											/>
										</div>

										<div className="flex justify-between mt-4">
											<button
												className="bg-blue-500 text-white px-6 py-2 rounded mr-2"
												onClick={handleSubmit}
											>
												Add 
											</button>
											<button
												className="bg-gray-400 text-white px-4 py-2 rounded"
												onClick={handleCancel}
											>
												Cancel
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
				<main className=" p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4 gap-4">
					{cardData.map((card) => (
						<Card
							key={card.id}
							thumbnail={card.thumbnail}
							title={card.title}
							id={card.id}
						/>
					))}
				</main>
			</div>
		</>
	);
}

export default Index;
