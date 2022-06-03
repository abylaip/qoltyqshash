import Image from "next/image";
import { Progress, Switch } from "@ui";
import { Header, Modal, News } from "@components";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Contract = () => {
  return <Company />;
};

const Company = () => {
  return (
    <>
      <Header />
      <div className="px-32 py-5 flex flex-col space-y-5">
        <p className="text-gray-400 cursor-default">
          Main page / <Link href="/my-contracts">My Contracts</Link> /{" "}
          <span className="font-semibold text-accent">EPAM</span>
        </p>
        <section className="rounded-lg bg-white shadow-lg">
          <div className="py-6 rounded-t-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
          <div className="border-b border-gray-300 flex flex-row items-center py-5 px-7">
            <div className="flex-1 flex flex-row items-center space-x-5">
              <Image
                src="/static/placeholder.png"
                width={100}
                height={100}
                className="rounded-full"
              />
              <div>
                <p className="font-semibold text-high-contrast text-xl">EPAM</p>
                <p className="text-gray-500">IT/Blockchain</p>
              </div>
            </div>
            <div className="flex-1 flex flex-col space-y-2 items-center justify-start">
              <Progress value={100} />
              <Progress value={100} />
              <Progress value={100} />
            </div>
          </div>
          <div className="py-5 px-7 w-full flex flex-row">
            <p className="text-high-contrast text-lg font-semibold">
              Company’s contracts are not visible for users
            </p>
          </div>
        </section>
        <section className="rounded-lg bg-white shadow-lg p-7">
          <div className="pb-4 border-b border-gray-300">
            <p className="text-primary font-semibold text-xl">About Company</p>
          </div>
          <div className="pt-4 flex flex-col sapce-y-2">
            <p className="text-high-contrast font-semibold text-lg">
              Description
            </p>
            <p className="text-low-contrast">Almaty, Kazakhstan</p>
          </div>
        </section>
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

const Profile = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <>
      <Header />
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <div className="flex flex-col space-y-5 w-full">
          <p className="text-accent text-xl font-medium">Add an education</p>
          <div className="space-y-2">
            <p className="text-low-contrast">Write a place of study</p>
            <input
              type="text"
              className="rounded bg-blue-50 p-3 w-full"
              placeholder="Name"
            />
          </div>
          <div className="space-y-2">
            <p className="text-low-contrast">Write a degree</p>
            <input
              type="text"
              className="rounded bg-blue-50 p-3 w-full"
              placeholder="Degree"
            />
          </div>
          <button className="bg-accent py-2 rounded text-white">Add</button>
        </div>
      </Modal>
      <div className="px-32 py-5 flex flex-col space-y-5">
        <p className="text-gray-400 cursor-default">
          Main page / <span className="font-semibold text-accent">Profile</span>
        </p>
        <section className="rounded-lg bg-white shadow-lg">
          <div className="py-6 rounded-t-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
          <div className="border-b border-gray-300 flex flex-row items-center py-5 px-7">
            <div className="flex-1 flex flex-row items-center space-x-5">
              <Image
                src="/static/placeholder.png"
                width={100}
                height={100}
                className="rounded-full"
              />
              <div>
                <p className="font-semibold text-high-contrast text-xl">
                  Abylay Aiyp
                </p>
                <p className="text-gray-500">Software Engineer</p>
              </div>
            </div>
            <div className="flex-1 flex flex-col space-y-2 items-center justify-start">
              <Progress value={100} />
              <Progress value={99} />
              <Progress value={40} />
            </div>
          </div>
          <div className="py-5 px-7 w-full flex flex-row justify-between">
            <p className="text-high-contrast text-lg font-semibold">
              Show my contracts to everybody
            </p>
            <Switch />
          </div>
        </section>
        <section className="rounded-lg bg-white shadow-lg p-7">
          <div className="pb-4 border-b border-gray-300 flex flex-row justify-between items-center">
            <p className="text-primary font-semibold text-xl">Education</p>
            <button onClick={() => setShowModal(true)} className="text-accent">
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
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
          </div>
          <InfoCard
            name="AITU"
            field="Bachelors degree"
            location="Nur-sultan, Kazakhstan"
            from="2020"
            to="2023"
          />
        </section>
        <section className="rounded-lg bg-white shadow-lg p-7">
          <div className="pb-4 border-b border-gray-300">
            <p className="text-primary font-semibold text-xl">Experience</p>
          </div>
          <InfoCard
            name="Qoltyqshash"
            field="IT/Blockchain"
            location="Kazakhstan"
            from="2022"
            to="2030"
          />
          <div
            onClick={() => router.push("/my-contracts")}
            className="pt-4 w-full flex flex-row items-center justify-between cursor-pointer"
          >
            <p className="text-high-contrast text-lg font-semibold">
              Show more
            </p>
            <button className="text-accent">
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

const InfoCard = ({
  name,
  field,
  location,
  from,
  to,
}: {
  name: string;
  field: string;
  location: string;
  from: string;
  to: string;
}) => {
  return (
    <div className="flex flex-row justify-between py-4 border-b border-gray-300">
      <div>
        <p className="text-high-contrast text-lg font-semibold">{name}</p>
        <p className="text-medium-contrast">{field}</p>
        <p className="text-low-contrast">{location}</p>
      </div>
      <div className="text-high-contrast text-lg font-semibold flex flex-row space-x-1">
        <p>{from}</p>
        <p>-</p>
        <p>{to}</p>
      </div>
    </div>
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

export default Contract;
