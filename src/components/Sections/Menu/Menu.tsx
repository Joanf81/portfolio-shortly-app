import { useState } from "react";

import Link from "../../HtmlElements/Link";
import Button from "../../HtmlElements/Button";
import LogoSvg from "../../Svg/LogoSvg";
import HamburgerButton from "./HamburguerButton";
import HamburgerMenu from "./HamburgerMenu";

export default function Menu() {
  const [open, setOpen] = useState<boolean>(false);

  function handleHamburguerButtonClick() {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }

  return (
    <menu className="relative">
      <HamburgerMenu open={open} />
      <div className="flex flex-row items-center justify-between w-full pt-6 px-6">
        <div className="flex flex-row items-center space-x-20">
          <LogoSvg />
          <div className="hidden flex-row items-center space-x-8 lg:flex">
            <Link href="#">Features</Link>
            <Link href="#">Pricing</Link>
            <Link href="#">Resources</Link>
          </div>
        </div>
        <div className="hidden flex-row items-center space-x-6 lg:flex">
          <Link href="#">Login</Link>
          <Button>Sign Up</Button>
        </div>
        <HamburgerButton
          className="lg:hidden"
          open={open}
          handleClick={handleHamburguerButtonClick}
        />
      </div>
    </menu>
  );
}
