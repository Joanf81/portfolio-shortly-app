import { PropsWithChildren } from "react";

interface FeatureBoxProps {
  title: string;
  description: string;
  className?: string;
}

export default function FeatureBox({
  title,
  description,
  className,
  children,
}: PropsWithChildren<FeatureBoxProps>) {

  return (
    <li
    className={`relative flex flex-col max-w-[592px] p-6 mx-6 bg-white rounded-xl md:w-[212px] lg:w-[297px] xl:w-[378px] 2xl:w-[468px] ${className}`}
    >
      <div className="absolute left-1/2 -translate-x-1/2 -top-10 mx-auto p-5 bg-veryDarkViolet rounded-full md:left-6 md:translate-x-0">
        {children}
      </div>
      <h4 className="mt-12 text-xl text-black font-bold ">{title}</h4>
      <p className="mt-6 text-md text-grayishViolet">{description}</p>
    </li>
  );
}
