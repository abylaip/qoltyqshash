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
        {news.map((item) => (
          <News
            name={item.name}
            avatar={item.avatar}
            createdAt={item.createdAt}
            textContent={item.textContent}
            imageContent={item.imageContent}
            likesCount={item.likesCount}
          />
        ))}
      </div>
    </>
  );
};

const news = [
  {
    avatar: "/static/Zhandos.jpeg",
    name: "Zhandos Abdireshov",
    createdAt: "1 minute ago",
    textContent:
      "Hey guys! I was officially accepted at Deloitte for the position of middle data scientist! I'm looking forward to working with @deloitte!",
    imageContent: "/static/data_science.jpeg",
    likesCount: 17,
  },
  {
    avatar: "/static/nezuko.jpeg",
    name: "Alibek Kuantkhan",
    createdAt: "3 hours ago",
    textContent:
      "Hello! My name is Alibek, and I am new user of this amazing web-site",
    imageContent: "/static/welcome.jpeg",
    likesCount: 7,
  },
  {
    avatar: "/static/kaspi.png",
    name: "Kaspi",
    createdAt: "Yesterday at 6:37 P.M.",
    textContent:
      "Hello everybody! We would like to announce that 15th June we will start Kaspi Data Scienc Academy! Join us! Other information will be available in 10th June, so follow us!",
    imageContent: "/static/datalab.png",
    likesCount: 89,
  },
  {
    avatar: "/static/elefanto.svg",
    name: "Elefanto",
    createdAt: "2 weeks ago",
    textContent:
      "Good day dear friends, we would like to congratulate our Mussina Medina with a promotion to middle ux/ui designer! Сongratulations!",
    imageContent: "/static/uxui.avif",
    likesCount: 20,
  },
  {
    avatar: "/static/placeholder.png",
    name: "Magripa",
    createdAt: "1 months ago",
    textContent:
      "Attention! Attention! Attention! Today is the historical day, because we start our QLS website to the whole world! Come and enjoy!!!",
    imageContent: "/static/firework.jpeg",
    likesCount: 667,
  },
];

export default Home;
