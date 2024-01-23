"use client";

import { useEffect } from "react";

export default function Instagram() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <blockquote
      className="instagram-media rounded-box shadow p-2 w-96 lg:w-[40rem]"
      data-instgrm-permalink="https://www.instagram.com/chm_usa/?utm_source=ig_embed&amp;utm_campaign=loading"
      data-instgrm-version="14"
    >
      <div className="p-4">
        <a
          href="https://www.instagram.com/chm_usa/?utm_source=ig_embed&amp;utm_campaign=loading"
          className="block bg-white line-height-0 p-0 text-center text-decoration-none w-full"
          target="_blank"
        >
          <div className="flex items-center">
            <div className="bg-gray-200 border-radius-full flex-grow-0 h-10 mr-4 w-10"></div>
            <div className="flex flex-col flex-grow-1 justify-center">
              <div className="bg-gray-200 border-radius-4 flex-grow-0 h-4 mb-2 w-32"></div>
              <div className="bg-gray-200 border-radius-4 flex-grow-0 h-4 w-16"></div>
            </div>
          </div>
          <div className="padding-top-19"></div>
          <div className="block h-5 m-auto w-5">
            <svg width="50" height="50" viewBox="0 0 60 60" version="1.1">
              {/* SVG path here */}
            </svg>
          </div>
          <div className="pt-8">
            <div>View this profile on Instagram</div>
          </div>
        </a>
        <p>
          <a
            href="https://www.instagram.com/chm_usa/?utm_source=ig_embed&amp;utm_campaign=loading"
            target="_blank"
          >
            Чорноморці ⚓️ (@chm_usa) • Instagram photos and videos
          </a>
        </p>
      </div>
    </blockquote>
  );
}
