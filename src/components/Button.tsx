import { PropsWithChildren } from "react"

interface ButtonProps {
  square?: boolean,
  [props:string]: any
}

export default function Button({square, children, ...props}: PropsWithChildren<ButtonProps>) {
  let roundedProp = "rounded-full";
  let fontWeightProp = 'font-bold';
  
  if (square) {
    roundedProp = "rounded-xl";
    fontWeightProp = 'font-light';
  }

  return <button className={`px-8 py-3 bg-cyan text-white ${fontWeightProp} font-sans text-md hover:bg-cyanLight ${roundedProp}`} {...props}>
    {children}
  </button>
}