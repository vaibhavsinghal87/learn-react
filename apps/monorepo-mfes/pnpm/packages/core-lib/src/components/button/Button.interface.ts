export interface ButtonProps {
  children?: React.ReactNode;
  variant?: string;
  size?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}
