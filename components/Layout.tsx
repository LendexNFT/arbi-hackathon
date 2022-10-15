import { useRouter } from "next/router";

/* COMPONENTS */
import Header from "./Header";
import SideBar from "./SideBar";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const router = useRouter();
  return (
    <>
      {/* MAIN LAYOUT */}
      <div className="flex min-h-screen  scroll-smooth text-white scrollbar-hide bg-[#1f5775]">
        {/* PAGE LAYOUT */}
        <SideBar />
        <div className="flex flex-col  flex-1">
          <Header />
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </div>
    </>
  );
}
