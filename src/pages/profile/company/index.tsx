import { useState, useEffect } from "react";
import Image from "next/image";
import { Progress } from "@ui";
import { Header, News, Modal } from "@components";
import { useRouter } from "next/router";
import { useMoralis } from "react-moralis";

const Profile = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [secondStep, setSecondStep] = useState<boolean>(false);
  const router = useRouter();
  const [name, setName] = useState<any>("");
  const [field, setField] = useState<any>("");
  const [position, setPosition] = useState("");
  const [eth, setEth] = useState("");

  useEffect(() => {
    const q_name = localStorage.getItem("name");
    setName(q_name);
    const q_field = localStorage.getItem("field");
    setField(q_field);
  }, []);

  return (
    <>
      <Header />
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <div className="flex flex-col space-y-5 w-full">
          <p className="text-accent text-xl font-medium">Create new contract</p>
          <div className="flex flex-row">
            <div className="flex-1 flex flex-col justify-center items-center px-1 space-y-1 cursor-pointer">
              <p onClick={() => setSecondStep(false)} className="font-semibold">
                Step 1
              </p>
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
            <SecondStep position={position} eth={eth} />
          ) : (
            <FirstStep
              setPosition={setPosition}
              setEth={setEth}
              setSecondStep={setSecondStep}
            />
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
                  {name}
                </p>
                <p className="text-gray-500">{field}</p>
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

const FirstStep = ({
  setPosition,
  setEth,
  setSecondStep,
}: {
  setPosition: any;
  setEth: any;
  setSecondStep: any;
}) => {
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
          onChange={(e) => setEth(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <p className="text-low-contrast">Write a position of employee</p>
        <input
          type="text"
          className="rounded bg-blue-50 p-3 w-full"
          placeholder="Position"
          onChange={(e) => setPosition(e.target.value)}
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

const SecondStep = ({ position, eth }: { position: string; eth: string }) => {
  const { Moralis } = useMoralis();

  const Contract = Moralis.Object.extend("Contract");
  const contracts = new Contract();

  const [clientName, setClientName] = useState("");
  const [clientMail, setClientMail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyMail, setCompanyMail] = useState("");
  const [contractMonthDay, setContractMonthDay] = useState("");
  const [contractYear, setContractYear] = useState("");
  const [services, setServices] = useState("");
  const [period, setPeriod] = useState("");
  const [firstCheck, setFirstCheck] = useState(false);
  const [secondCheck, setSecondCheck] = useState(false);
  const [thirdCheck, setThirdCheck] = useState(false);
  const [fourthCheck, setFourthCheck] = useState(false);
  const [checkInt, setCheckInt] = useState("");
  const [paymentComission, setPaymentComission] = useState("");
  const [paymentOther, setPaymentOther] = useState("");

  const handleSendContract = () => {
    contracts.save({
      toEthAddress: eth,
      position: position,
      clientName: clientName,
      clientMail: clientMail,
      companyName: companyName,
      companyMail: companyMail,
      contractMonthDay: contractMonthDay,
      contractYear: contractYear,
      services: services,
      period: period,
      firstCheck: firstCheck,
      secondCheck: secondCheck,
      thirdCheck: thirdCheck,
      fourthCheck: fourthCheck,
      checkInt: checkInt,
      paymentComission: paymentComission,
      paymentOther: paymentOther,
    });
  };

  return (
    <div className="h-contract overflow-y-scroll px-3 space-y-4">
      <div className="flex justify-center">
        <p className="text-3xl font-semibold">
          INDEPENDENT CONTRACTOR AGREEMENT
        </p>
      </div>
      <div className="flex flex-col space-y-2 cursor-text mx-auto px-10">
        <p>
          <span className="font-bold">I. The Parties.</span> This Independent
          Contractor Agreement (“Agreement”) is made between:
        </p>
        <label>
          Client:{" "}
          <input
            onChange={(e) => setClientName(e.target.value)}
            type="text"
            className="border-b border-black w-40"
          />{" "}
          with a mailing address of{" "}
          <input
            onChange={(e) => setClientMail(e.target.value)}
            type="text"
            className="border-b border-black w-40"
          />{" "}
          (“Client”), and
        </label>
        <label>
          Contractor:{" "}
          <input
            onChange={(e) => setCompanyName(e.target.value)}
            type="text"
            className="border-b border-black w-40"
          />{" "}
          with a mailing address of{" "}
          <input
            onChange={(e) => setCompanyMail(e.target.value)}
            type="text"
            className="border-b border-black w-40"
          />
          (“Contractor”).
        </label>
        <label>
          WHEREAS the Client intends to pay the Contractor for Services
          provided, effective
          <br />
          <input
            onChange={(e) => setContractMonthDay(e.target.value)}
            type="text"
            className="border-b border-black w-40"
          />
          , 20{" "}
          <input
            onChange={(e) => setContractYear(e.target.value)}
            type="text"
            className="border-b border-black w-5"
          />
          , under the following terms and conditions:
        </label>
        <p>
          <span className="font-bold">II. The Services.</span> The Contractor
          agrees to perform the following:
        </p>
        <input
          onChange={(e) => setServices(e.target.value)}
          type="text"
          className="border-b border-black w-10/12"
        />
      </div>
      <div className="flex flex-col space-y-2 cursor-text mx-auto px-10">
        <p>
          <span className="font-bold">III. Payment.</span> In consideration for
          the Services to be performed by the Contractor, the Client agrees to
          pay the following: (check one)
        </p>
        <label>
          <input
            onChange={(e) => setFirstCheck(e.target.checked)}
            type="checkbox"
          />{" "}
          -${" "}
          <input
            onChange={(e) => setCheckInt(e.target.value)}
            type="text"
            className="border-b border-black w-24"
          />{" "}
          /Hour.
        </label>
        <label>
          <input
            onChange={(e) => setFirstCheck(e.target.checked)}
            type="checkbox"
          />{" "}
          -${" "}
          <input
            onChange={(e) => setCheckInt(e.target.value)}
            type="text"
            className="border-b border-black w-24"
          />{" "}
          for the Services.
        </label>
        <label>
          <input
            onChange={(e) => setFirstCheck(e.target.checked)}
            type="checkbox"
          />{" "}
          - Commission in the amount of:{" "}
          <input
            onChange={(e) => setPaymentComission(e.target.value)}
            type="text"
            className="border-b border-black"
          />
        </label>
        <label>
          <input
            onChange={(e) => setFirstCheck(e.target.checked)}
            type="checkbox"
          />{" "}
          - Other:{" "}
          <input
            onChange={(e) => setPaymentOther(e.target.value)}
            type="text"
            className="border-b border-black"
          />
        </label>
        <p>
          Completion shall be defined as the fulfillment of Services as
          described in Section II in accordance with industry standards and to
          the approval of the Client, not to be unreasonably withheld.
        </p>
        <p>The Contractor agrees to be paid: (check one)</p>
        <label>
          <input
            onChange={(e) => setSecondCheck(e.target.checked)}
            type="checkbox"
          />{" "}
          - At completion of the Services performed.
        </label>
        <label>
          <input
            onChange={(e) => setSecondCheck(e.target.checked)}
            type="checkbox"
          />{" "}
          - On a{" "}
          <select onChange={(e) => setPeriod(e.target.value)} name="period">
            <option value="weekly">weekly</option>
            <option value="monthly">monthly</option>
            <option value="quarterly">quarterly</option>
          </select>{" "}
          basis beginning on
          <input
            onChange={(e) => setContractMonthDay(e.target.value)}
            type="text"
            className="border-b border-black"
          />
          , 20{" "}
          <input
            onChange={(e) => setContractYear(e.target.value)}
            type="text"
            className="border-b border-black w-5"
          />
          until the completion of the Services.
        </label>
        <label>
          <input
            onChange={(e) => setSecondCheck(e.target.checked)}
            type="checkbox"
          />{" "}
          - Other.
          <input
            onChange={(e) => setPaymentOther(e.target.value)}
            type="text"
            className="border-b border-black"
          />
        </label>
        <p>
          <span className="font-bold">IV. Due Date.</span> The Services provided
          by the Contractor shall: (check one)
        </p>
        <label>
          <input
            onChange={(e) => setThirdCheck(e.target.checked)}
            type="checkbox"
          />{" "}
          - Be completed by{" "}
          <input
            onChange={(e) => setContractMonthDay(e.target.value)}
            type="text"
            className="border-b border-black"
          />
          , 20{" "}
          <input
            onChange={(e) => setContractYear(e.target.value)}
            type="text"
            className="border-b border-black w-5"
          />
        </label>
        <label>
          <input
            onChange={(e) => setThirdCheck(e.target.checked)}
            type="checkbox"
          />{" "}
          - Not have a due date.
        </label>
        <label>
          <input
            onChange={(e) => setThirdCheck(e.target.checked)}
            type="checkbox"
          />{" "}
          - Other.
          <input
            onChange={(e) => setPaymentOther(e.target.value)}
            type="text"
            className="border-b border-black"
          />
        </label>
        <p>
          <span className="font-bold">V. Expenses.</span> The Contractor shall
          be: (check one)
        </p>
        <label>
          <input
            onChange={(e) => setFourthCheck(e.target.checked)}
            type="checkbox"
          />{" "}
          - Responsible for all expenses related to providing the Services under
          this Agreement. This includes, but is not limited to, supplies,
          equipment, operating costs, business costs, employment costs, taxes,
          Social Security contributions/payments, disability insurance,
          unemployment taxes, and any other cost that may or may not be in
          connection with the Services provided Contractor.
        </label>
        <label>
          <input
            onChange={(e) => setFourthCheck(e.target.checked)}
            type="checkbox"
          />{" "}
          - *Reimbursed for the following expenses that are attributable
          directly to the Services performed under this Agreement
          <input
            onChange={(e) => setPaymentOther(e.target.value)}
            type="text"
            className="border-b border-black"
          />
        </label>
        <p>
          *The Client will be required to pay the Contractor within thirty (30)
          days of any Expense after receiving an itemized expense statement from
          the Contractor. Upon request by the Client, the Contractor may have to
          show any receipt(s) or proof of purchase for said Expense(s).
        </p>
        <p>
          <span className="font-bold">VI. Independent Contractor Status.</span>{" "}
          The Contractor, under the code of the Internal Revenue Service (IRS),
          is an independent contractor, and neither the Contractor's employees
          or contract personnel are, or shall be deemed, the Client's employees.
        </p>
        <p>
          In its capacity as an independent contractor, Contractor agrees and
          represents: Contractor has the right to perform services for others
          during the term of this Agreement; Contractor has the sole right to
          control and direct the means, manner, and method by which the Services
          required by this Agreement will be performed. Contractor shall select
          the routes taken, starting and ending times, days of work, and order
          the work is performed; Contractor has the right to hire assistant(s)
          as subcontractors or to use employees to provide the Services required
          under this Agreement. Neither Contractor, nor the Contractor’s
          employees or personnel, shall be required to wear any uniforms
          provided by the Client; The Services requiredby this Agreement
          performed by the Contractor, Contractor’s employees or personnel, and
          the Client will not hire, supervise, or pay assistants to help the
          Contractor; Neither Contractor nor Contractor’s employees or personnel
          shall receive any training from the Client in the professional skills
          necessary to perform the Services required by this Agreement; and
          Neither the Contractor nor Contractor’s employees or personnel shall
          be required by the Client to devote full-time to the performance of
          the Services required by this Agreement.
        </p>
        <p>
          <span className="font-bold">
            VII. Business Licenses, Permits, and Certificates.
          </span>{" "}
          The Contractor represents and warrantsthat all employees and personnel
          associated shall comply with federal, state, and local laws requiring
          any required licenses, permits, and certificates necessary to perform
          the Services under this Agreement.
        </p>
        <p>
          <span className="font-bold">
            VIII.Benefits of Contractor’s Employees.
          </span>{" "}
          The Contractor understands and agrees that they are solely responsible
          for shall be liable for all benefits that are provided to their
          employees, including but not limited to, retirement plans, health
          insurance, vacation time-off, sick pay, personal leave, or any other
          benefit provided.
        </p>
        <p>
          <span className="font-bold">IX. Unemployment Compensation.</span> The
          Contractor shall be solely responsible for the unemployment
          compensation payments on behalf of their employees and personnel. The
          Contractor shall not be entitled to unemployment compensation in
          connection with the Services performed under this Agreement.
        </p>
        <p>
          <span className="font-bold">X. Workers’ Compensation.</span> The
          Contractor shall be responsible for providing all workers’
          compensation insurance on behalf of their employees. If the Contractor
          hires employees to perform any work under this Agreement, the
          Contractor agrees to grant workers’ compensation coverage to the
          extent required by law. Upon request by the Client, the Contractor
          must provide certificates proving workers’ compensation insurance at
          any time during the performance of the Service.
        </p>
        <p>
          <span className="font-bold">XI. Indemnification.</span>
          The Contractor shall indemnify and hold the Client harmless from any
          loss or liability from performing the Services under this Agreement.
        </p>
        <p>
          <span className="font-bold">XII. Confidentiality.</span> The
          Contractor acknowledges that it will be necessary for the Clientto
          disclose certain confidential and proprietary information to the
          Contractor in order for the Contractor to perform their duties under
          this Agreement. The Contractor acknowledges that disclosure to a third
          party or misuse of this proprietary or confidential information would
          irreparably harm the Client. Accordingly, the Contractor will not
          disclose or use, either during or after the term of this Agreement,
          any proprietary or confidential information of the Client without the
          Client's prior written permission except to the extent necessary to
          perform Services on the Client's behalf.
        </p>
        <p>
          Proprietary or confidential information includes, but is not limited
          to: The written, printed, graphic, or electronically recorded
          materials furnished by Client for Contractor to use; Any written or
          tangible information stamped “confidential,” “proprietary,” or with a
          similar legend, or any information that Client makes reasonable
          efforts to maintain the secrecy of business or marketing plans or
          strategies, customer lists, operating procedures, trade secrets,
          design formulas, know-how and processes, computer programs and
          inventories, discoveries, and improvements of any kind, sales
          projections, and pricing information; and information belonging to
          customers and suppliers of the Client about whom the Contractor gained
          knowledge as a result of the Contractor's Services to the Client. Upon
          termination of the Contractor's Services to the Client, or at the
          Client's request, the Contractor shall deliver to the Client all
          materials in the Contractor's possession relating to the Client's
          business. The Contractor acknowledges any breach or threatened breach
          of confidentiality that this Agreement will result in irreparable harm
          to the Client for which damages would be an inadequate remedy.
          Therefore, the Client shall be entitled to equitable relief, including
          an injunction, in the event of such breach or threatened breach of
          confidentiality. Such equitable relief shall be in addition to the
          Client's rights and remedies otherwise available at law.
        </p>
        <p>
          <span className="font-bold">XIII. Proprietary Information.</span>{" "}
          Proprietary information, under this Agreement, shall include:
        </p>
        <p>
          The product of all work performed under this Agreement (“Work
          Product”), including without limitation all notes, reports,
          documentation, drawings, computer programs, inventions, creations,
          works, devices, models, work-in-progress and deliverables will be the
          sole property of the Client, and Contractor hereby assigns to the
          Client all right, title and interest therein, including but not
          limited to all audiovisual, literary, moral rights and other
          copyrights, patent rights, trade secret rights and other proprietary
          rights therein. Contractor retains no right to use the Work Product
          and agrees not to challenge the validity of the Client’s ownership in
          the Work Product;
        </p>
        <p>
          Contractor hereby assigns to the Client all right, title, and interest
          in any and all photographic images and videos or audio recordings made
          by the Client during Contractor’s work for them, including, but not
          limited to, any royalties, proceeds, or other benefits derived from
          such photographs or recordings; and The Client will be entitled to use
          Contractor's name and/or likeness in advertising and other materials.
        </p>
        <p>
          <span className="font-bold">XIV. No Partnership.</span> This Agreement
          does not create a partnership relationship between the Client and the
          Contractor. Unless otherwise directed, the Contractor shall have no
          authority to enter into contracts on the Client's behalf or represent
          the Client in any manner.
        </p>
        <p>
          <span className="font-bold">XV. Assignment and Delegation.</span> The
          Contractor may assign rights and may delegate duties under this
          Agreement to other individuals or entities acting as a subcontractor
          (“Subcontractor”). The Contractor recognizes that they shall be liable
          for all work performed by the Subcontractor and shall hold the Client
          harmless of any liability in connection with their performed work.
        </p>
        <p>
          The Contractor shall be responsible for any confidential or
          proprietary information that is shared with the Subcontractor in
          accordance with Sections XVI & XVII of this Agreement. If any such
          information is shared by the Subcontractor to third (3rd) parties, the
          Contractor shall be made liable.
        </p>
        <p>
          <span className="font-bold">XVI. Severability.</span> This Agreement
          shall remain in effect in the event a section or provision is
          unenforceable or invalid. All remaining sections and provisions shall
          be deemed legally binding unless a court rules that any such provision
          or section is invalid or unenforceable, thus, limiting the effect of
          another provision or section. In such case, the affected provision or
          section shall be enforced as so limited.
        </p>
        <p>
          <span className="font-bold">XVII. Breach Waiver.</span> Any waiver by
          the Client of a breach of any section of this Agreement by the
          Contractor shall not operate or be construed as a waiver of any
          subsequent breach by the Contractor.
        </p>
        <p>
          <span className="font-bold">XVIII. Entire Agreement.</span> This
          Agreement, along with any attachments or addendums, represents the
          entire agreement between the parties. Therefore, this Agreement
          supersedes any prior agreements, promises, conditions, or
          understandings between the Employer and Employee.
        </p>
      </div>
      <button
        onClick={handleSendContract}
        className="bg-accent py-2 rounded text-white w-full mx-auto"
      >
        Sign a contract
      </button>
    </div>
  );
};
export default Profile;
