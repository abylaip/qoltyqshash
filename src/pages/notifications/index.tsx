import { Header } from "@components";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useMoralisQuery } from "react-moralis";
import { Modal } from "@components";

const Notifications = () => {
  const [showModal, setShowModal] = useState(false);
  const { data } = useMoralisQuery("Contract", (query) => query, [], {
    live: true,
  });
  return (
    <>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <div className="flex justify-center items-center">
          <p>You have signed your contract successfully</p>
        </div>
      </Modal>
      <Header />
      <div className="px-32 py-5 flex flex-col space-y-5">
        <p className="text-gray-400 cursor-default">
          Main page /{" "}
          <span className="font-semibold text-accent">Notifications</span>
        </p>
        <section className="rounded-lg bg-white shadow-lg pb-5 px-5">
          <div className="flex-1 flex flex-row items-center justify-between space-x-5 border-b border-gray-300 py-4">
            <div className="flex flex-row items-center justify-between space-x-5">
              <Image
                src="/static/kaspi.png"
                width={40}
                height={40}
                className="rounded-full object-contain"
              />
              <p>You have received contract</p>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="text-accent justify-end"
            >
              Sign
            </button>
          </div>
          {notifications.map((item) => (
            <NotificationCard avatar={item.avatar} content={item.content} />
          ))}
        </section>
      </div>
    </>
  );
};

const notifications = [
  {
    avatar: "/static/Zhandos.jpeg",
    content: "Zhandos uploaded new post!",
  },
  {
    avatar: "/static/kaspi.png",
    content: "Kaspi actively hiring!",
  },
  {
    avatar: "/static/nezuko.jpeg",
    content: "Alibek just joined us!",
  },
  {
    avatar: "/static/elefanto.svg",
    content: "Elefanto hired Medina :)",
  },
];

const NotificationCard = ({
  avatar,
  content,
}: {
  avatar: string;
  content: string;
}) => {
  return (
    <div className="flex-1 flex flex-row items-center space-x-5 border-b border-gray-300 py-4">
      <Image
        src={avatar}
        width={40}
        height={40}
        className="rounded-full object-contain"
      />
      <p>{content}</p>
    </div>
  );
};

export default Notifications;
