"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
  onClick?: () => void
}

export const CustomButton2 = ({ children, className, appName, ...rest }: ButtonProps) => {
  return (
    <button
      className={className}
      style={{ borderRadius: '12px', background: 'red' }}
      {...rest}
    >
      {children}
    </button>
  );
};
