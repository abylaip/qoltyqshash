import { useState } from "react";
import { Header } from "@components";
import Image from "next/image";
import { useMoralis } from "react-moralis";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [field, setField] = useState("");

  const { authenticate, isAuthenticated, user, Moralis } = useMoralis();

  const loginHandle = (e: any, isCompany: boolean) => {
    e.preventDefault();
    authenticate();

    const Customer = Moralis.Object.extend("Customer");
    const customers = new Customer();

    if (isCompany && isAuthenticated) {
      customers.save({
        name: name,
        field: field,
        isCompany: isCompany,
        username: user?.getUsername,
        ethAddress: user?.get("ethAddress"),
      });
      router.push("/profile/company");
    } else {
      customers.save({
        name: name,
        field: field,
        isCompany: isCompany,
        username: name,
        ethAddress: user?.get("ethAddress"),
      });
      router.push("/profile/employee");
    }
  };
  return (
    <>
      <Header />
      <div className="flex flex-row">
        <div className="flex-1 container 2xl:w-4/5 flex items-center justify-center h-full pt-36">
          <div className="flex flex-col space-y-4 rounded-lg bg-white p-10 xl:w-11/12 monic:w-8/12 shadow-lg">
            <div className="flex flex-col space-y-2">
              <p className="text-low-contrast text-sm leading-4 font-semibold">
                Write your fullname or name of the company*
              </p>
              <input
                type="text"
                placeholder="Name"
                className="rounded-md border border-gray-300 p-2"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-low-contrast text-sm leading-4 font-semibold">
                Write your position or company field*
              </p>
              <input
                type="text"
                placeholder="Position"
                className="rounded-md border border-gray-300 p-2"
                onChange={(e) => setField(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-4">
              <button
                onClick={(e) => loginHandle(e, true)}
                className="bg-accent rounded-md w-full py-3 text-white font-semibold leading-5"
              >
                Log in as Company
              </button>
              <button
                onClick={(e) => loginHandle(e, false)}
                className="bg-primary rounded-md w-full py-3 text-white font-semibold leading-5"
              >
                Log in as Employee
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <Image src="/static/login-image.svg" width={620} height={620} />
        </div>
      </div>
    </>
  );
};

export default Login;
