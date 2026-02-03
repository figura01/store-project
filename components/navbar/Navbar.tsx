import { Link } from "lucide-react";
import Container from "../global/Container";
import CartButton from "./CartButton";
import DarkMode from "./DarkMode";
import Logo from "./Logo";
import NavSearch from "./NavSearch";
import LinkDropdown from "./LinkDropdown";

export default function Navbar() {
  return (
    <nav className="">
      <Container className="flex flex-col sm:flex-row sm:items-center justify-between py-4">
        <Logo />
        <NavSearch />
        <div className="flex gap-4 items-center">
          <CartButton />
          <DarkMode />
          <LinkDropdown />
        </div>
      </Container>
    </nav>
  );
}
