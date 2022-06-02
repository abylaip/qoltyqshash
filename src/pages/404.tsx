import Image from "next/image";
import Link from "next/link";

const Custom404 = () => {
  return (
    <div className="h-screen flex flex-row">
      <div className="flex-1 flex flex-col justify-center items-start space-y-4 pl-32">
        <p className="text-accent text-7xl">Oops,</p>
        <p className="text-blue-600 text-5xl">something went very wrong...</p>
        <Link href="/">
          <a className="rounded-lg bg-accent py-2 px-4 text-white">
            Return to homepage
          </a>
        </Link>
      </div>
      <div className="flex-1 flex justify-center p-20">
        <Image src="/static/404.svg" width={790} height={790} />
      </div>
    </div>
  );
};

export default Custom404;
