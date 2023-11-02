import { ReactNode } from "react";
import Styles from "./Container.module.css";

export const Container = ({ children, className }: { children: ReactNode; className: string }) => <div className={`${Styles.container} ${className}`}>{children}</div>;
