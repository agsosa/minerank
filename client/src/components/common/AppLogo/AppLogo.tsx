import Image from "next/image";
import { getAppConfig } from "src/services/config.service";
import { Logo } from "./AppLogo.styled";

interface IAppLogo {
  width?: string | number;
  height?: string | number;
}

const AppLogo: React.FC<IAppLogo> = ({ width, height, ...props }) => {
  return (
    <Logo {...props}>
      <Image src="/logo1.png" width={width || "28"} height={height || "28"} />
      <span>{getAppConfig().appName}</span>
    </Logo>
  );
};

export default AppLogo;
