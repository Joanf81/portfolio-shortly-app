import Link from "../HtmlElements/Link"
import Button from "../HtmlElements/Button";
import LogoSvg from "../Svg/LogoSvg";

export default function Header() {
  return <menu>
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
    </div>
  </menu>;

}