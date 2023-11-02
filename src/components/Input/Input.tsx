import S from "./Input.module.css";
import { ChangeEventHandler, useState } from "react";

type InputProps = {
  children?: string;
  hint?: string;
  className?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  inputType: React.HTMLInputTypeAttribute;
};

export const Input = ({ children, hint, inputType, className, onChange }: InputProps) => {
  const [id] = useState(`input-${Math.random().toString(16).slice(2)}`);

  return (
    <div className={`${S.element} ${className}`}>
      {children && (
        <label htmlFor={id} className={S.label}>
          {children}
        </label>
      )}
      {hint && <span className={S.hint}> {hint}</span>}
      <input className={S.input} id={id} type={inputType} onChange={onChange} />
    </div>
  );
};
