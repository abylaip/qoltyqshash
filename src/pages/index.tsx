import React from "react";
import { Header, News } from "@components";
import Image from "next/image";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <div className="px-32 py-5 flex flex-col space-y-5">
        <div className="flex flex-row space-x-4 items-center rounded-lg bg-white p-4 shadow-lg">
          <Image
            src="/static/placeholder.png"
            width={40}
            height={40}
            className="rounded-full"
          />
          <textarea
            name="post"
            id=""
            cols={30}
            rows={1}
            className="w-full"
          ></textarea>
          <label className="text-low-contrast justify-end cursor-pointer">
            <input type="file" className="hidden" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </label>
        </div>
        <News />
        <News />
        <News />
      </div>
    </>
  );
};

export default Home;
