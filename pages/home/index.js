import Card from "@/components/Card";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Index() {
  const [cardData, setCardData] = useState([]);
  const [thumbnailURL, setThumbnailURL] = useState("");
  const [title, setTitle] = useState("");
  const [videoURL, setVideoURL] = useState("");
  ///console.log(cardData);
  useEffect(() => {
    // Fetch card data from localhost:3001/videos
    async function getData() {
      await fetch("http://localhost:3001/videos")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setCardData(data);
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
    getData();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    async function helper() {
      console.log("helper");
      let url = videoURL;
      await onSubmit({ title, url });
    }
    helper();
    setTitle("");
    setVideoURL("");
    setShowForm(false);
  };
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post(
        "http://localhost:3001/addVideos",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Video added successfully:", response.data);
    } catch (error) {
      console.error("Error adding video:", error.message);
    }
  };
  const [showForm, setShowForm] = useState(false);

  const handleCancel = () => {
    setShowForm(false);
  };

  return (
    <>
      <div className="p-8">
        <h1 className="text-2xl font-semibold "> Your Viewed History</h1>
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
                        onChange={(e) => setTitle(e.target.value)}
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
                        onChange={(e) => setVideoURL(e.target.value)}
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
              id={card.video_id}
              youtube_url={card.video_url}
              title={card.title}
            />
          ))}
        </main>
      </div>
    </>
  );
}

export default Index;
