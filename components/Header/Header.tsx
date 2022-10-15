import { ConnectButton } from "@rainbow-me/rainbowkit";
import HeaderLogo from "./HeaderLogo";

const Header = () => {
  return (
    <div className="z-50 bg-[#4625a6]">
      <div className="mx-4 flex items-center justify-between py-2">
        {/* BRANDING */}
        <div className="flex items-center justify-center space-x-4">
          {/* TITLE */}
          <div className="hidden whitespace-nowrap text-center  text-xs uppercase sm:flex sm:text-xl md:text-2xl">
            <HeaderLogo />
          </div>
        </div>
        {/* MENUS */}
        <div className="flex space-x-4">
          <div>{/* <NetworkMenu /> */}</div>
          <ConnectButton
            label="Conecta tu wallet"
            chainStatus={{ smallScreen: "icon", largeScreen: "full" }}
            showBalance={{
              smallScreen: false,
              largeScreen: true,
            }}
            accountStatus={{
              smallScreen: "avatar",
              largeScreen: "full",
            }}
          />
          {/* <WalletMenu /> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
