import AppLogo from "src/components/common/AppLogo";
import { Container, Left, NavLink, NavLinks, Right } from "./DashboardNav.styled";
import {
  AiOutlineHome,
  AiOutlineCreditCard,
  AiOutlineUsergroupDelete,
  AiOutlineAppstore,
} from "react-icons/ai";
import Link from "next/link";

const links = [
  {
    label: "Communities",
    url: "/dashboard",
    icon: <AiOutlineAppstore size="22" />,
  },
  {
    label: "Users",
    url: "/dashboard/users",
    icon: <AiOutlineUsergroupDelete size="22" />,
  },
  {
    label: "Payments",
    url: "/dashboard/payments",
    icon: <AiOutlineCreditCard size="22" />,
  },
];

const DashboardNav = () => {
  return (
    <Container>
      <Left>
        <AppLogo />
        <NavLinks>
          {links.map(({ icon, label, url }) => (
            <Link href={url} key={label}>
              <NavLink>
                {icon}
                <span>{label}</span>
              </NavLink>
            </Link>
          ))}
        </NavLinks>
      </Left>
      <Right>
        <a href="">Logout</a>
      </Right>
    </Container>
  );
};

export default DashboardNav;
