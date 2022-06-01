import { useState } from "react";
import { Header } from "@components";
import Image from "next/image";

interface Content {
  name: string;
  field: string;
  location: string;
  employees: string;
  vacancy: string;
}

const AvailableContracts = () => {
  const [content, setContent] = useState<Content>({
    name: "",
    field: "",
    location: "",
    employees: "",
    vacancy: "",
  });
  return (
    <>
      <Header />
      <div className="px-32 py-5 flex flex-col space-y-5">
        <p className="text-gray-400 cursor-default">
          Main page / <span className="font-semibold text-accent">Jobs</span>
        </p>
        <div className="p-5 flex bg-white rounded-lg shadow-lg h-screen">
          <div className="flex-1 flex flex-col pr-2 border-r border-gray-300 overflow-y-scroll">
            {jobs.map((item, key) => (
              <JobsCard
                key={key}
                name={item.name}
                field={item.field}
                location={item.location}
                employees={item.employes}
                vacancy={item.vacancy}
                content={content}
                setContent={setContent}
              />
            ))}
          </div>
          <div
            className={`flex-1 px-5 ${
              content.vacancy ? "visible" : "invisible"
            } flex flex-col space-y-2 h-full overflow-y-scroll overflow-x-hidden max-w-full`}
          >
            <p className="text-xl font-bold">{content.name}</p>
            <p className="text-low-contrast">{content.location}</p>
            <label className="text-primary flex flex-row space-x-2">
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
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="text-low-contrast font-medium">
                {content.field}
              </span>
            </label>
            <label className="text-primary flex flex-row space-x-2">
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
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <span className="text-low-contrast font-medium">
                {content.employees} employees
              </span>
            </label>
            <span className="">{content.vacancy}</span>
          </div>
        </div>
      </div>
    </>
  );
};

const JobsCard = ({
  name,
  field,
  location,
  employees,
  vacancy,
  content,
  setContent,
}: {
  name: string;
  field: string;
  location: string;
  employees: string;
  vacancy: string;
  content: any;
  setContent: any;
}) => {
  return (
    <div
      onClick={() => {
        setContent({
          name: name,
          field: field,
          location: location,
          employees: employees,
          vacancy: vacancy,
        });
      }}
      className={`flex flex-row items-center space-x-5 border-b border-gray-300 px-2 py-4 ${
        name === content.name ? "bg-blue-100" : "bg-white"
      } cursor-pointer`}
    >
      <Image
        src="/static/placeholder.png"
        width={70}
        height={70}
        className="rounded-full"
      />
      <div>
        <p className="font-semibold text-accent text-lg">{name}</p>
        <p className="text-gray-500">{field}</p>
        <p className="text-gray-500">{location}</p>
      </div>
    </div>
  );
};

const jobs = [
  {
    name: "Abylay's company",
    field: "IT/Blockchain",
    location: "Astana, Kazakhstan",
    employes: "2000000",
    vacancy:
      "Welcome to Abylay Anywhere - a global job platform offering remote work opportunities for tech professionals. Join us to build a career around your lifestyle working on modern projects for global brands and exciting startups. <br /> Currently we are looking for a remote <strong>Middle React.JS Developer</strong> to join our global team.",
  },
  {
    name: "Alibek's company",
    field: "IT/Soft",
    location: "Hong Kong",
    employes: "199999",
    vacancy:
      "Welcome to Alibek Anywhere - a global job platform offering remote work opportunities for tech professionals. Join us to build a career around your lifestyle working on modern projects for global brands and exciting startups. <br /> Currently we are looking for a remote <strong>Middle React.JS Developer</strong> to join our global team.",
  },
  {
    name: "Medina's company",
    field: "IT/Design",
    location: "Almaty, Kazakhstan",
    employes: "123212",
    vacancy:
      "Welcome to Designer Anywhere - a global job platform offering remote work opportunities for tech professionals. Join us to build a career around your lifestyle working on modern projects for global brands and exciting startups. <br /> Currently we are looking for a remote <strong>Middle React.JS Developer</strong> to join our global team.",
  },
  {
    name: "Zhandos's company",
    field: "IT/Soft",
    location: "Gambodga, Africa",
    employes: "154352399",
    vacancy:
      "rck;damckl'mc'amsdkcmasdlkmc;dsamjrneov nfs'lnmkc'macomskdmclmql 'mremdskalmkqmceor[mckdls;mc;ldsamkcla;mckldmsklq;oewn fcds'cmoasdn[cermkcl'demqkocmreonv;mfn vhif",
  },
  {
    name: "Aidar's company",
    field: "IT/Design",
    location: "Semey, Kazakhstan",
    employes: "1123142399",
    vacancy:
      "cjfa;ne'wdmcewm'cnql'cxmZKCdsmck;fvmjlsdmac lmasdkcmdls;amckmda;cmkldsmcla;mckladmslcmlk dsamcdsa;mcdsckldsmckldsmaklcmkclasmklcd smakclamskl;cmdsaklcmkdls;amckldsamkcldmka cl;mkcl;dkmla;cmkdlsamckl",
  },
  {
    name: "Daur's company",
    field: "IT/Soft",
    location: "Hong Kong",
    employes: "194321429",
    vacancy:
      "reqs and c jk;ads c;dsaklmcdam'c;mrekqmcl;dsmavnejqcdms'akcrmenqcomdsa'mcokeq[mclimkz'mckomrov[sdmakc'mkworlk.xmzlmcqmclalkcadjksvnjre[qnefmcklasmckd[o",
  },
  {
    name: "Huilo's company",
    field: "IT/Design",
    location: "Almaty, Kazakhstan",
    employes: "191234129",
    vacancy: "reqs and resps",
  },
  {
    name: "Glo's company",
    field: "IT/Design",
    location: "Almaty, Kazakhstan",
    employes: "1954329",
    vacancy: "reqs and resps",
  },
  {
    name: "Maroon's company",
    field: "IT/Soft",
    location: "Hong Kong",
    employes: "199",
    vacancy: "reqs and resps",
  },
  {
    name: "5's company",
    field: "IT/Design",
    location: "Almaty, Kazakhstan",
    employes: "199",
    vacancy: "reqs and resps",
  },
  {
    name: "SHSHSH's company",
    field: "IT/Design",
    location: "Almaty, Kazakhstan",
    employes: "199",
    vacancy: "reqs and resps",
  },
  {
    name: "UOUO's company",
    field: "IT/Soft",
    location: "Hong Kong",
    employes: "199",
    vacancy: "reqs and resps",
  },
  {
    name: "AUAU's company",
    field: "IT/Design",
    location: "Almaty, Kazakhstan",
    employes: "199",
    vacancy: "reqs and resps",
  },
];

export default AvailableContracts;
