"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const CustomButton = ({ children, className, appName }: ButtonProps) => {
  return (
    <button
      className={className}
      onClick={() => alert(`Hello from your ${appName} app!`)}
      style={{ borderRadius: '12px', background: 'red' }}
    >
      {children}
    </button>
  );
};
