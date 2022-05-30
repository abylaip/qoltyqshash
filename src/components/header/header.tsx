import Link from "next/link";

export const Header = () => {
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
      to: "/my-contacts",
    },
    {
      name: "Available Contracts",
      to: "/available-contracts",
    },
    {
      name: "Notifications",
      to: "/notifications",
    },
    {
      name: "Login / Register",
      to: "/login",
    },
  ];
  return (
    <header className="container py-5 font-normal flex space-x-24 w-full">
      <Link href="/">
        <a className="text-accent font-bold text-3xl leading-9">QLS</a>
      </Link>
      <div className="w-full">
        <ul className="flex flex-row items-center space-x-20">
          {menu.map((item, key) => (
            <li key={key} className="text-lg leading-5">
              <Link href={item.to}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
