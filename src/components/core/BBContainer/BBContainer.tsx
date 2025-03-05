import { ReactNode } from "react";

interface BBContainerProps {
  children: ReactNode;
  className?: string;
}

const BBContainer = ({ children, className = "" }: BBContainerProps) => {
  return (
    <div className={`container mx-auto px-2 ${className}`}>{children}</div>
  );
};

export default BBContainer;
