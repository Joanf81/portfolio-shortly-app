import { PropsWithChildren } from "react";

interface FeaturesContainerProps {}

export default function FeaturesContainer({
  children,
}: PropsWithChildren<FeaturesContainerProps>) {
  return (
    <ul className="relative flex flex-col items-start mt-32 text-center md:flex-row md:space-x-6 md:mt-14 md:text-left">
      <span className="hidden absolute h-4 w-3/4 top-20 left-12 bg-cyan md:block"></span>
      <span className="absolute h-full w-2 left-1/2 -translate-x-1/2 bg-cyan md:hidden"></span>
      {children}
    </ul>
  );
}
