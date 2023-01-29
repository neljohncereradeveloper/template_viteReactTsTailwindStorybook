import React, { HTMLAttributes, ReactNode } from "react";
import classnames from "classnames";
export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: "primary" | "secondary";
  buttonStyle?: "base" | "rounded" | "outline" | "rounded-outline";
}
export const Button = ({
  children,
  variant = "primary",
  buttonStyle,
  ...props
}: Props) => {
  return (
    <div className="flex space-x-2 justify-center">
      <button
        type="button"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
        className={classnames(
          "inline-block uppercase font-medium text-xs leading-tight",
          "px-6 py-2.5 text-white shadow-md rounded",
          "hover:shadow-lg active:shadow-lg",
          "focus:shadow-lg focus:outline-none focus:ring-0",
          "transition duration-150 ease-in-out",
          {
            "rounded-full": buttonStyle === "rounded",
          },
          {
            "bg-blue-600 focus:bg-blue-700 hover:bg-blue-700 active:bg-blue-800":
              variant === "primary",
            "bg-gray-600 focus:bg-gray-700 hover:bg-gray-700 active:bg-gray-800":
              variant === "secondary",
          }
        )}
        {...props}
      >
        {children}
      </button>
    </div>
  );
};
