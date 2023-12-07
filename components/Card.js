import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

const Card = ({ id, youtube_url, title }) => {
  const [thumbnail, setThumbnail] = useState("");
  console.log(id, youtube_url);
  useEffect(() => {
    // Fetch YouTube thumbnail URL
    const fetchThumbnail = async () => {
      try {
        const videoId = getVideoIdFromUrl(youtube_url);
        const apiKey = "AIzaSyD6U4tNixRWjF0y4krjP1VZ0nXENK7nC5M"; // Replace with your YouTube API key
        const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`;

        const response = await axios.get(apiUrl);
        const thumbnailUrl =
          response.data.items[0]?.snippet.thumbnails.medium.url;

        setThumbnail(thumbnailUrl);
      } catch (error) {
        console.error("Error fetching YouTube thumbnail:", error);
      }
    };

    fetchThumbnail();
  }, [youtube_url]);

  const getVideoIdFromUrl = (url) => {
    // Extract video ID from YouTube URL
    const match = url.match(/youtube\.com\/embed\/([^?]+)/);
    return match ? match[1] : null;
  };

  return (
    <Link href={`/details/${id}`} passHref>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={thumbnail} alt={title} className="w-full h-48 object-cover" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
