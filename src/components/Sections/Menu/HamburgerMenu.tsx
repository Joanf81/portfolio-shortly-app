import { useState } from "react";

import MenuLink from "../../HtmlElements/MenuLink";
import Button from "../../HtmlElements/Button";

interface HamburgerMenuProps {
  open: boolean;
}

export default function HamburgerMenu({ open }: HamburgerMenuProps) {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  let animateClass = "animate-fadeindown";

  if (open && !showMenu) {
    setShowMenu(true);
  } else if (!open && showMenu) {
    animateClass = "animate-fadeoutup";
    setTimeout(() => {
      setShowMenu(false);
    }, 150);
  }

  if (showMenu) {
    return (
      <div
        className={`absolute flex flex-row justify-center top-20 w-full ${animateClass}`}
      >
        <div className="flex flex-col space-y-6 items-center w-full mx-6 p-6 max-w-2xl bg-darkViolet rounded-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-screen-2xl">
          <MenuLink>Features</MenuLink>
          <MenuLink>Pricing</MenuLink>
          <MenuLink>Resources</MenuLink>
          <span className="w-full border-t border-gray-400"></span>
          <MenuLink>Login</MenuLink>
          <Button className="w-full">Sign Up</Button>
        </div>
      </div>
    );
  } else {
    return;
  }
}
