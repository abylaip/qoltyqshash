import { useState, useEffect } from "react";
import { Header, Modal } from "@components";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

function buildAxios() {
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_HTTP_URL,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
}

const getBase64 = async (file: any, cb: any) => {
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    cb(reader.result);
  };
  reader.onerror = (error) => {
    console.log("Error: ", error);
  };
};

const Register = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [base64URL, setBase64URL] = useState<any>();

  const [fullname, setFullname] = useState("");
  const [position, setPosition] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log(process.env.NEXT_PUBLIC_HTTP_URL);
  }, []);

  const handleFileInputChange = (e: any) => {
    let file: any;

    file = e.target.files[0];
    console.log(file);

    getBase64(file, (result: any) => {
      setBase64URL(result);
    });

    setTimeout(() => {
      console.log("base64: ", base64URL);
    }, 5000);
  };

  const signUpUser = (isCompany: boolean) => {
    buildAxios()
      .post(`/account`, {
        name: fullname,
        email: email,
        password: password,
        company: isCompany,
        reputation: 100,
        field: position,
        optional: {
          age: "120",
        },
      })
      .then(() => {
        if (isCompany) {
          router.push("/profile/company");
        } else {
          router.push("profile/employee");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Header />
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <div className="flex flex-col space-y-5 w-full">
          <p className="text-accent text-xl font-medium">Fill in the fields</p>
          <div className="space-y-2">
            <p className="text-low-contrast">
              Write your fullname or name of the company*
            </p>
            <input
              type="text"
              className="rounded bg-blue-50 p-3 w-full"
              placeholder="Name"
              onChange={(e) => setFullname(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <p className="text-low-contrast">
              Write your position or company field*
            </p>
            <input
              type="text"
              className="rounded bg-blue-50 p-3 w-full"
              placeholder="Field"
              onChange={(e) => setPosition(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <p className="text-low-contrast">Upload avatar</p>
            <input
              type="file"
              className="rounded bg-blue-50 p-3 w-full"
              accept="image/*"
              onChange={handleFileInputChange}
            />
          </div>
          <div className="flex flex-row space-x-4">
            <button
              onClick={() => signUpUser(false)}
              className="flex-1 bg-primary py-2 rounded text-white font-medium"
            >
              Register as Employee
            </button>
            <button
              onClick={() => signUpUser(true)}
              className="flex-1 bg-accent py-2 rounded text-white font-medium"
            >
              Register as Company
            </button>
          </div>
        </div>
      </Modal>
      <div className="flex flex-row">
        <div className="flex-1 container 2xl:w-4/5 flex items-center justify-center h-full pt-36">
          <div className="flex flex-col space-y-4 rounded-lg bg-white p-10 xl:w-11/12 monic:w-8/12 shadow-lg">
            <div className="flex flex-col space-y-2">
              <p className="text-low-contrast text-sm leading-4 font-semibold">
                Email*
              </p>
              <input
                type="email"
                placeholder="Email"
                className="rounded-md border border-gray-300 p-2"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-low-contrast text-sm leading-4 font-semibold">
                Password*
              </p>
              <input
                type="password"
                placeholder="Password"
                className="rounded-md border border-gray-300 p-2"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-low-contrast text-sm leading-4 font-semibold">
                Repeat the password
              </p>
              <input
                type="password"
                placeholder="Password"
                className="rounded-md border border-gray-300 p-2"
              />
            </div>
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => setShowModal(true)}
                className="bg-accent rounded-md w-full py-3 text-white font-semibold leading-5"
              >
                Sign up
              </button>
              <Link href="/login">
                <a className="border border-accent rounded-md w-full py-3 text-accent font-semibold leading-5 text-center">
                  Already have an account? Log in
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center p-20">
          <Image src="/static/register-image.svg" width={494} height={494} />
        </div>
      </div>
    </>
  );
};

export default Register;
