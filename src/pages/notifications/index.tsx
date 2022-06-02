import { Header } from "@components";
import Image from "next/image";

const Notifications = () => {
  return (
    <>
      <Header />
      <div className="px-32 py-5 flex flex-col space-y-5">
        <p className="text-gray-400 cursor-default">
          Main page /{" "}
          <span className="font-semibold text-accent">Notifications</span>
        </p>
        <section className="rounded-lg bg-white shadow-lg pb-5 px-5">
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
        </section>
      </div>
    </>
  );
};

const NotificationCard = () => {
  return (
    <div className="flex-1 flex flex-row items-center space-x-5 border-b border-gray-300 py-4">
      <Image
        src="/static/placeholder.png"
        width={40}
        height={40}
        className="rounded-full"
      />
      <p>Medina Mussina posted a new post</p>
    </div>
  );
};

export default Notifications;
