import { twMerge } from "tailwind-merge";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ className, ...rest }: ButtonProps) => (
  <button
    className={twMerge(
      "bg-gray-600 hover:bg-gray-700 text-white p-2 m-2 rounded",
      className
    )}
    {...rest}
  />
);
