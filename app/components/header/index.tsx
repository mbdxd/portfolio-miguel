import Link from "next/link";
import Image from "next/image";
import { NavItem } from "./nav-item";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projetos",
    href: "/projects",
  },
];

export const Header = () => {
  return (
    <header className="absolute top-0 left-0 p-0 m-0 pl-6 flex items-center gap-6">
      <Link href="/">
        <Image
          src="/images/avatar.png"
          width={100}
          height={49}
          alt="Logo"
        />
      </Link>

      <nav className="flex gap-4">
        {navItems.map((item) => (
          <NavItem
            key={item.href}
            label={item.label}
            href={item.href}
          />
        ))}
      </nav>
    </header>
  );
};
