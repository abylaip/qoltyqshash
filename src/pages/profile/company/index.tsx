import { useState } from "react";
import Image from "next/image";
import { Progress } from "@ui";
import { Header, News, Modal } from "@components";
import { useRouter } from "next/router";

const Profile = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [secondStep, setSecondStep] = useState<boolean>(false);
  const router = useRouter();
  return (
    <>
      <Header />
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <div className="flex flex-col space-y-5 w-full">
          <p className="text-accent text-xl font-medium">Create new contract</p>
          <div className="flex flex-row">
            <div className="flex-1 flex flex-col justify-center items-center px-1 space-y-1 cursor-pointer">
              <p className="font-semibold">Step 1</p>
              <div className="w-full py-0.5 bg-primary rounded-full" />
            </div>
            <div className="flex-1 flex flex-col justify-center items-center px-1 space-y-1 cursor-pointer">
              <p className="font-semibold">Step 2</p>
              <div
                className={`w-full py-0.5 ${
                  secondStep ? "bg-primary" : "bg-gray-300"
                } rounded-full`}
              />
            </div>
          </div>
          {secondStep ? (
            <SecondStep />
          ) : (
            <FirstStep setSecondStep={setSecondStep} />
          )}
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
        <section className="rounded-lg bg-white shadow-lg p-7">
          <div className="pb-4 border-b border-gray-300 flex flex-row items-center justify-between">
            <p className="text-primary font-semibold text-xl">Contracts</p>
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
          <ContractCard
            name="Qoltyqshash"
            field="IT/Blockchain"
            location="Kazakhstan"
            from="2022"
            to="2030"
          />
          <ContractCard
            name="Qoltyqshash"
            field="IT/Blockchain"
            location="Kazakhstan"
            from="2022"
            to="2030"
          />
          <ContractCard
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
        <News />
        <News />
        <News />
      </div>
    </>
  );
};

const ContractCard = ({
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

const FirstStep = ({ setSecondStep }: { setSecondStep: any }) => {
  return (
    <div className="flex flex-col space-y-5">
      <div className="space-y-2">
        <p className="text-low-contrast">
          Write a blockchain address of employee
        </p>
        <input
          type="text"
          className="rounded bg-blue-50 p-3 w-full"
          placeholder="Blockchain address"
        />
      </div>
      <div className="space-y-2">
        <p className="text-low-contrast">Write your private key</p>
        <input
          type="text"
          className="rounded bg-blue-50 p-3 w-full"
          placeholder="Private key"
        />
      </div>
      <div className="space-y-2">
        <p className="text-low-contrast">Write a position of employee</p>
        <input
          type="text"
          className="rounded bg-blue-50 p-3 w-full"
          placeholder="Position"
        />
      </div>
      <button
        onClick={() => {
          setSecondStep(true);
        }}
        className="bg-accent py-2 rounded text-white"
      >
        Next step
      </button>
    </div>
  );
};

const SecondStep = () => {
  return <div>secando</div>;
};

export default Profile;
