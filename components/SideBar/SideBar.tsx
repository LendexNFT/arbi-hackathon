import Link from "next/link";
import { useRouter } from "next/router";

import HeaderLogo from "../Header/HeaderLogo";

import {
  BeakerIcon,
  PlusCircleIcon,
  UserCircleIcon,
  StarIcon,
  RectangleGroupIcon,
} from "@heroicons/react/24/solid";

interface Item {
  href: string;
  title: string;
  icon?: SVGSVGElement;
}

const iconSize = 48;
const menuItems = [
  {
    href: "/",
    title: "Landing Page",
    icon: (
      <StarIcon
        width={iconSize}
        className="text-slate-800 bg-slate-200 rounded-full"
      />
    ),
  },
  {
    href: "/about",
    title: "Dashboard",
    icon: (
      <RectangleGroupIcon
        width={iconSize}
        className="text-slate-800 bg-slate-200 rounded-full p-2"
      />
    ),
  },
  {
    href: "/contact",
    title: "Lend",
    icon: <PlusCircleIcon width={iconSize} className="text-slate-800" />,
  },
  {
    href: "/contact",
    title: "Borrow",
    icon: <PlusCircleIcon width={iconSize} className="text-slate-800 " />,
  },
];

type Props = {};

export default function SideBar({}: Props) {
  const router = useRouter();
  return (
    <aside className="bg-white w-full md:w-60">
      <div className="mb-24 mt-8">
        <HeaderLogo />
      </div>
      <nav>
        <ul>
          {menuItems.map((item) => (
            <li className="m-2 flex space-x-4" key={item.title}>
              {item.icon}
              <Link href={item.href}>
                <a
                  className={`flex p-2 bg-red-200 rounded hover:bg-red-400 cursor-pointer ${
                    router.asPath === item.href && "bg-fuchsia-600 text-white"
                  }
`}
                >
                  {item.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
