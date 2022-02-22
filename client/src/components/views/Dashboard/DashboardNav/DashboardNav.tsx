import AppLogo from "src/components/common/AppLogo";
import { Container, Left, NavLink, NavLinks, Right } from "./DashboardNav.styled";
import {
  AiOutlineHome,
  AiOutlineCreditCard,
  AiOutlineUsergroupDelete,
  AiOutlineAppstore,
} from "react-icons/ai";

const DashboardNav = () => {
  return (
    <Container>
      <Left>
        <AppLogo />
        <NavLinks>
          <NavLink href="/">
            <AiOutlineHome size="22" />
            <span>Dashboard</span>
          </NavLink>

          <NavLink href="/">
            <AiOutlineAppstore size="22" />
            <span>Communities</span>
          </NavLink>

          <NavLink href="/">
            <AiOutlineUsergroupDelete size="22" />
            <span>Users</span>
          </NavLink>

          <NavLink href="/">
            <AiOutlineCreditCard size="22" />
            <span>Payments</span>
          </NavLink>
        </NavLinks>
      </Left>
      <Right>
        <a href="">Logout</a>
      </Right>
    </Container>
  );
};

export default DashboardNav;
