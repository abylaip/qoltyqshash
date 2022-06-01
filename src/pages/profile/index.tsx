import { Header } from "@components";
import Image from "next/image";
import { Progress, Switch } from "@ui";
import { useRouter } from "next/router";

const Profile = () => {
  const router = useRouter();
  return (
    <>
      <Header />
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
              <Progress value={60} />
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
          <div className="pb-4 border-b border-gray-300">
            <p className="text-primary font-semibold text-xl">Education</p>
          </div>
          <InfoCard
            name="AITU"
            field="Bachelors degree"
            location="Nur-sultan, Kazakhstan"
            from="2020"
            to="2023"
          />
          <InfoCard
            name="AITU"
            field="Bachelors degree"
            location="Nur-sultan, Kazakhstan"
            from="2020"
            to="2023"
          />
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
          <InfoCard
            name="Qoltyqshash"
            field="IT/Blockchain"
            location="Kazakhstan"
            from="2022"
            to="2030"
          />
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

export default Profile;
