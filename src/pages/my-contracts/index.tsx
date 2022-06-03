import { Header } from "@components";
import { useRouter } from "next/router";

interface Contract {
  position: string;
  success: number;
  from: string;
  to: string;
  status: string;
}

const MyContacts = () => {
  const companies = [
    {
      id: 1,
      name: "EPAM",
      contract: [
        {
          position: "Software Engineer",
          success: 94,
          from: "March 2022",
          to: "Septemberr 2022",
          status: "Active",
        },
      ],
    },
    {
      id: 2,
      name: "SULU",
      contract: [
        {
          position: "Software Engineer",
          success: 86,
          from: "November 2021",
          to: "February 2022",
          status: "Passed",
        },
        {
          position: "Frontend Engineer",
          success: 71,
          from: "May 2021",
          to: "September 2021",
          status: "Passed",
        },
      ],
    },
  ];
  return (
    <>
      <Header />
      <div className="px-32 py-5 flex flex-col space-y-5">
        <p className="text-gray-400 cursor-default">
          Main page /{" "}
          <span className="font-semibold text-accent">My contracts</span>
        </p>
        {companies.map((item, key) => (
          <CompanySection
            key={key}
            id={item.id}
            name={item.name}
            contract={item.contract}
          />
        ))}
      </div>
    </>
  );
};

const CompanySection = ({
  id,
  name,
  contract,
}: {
  id: number;
  name: string;
  contract: Array<Contract>;
}) => {
  const router = useRouter();
  return (
    <section className="rounded-lg bg-white shadow-lg p-6">
      <div
        onClick={() => router.push(`/my-contracts/${id}/contract`)}
        className="pb-4 w-full flex flex-row items-center justify-between cursor-pointer border-b border-gray-300"
      >
        <p className="text-high-contrast text-lg font-semibold">{name}</p>
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
      {contract.map((item, key) => (
        <ContractCard
          key={key}
          position={item.position}
          success={item.success}
          from={item.from}
          to={item.to}
          status={item.status}
        />
      ))}
    </section>
  );
};

const ContractCard = ({ position, success, from, to, status }: Contract) => {
  const statusColor = status === "Active" ? "text-blue-500" : "text-green-500";
  let successColor = "";
  if (success > 90) {
    successColor = "text-green-500";
  } else if (success >= 70 && success < 90) {
    successColor = "text-yellow-500";
  } else {
    successColor = "text-red-500";
  }
  return (
    <div className="flex flex-row justify-between py-4 border-b border-gray-300">
      <div className="flex flex-col space-y-2">
        <p className="text-high-contrast text-lg font-semibold">{position}</p>
        <p className="text-medium-contrast">
          Successfullness: <span className={successColor}>{success}</span>
        </p>
        <p className="text-low-contrast">
          {from} - {to}
        </p>
      </div>
      <div className="text-lg font-semibold flex flex-row items-center justify-end">
        <p className={statusColor}>{status}</p>
      </div>
    </div>
  );
};

export default MyContacts;
