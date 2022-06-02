import { Header } from "@components";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  return (
    <>
      <Header />
      <div className="flex flex-row">
        <div className="flex-1 container 2xl:w-4/5 flex items-center justify-center h-full pt-36">
          <div className="flex flex-col space-y-4 rounded-lg bg-white p-10 xl:w-11/12 monic:w-8/12 shadow-lg">
            <div className="flex flex-col space-y-2">
              <p className="text-low-contrast text-sm leading-4 font-semibold">
                Email
              </p>
              <input
                type="email"
                placeholder="Email"
                className="rounded-md border border-gray-300 p-2"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-low-contrast text-sm leading-4 font-semibold">
                Password
              </p>
              <input
                type="password"
                placeholder="Password"
                className="rounded-md border border-gray-300 p-2"
              />
            </div>
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => router.push("/profile/company")}
                className="bg-accent rounded-md w-full py-3 text-white font-semibold leading-5"
              >
                Log in
              </button>
              <Link href="/register">
                <a className="border border-accent rounded-md w-full py-3 text-accent font-semibold leading-5 text-center">
                  Don’t have an account yet? Sign up
                </a>
              </Link>
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
