import S from "./Button.module.css";

type ButtonProps = {
  className?: string;
  onClick?: () => void;
  children?: string;
};

export const Button = ({ className, onClick, children }: ButtonProps) => {
  return (
    <button className={`${S.button} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};
