import LogoSvg from "../Svg/LogoSvg";
import FooterLink from "../HtmlElements/FooterLink";
import SocialMediaIconSvg from "../Svg/SocialMediaIconSvg";

export default function Footer() {
  return (
    <footer className="bg-veryDarkViolet px-6">
      <div className="flex flex-col py-16 max-w-screen-2xl mx-auto items-center md:flex-row md:justify-between md:items-start lg:max-w-5xl xl:max-w-7xl 2xl:max-w-screen-2xl">
        <LogoSvg />
        <div className="flex flex-col mt-16 md:flex-row md:space-x-20 md:mt-0">
          <div className="flex flex-col items-center text-center space-y-4 mb-16 md:max-w-[100px] md:items-start md:text-left">
            <p className="font-bold text-white">Features</p>
            <FooterLink>Link Shortening</FooterLink>
            <FooterLink>Branded Links</FooterLink>
            <FooterLink>Analytics</FooterLink>
          </div>
          <div className="flex flex-col items-center text-center space-y-4 mb-16 md:max-w-[100px] md:items-start md:text-left">
            <p className="font-bold text-white">Resources</p>
            <FooterLink>Blog</FooterLink>
            <FooterLink>Developers</FooterLink>
            <FooterLink>Suport</FooterLink>
          </div>
          <div className="flex flex-col items-center text-center space-y-4 mb-16 md:max-w-[100px] md:items-start md:text-left">
            <p className="font-bold text-white">Company</p>
            <FooterLink>About</FooterLink>
            <FooterLink>Our team</FooterLink>
            <FooterLink>Careers</FooterLink>
            <FooterLink>Contact</FooterLink>
          </div>
        </div>
        <div className="flex flex-row justify-center space-x-6">
          <FooterLink>
            <SocialMediaIconSvg
              iconType="facebook"
              className="hover:fill-cyan hover:scale-110 duration-100"
            />
          </FooterLink>
          <FooterLink>
            <SocialMediaIconSvg
              iconType="X"
              className="hover:fill-cyan hover:scale-110 duration-100"
            />
          </FooterLink>
          <FooterLink>
            <SocialMediaIconSvg
              iconType="pinterest"
              className="hover:fill-cyan hover:scale-110 duration-100"
            />
          </FooterLink>
          <FooterLink>
            <SocialMediaIconSvg
              iconType="instagram"
              className="hover:fill-cyan hover:scale-110 duration-100"
            />
          </FooterLink>
        </div>
      </div>
    </footer>
  );
}
