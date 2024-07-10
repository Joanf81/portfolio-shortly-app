import { PropsWithChildren } from "react";

interface LinkProps {
  className?: string;
  [props: string]: any;
}

export default function Link({
  className,
  children,
  ...props
}: PropsWithChildren<LinkProps>) {
  return (
    <a
      {...props}
      className={`text-grayishViolet font-bold font-sans text-md hover:text-veryDarkViolet ${className}`}
    >
      {children}
    </a>
  );
}
