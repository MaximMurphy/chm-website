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
          <div className="block height-50 margin-0-auto width-50">
            <svg width="50" height="50" viewBox="0 0 60 60" version="1.1">
              {/* SVG path here */}
            </svg>
          </div>
          <div className="padding-top-8">
            <div className="text-blue-500 font-bold text-sm">
              View this profile on Instagram
            </div>
          </div>
          <div className="padding-12.5% 0"></div>
          <div className="flex flex-row mb-14 items-center">
            <div>
              <div className="bg-gray-200 border-radius-full height-12.5 width-12.5 transform-translate-x-0 transform-translate-y-7"></div>
              <div className="bg-gray-200 height-12.5 transform-rotate-45 transform-translate-x-3 transform-translate-y-1 width-12.5 flex-grow-0 mr-14 ml-2"></div>
              <div className="bg-gray-200 border-radius-full height-12.5 transform-translate-x-9 transform-translate-y-18"></div>
            </div>
            <div className="ml-8">
              <div className="bg-gray-200 border-radius-full flex-grow-0 height-20 width-20"></div>
              <div className="border-t-2 border-r-6 border-gray-200 flex-grow-0 height-0 ml-16 mt-4 transform-rotate-30"></div>
            </div>
            <div className="ml-auto">
              <div className="border-t-8 border-r-8 border-gray-200 transform-translate-y-16"></div>
              <div className="bg-gray-200 flex-grow-0 height-12 transform-translate-y-4 width-16"></div>
              <div className="border-t-8 border-l-8 border-gray-200 transform-translate-y-4 translate-x-8"></div>
            </div>
          </div>
          <div className="flex flex-col flex-grow-1 justify-center mb-24">
            <div className="bg-gray-200 border-radius-4 flex-grow-0 height-14 mb-6 width-224"></div>
            <div className="bg-gray-200 border-radius-4 flex-grow-0 height-14 width-144"></div>
          </div>
        </a>
        <p className="text-gray-400 font-family:Arial,sans-serif font-size-14 line-height-17 mb-0 mt-8 overflow-hidden pb-7 text-center text-overflow-ellipsis whitespace-nowrap">
          <a
            href="https://www.instagram.com/chm_usa/?utm_source=ig_embed&amp;utm_campaign=loading"
            className="text-gray-400 font-family:Arial,sans-serif font-size-14 font-style-normal font-weight-normal line-height-17"
            target="_blank"
          >
            Чорноморці ⚓️ (@chm_usa) • Instagram photos and videos
          </a>
        </p>
      </div>
    </blockquote>
  );
}
