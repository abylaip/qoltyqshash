import { Header } from "@components";

const MyContacts = () => {
  return (
    <>
      <Header />
      <div className="px-32 py-5 flex flex-col space-y-5">
        <p className="text-gray-400 cursor-default">
          Main page /{" "}
          <span className="font-semibold text-accent">My contracts</span>
        </p>
        <CompanySection name="Abyaly's company" />
        <CompanySection name="Alibek's company" />
      </div>
    </>
  );
};

const CompanySection = ({ name }: { name: string }) => {
  return (
    <section className="rounded-lg bg-white shadow-lg p-6">
      <div className="pb-4 w-full flex flex-row items-center justify-between cursor-pointer border-b border-gray-300">
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
      <ContractCard
        position="Software Engineer"
        success={92}
        from="March 2022"
        to="PRESENT"
        status="Active"
      />
      <ContractCard
        position="Software Engineer"
        success={84}
        from="March 2022"
        to="May 2022"
        status="Passed"
      />
      <ContractCard
        position="Software Engineer"
        success={53}
        from="May 2021"
        to="December 2021"
        status="Passed"
      />
    </section>
  );
};

const ContractCard = ({
  position,
  success,
  from,
  to,
  status,
}: {
  position: string;
  success: number;
  from: string;
  to: string;
  status: string;
}) => {
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
