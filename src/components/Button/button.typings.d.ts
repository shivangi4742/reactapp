import { ReactNode } from "react";

export type ButtonProps = {
    children: ReactNode,
    onClick?: () => void,
    className?: string, 
    type?: string,
    size?: string,
    disabled?: boolean
}