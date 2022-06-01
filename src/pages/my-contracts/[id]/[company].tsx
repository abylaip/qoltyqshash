import Image from "next/image";
import { Progress } from "@ui";
import { Header, News } from "@components";
import Link from "next/link";

const Company = () => {
  return (
    <>
      <Header />
      <div className="px-32 py-5 flex flex-col space-y-5">
        <p className="text-gray-400 cursor-default">
          Main page / <Link href="/my-contracts">My Contracts</Link> /{" "}
          <span className="font-semibold text-accent">Abylay's company</span>
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
                  Abylay's company
                </p>
                <p className="text-gray-500">IT/Blockchain</p>
              </div>
            </div>
            <div className="flex-1 flex flex-col space-y-2 items-center justify-start">
              <Progress value={100} />
              <Progress value={60} />
              <Progress value={40} />
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
              Och horoshaya companiya, vsem sovetuyu bazara net
            </p>
            <p className="text-low-contrast">Almaty, Kazakhstan</p>
          </div>
        </section>
        <News />
        <News />
        <News />
      </div>
    </>
  );
};

export default Company;
