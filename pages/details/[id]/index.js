import { useRouter } from "next/router";
import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
import axios from "axios";
const DetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState({});
  // Check if the "userDetails" cookie exists before parsing
  const userCookie = Cookies.get("userDetails");
  const user = userCookie ? JSON.parse(userCookie) : null;
  //   console.log("User email:", user);
  //   console.log("User password:", user.password);
  useEffect(() => {
    // Fetch card data from localhost:3001/videos
    async function getData() {
      await fetch(`http://65.1.3.130:3001/getVideoById/${id}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setData(data);
        })
        .catch((error) => console.error("Error fetching data:", error));
      if (id) {
        try {
          let user_id = "1";
          if (user.username == "user2") {
            user_id = "2";
          }
          const response = await axios.post(
            "http://65.1.3.130:3001/viewed-video",
            { video_id: id, user_id: user_id },
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
      }
    }
    getData();
  }, [id]);
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
        <h1 className="text-4xl">{data?.title}</h1>
        <p className="text-blue-400 font-semibold">{data?.view_count} views</p>
      </div>
      <div className="flex flex-col items-center justify-center h-[80vh] px-12 mt-8">
        <iframe
          className="lg:w-full lg:h-full w-full h-auto"
          src={
            data?.video_url ||
            "https://www.youtube.com/embed/lRFeuSH9t44?si=c8_vt42LLgByFwp-"
          }
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default DetailPage;
