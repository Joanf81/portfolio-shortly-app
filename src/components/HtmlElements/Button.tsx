import { PropsWithChildren } from "react"

interface ButtonProps {
  square?: boolean,
  xl?: Boolean,
  sm?: Boolean,
  className?: string,
  [props:string]: any
}

export default function Button({square, xl, sm, children, className, ...props}: PropsWithChildren<ButtonProps>) {
  let roundedProp = 'rounded-full';
  let fontWeightProp = 'font-bold';

  let textSize = 'text-md';
  let paddingY = 'py-3';
  let paddingX = 'px-8';
  
  if (square) {
    roundedProp = 'rounded-xl';
    fontWeightProp = 'font-light';
  }

  if (xl) {
    textSize = 'text-2xl'
    paddingY = 'py-5';
    paddingX = 'px-10';
  }

  if (sm) {
    paddingY = 'py-2';
  }

  return <button className={`${paddingX} ${paddingY} bg-cyan text-white ${fontWeightProp} font-sans ${textSize} hover:bg-cyanLight ${roundedProp} duration-100 ${className}`} {...props}>
    {children}
  </button>
}