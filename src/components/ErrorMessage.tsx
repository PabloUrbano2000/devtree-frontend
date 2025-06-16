import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function ErrorMessage({ children }: Props) {
  return (
    <p className="bg-red-50 text-red-600 p-3 uppercase text-sm font-bold text-center">
      {children}
    </p>
  );
}
