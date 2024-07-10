import { PropsWithChildren } from "react";

interface FeatureBoxProps {
  title: string;
  description: string;
  index: number;
}

export default function FeatureBox({
  title,
  description,
  index,
  children,
}: PropsWithChildren<FeatureBoxProps>) {
  const marginTop = index * 8;

  return (
    <li
      className={`relative flex flex-col w-[297px] p-6 mt-${marginTop} bg-white rounded-xl text-left`}
    >
      <div className="absolute -top-8 left-6 p-4 bg-veryDarkViolet rounded-full">
        {children}
      </div>
      <h4 className="mt-12 text-xl text-black font-bold ">{title}</h4>
      <p className="mt-6 text-md text-grayishViolet">{description}</p>
    </li>
  );
}
