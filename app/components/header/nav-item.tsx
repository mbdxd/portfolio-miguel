import Link from "next/link";

type NavItemProps = {
  label: string;
  href: string;
};

export const NavItem = ({ label, href }: NavItemProps) => {
  return (
    <Link href={href} className="flex items-center gap-2 text-gray-400 font-medium font-mono" >
      <span>#</span>
      <span className="text-emerald-400">{label}</span>
      {label}
    </Link>
  );
};
