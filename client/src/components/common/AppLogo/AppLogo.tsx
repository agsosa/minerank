import Image from "next/image";
import { useRouter } from "next/router";
import { getAppConfig } from "src/services/config.service";
import { Logo } from "./AppLogo.styled";

interface IAppLogo {
  width?: string | number;
  height?: string | number;
}

const AppLogo: React.FC<IAppLogo> = ({ width, height, ...props }) => {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push("/");
  };

  return (
    <Logo onClick={handleLogoClick} {...props}>
      <Image src="/logo1.png" width={width || "28"} height={height || "28"} />
      <span>{getAppConfig().appName}</span>{" "}
    </Logo>
  );
};

export default AppLogo;
