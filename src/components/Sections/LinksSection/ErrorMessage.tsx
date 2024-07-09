import { PropsWithChildren } from "react";

interface ErrorMessageProps {
  className: string;
}

export default function ErrorMessage({
  className,
  children,
}: PropsWithChildren<ErrorMessageProps>) {
  return <p className={`text-red italic text-sm ${className}`}>{children}</p>;
}
