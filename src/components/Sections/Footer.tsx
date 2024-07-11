import LogoSvg from "../Svg/LogoSvg";
import FooterLink from "../HtmlElements/FooterLink";
import SocialMediaIconSvg from "../Svg/SocialMediaIconSvg";

export default function Footer() {
  return (
    <footer className="bg-veryDarkViolet">
      <div className="flex flex-col py-16 px-6 max-w-screen-2xl mx-auto sm:flex-row sm:justify-between">
        <LogoSvg />
        <div className=" flex flex-col md:flex-row md:space-x-20">
          <div className="flex flex-col items-start space-y-4 max-w-[120px] sm:max-w-[100px]">
            <p className="font-bold text-white">Features</p>
            <FooterLink>Link Shortening</FooterLink>
            <FooterLink>Branded Links</FooterLink>
            <FooterLink>Analytics</FooterLink>
          </div>
          <div className="flex flex-col items-start space-y-4 max-w-[120px] sm:max-w-[100px]">
            <p className="font-bold text-white">Resources</p>
            <FooterLink>Blog</FooterLink>
            <FooterLink>Developers</FooterLink>
            <FooterLink>Suport</FooterLink>
          </div>
          <div className="flex flex-col items-start space-y-4 max-w-[120px] sm:max-w-[100px]">
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
            <SocialMediaIconSvg iconType="X" className="hover:fill-cyan hover:scale-110 duration-100" />
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
