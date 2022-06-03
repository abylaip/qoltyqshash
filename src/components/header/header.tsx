import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";

export const Header = () => {
  const router = useRouter();

  const menu = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "My contracts",
      to: "/my-contracts",
    },
    {
      name: "Jobs",
      to: "/jobs",
    },
    {
      name: "Notifications",
      to: "/notifications",
    },
  ];
  return (
    <header className="sticky top-0 z-10 py-5 bg-white shadow-lg">
      <Head>
        <title>Qoltyqshash</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="px-32 flex w-full">
        <Link href="/">
          <a className="text-accent font-bold text-3xl leading-9">QLS</a>
        </Link>
        <div className="w-full flex space-x-20 items-center justify-end text-lg leading-5 text-high-contrast">
          <ul className="flex space-x-20">
            {menu.map((item, key) => (
              <li
                key={key}
                className={`${
                  router.pathname === item.to ? "font-semibold" : ""
                }`}
              >
                <Link href={item.to}>{item.name}</Link>
              </li>
            ))}
          </ul>
          <div className="flex space-x-2">
            <Link href="/login">
              <a
                className={`${
                  router.pathname === "/login" ? "font-semibold" : ""
                }`}
              >
                Login
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
