import { CSSProperties, ReactNode } from "react";

export interface UIButtonProps {
    children?: ReactNode,
    classCus?: string,
    styleCus?: CSSProperties,
    onClickCus?: () => void
}