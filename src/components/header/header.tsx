import Link from "next/link";
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();

  const menu = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "Companies",
      to: "/companies",
    },
    {
      name: "My contracts",
      to: "/my-contracts",
    },
    {
      name: "Available Contracts",
      to: "/available-contracts",
    },
    {
      name: "Notifications",
      to: "/notifications",
    },
  ];
  return (
    <header className="sticky top-0 z-10 py-5 bg-white shadow-lg">
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
            <p>/</p>
            <Link href="/register">
              <a
                className={`${
                  router.pathname === "/register" ? "font-semibold" : ""
                }`}
              >
                Register
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
