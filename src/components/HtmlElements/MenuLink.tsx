import { PropsWithChildren } from "react";

export default function MenuLink({ children }: PropsWithChildren) {
  return (
    <a href="#" className="text-white font-bold hover:text-cyan duration-100">
      {children}
    </a>
  );
}
