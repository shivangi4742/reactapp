import { ReactNode } from "react";

export type RowsProps = {
    children: ReactNode,
    type?: string,
    left?: string,
    right?: string,
    center?: string
}