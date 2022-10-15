import Image from "next/image";

type Props = {};

export default function HeaderLogo({}: Props) {
  return (
    <div>
      <Image
        src="/images/header-logo.png"
        width={276}
        height={80}
      />
    </div>
  );
}
