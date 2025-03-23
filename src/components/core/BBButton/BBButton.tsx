import { Button } from "@/components/ui/button";
import { ButtonHTMLAttributes } from "react";

interface BBButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  className?: string;
}

const BBButton: React.FC<BBButtonProps> = ({
  label,
  className = "",
  ...props
}) => {
  return (
    <Button
      className={`rounded-full bg-orange-500 hover:bg-orange-500 cursor-pointer ${className}`}
      {...props}
    >
      {label}
    </Button>
  );
};

export default BBButton;
