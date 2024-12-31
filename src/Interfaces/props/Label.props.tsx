import { CSSProperties, ReactNode } from "react";

export interface LabelProps {
    tagCus?: string,
    children?: ReactNode,
    classCus?: string,
    styleCus?: CSSProperties,
    forCus?: string
}