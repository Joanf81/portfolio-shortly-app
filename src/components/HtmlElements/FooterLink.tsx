import { PropsWithChildren } from "react";

export default function FooterLink({ children }: PropsWithChildren) {
  return (
    <a href="#" className="text-grayishViolet hover:text-cyan">
      {children}
    </a>
  );
}
