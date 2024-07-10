import { PropsWithChildren } from "react";

interface FeaturesContainerProps { }

export default function FeaturesContainer({children}: PropsWithChildren<FeaturesContainerProps>) {
  return (
    <ul className="relative flex flex-col items-start mt-14 md:flex-row md:space-x-6">
      <span className="absolute h-4 w-3/4 top-24 left-12 bg-cyan"></span>
        {children}
    </ul>
  );
}
