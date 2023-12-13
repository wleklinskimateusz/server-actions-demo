import { twMerge } from "tailwind-merge";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

export const Input = ({ label, id, type, className, ...rest }: InputProps) => {
  const isRow = type === "checkbox" || type === "radio";
  return (
    <div
      className={twMerge("p-2 m-2 flex flex-col", isRow && "flex-row gap-4")}
    >
      <label className="font-bold" htmlFor={id}>
        {label}
      </label>
      <input
        className={twMerge(
          "ring-1 rounded p-2 invalid:ring-red-500",
          isRow && "ring-0 w-fit"
        )}
        id={id}
        type={type}
        {...rest}
      />
    </div>
  );
};
