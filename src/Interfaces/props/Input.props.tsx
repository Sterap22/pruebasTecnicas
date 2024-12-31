import { CSSProperties } from "react";

export interface InputProps {
    typeCus?: string,
    placeholderCus?: string,
    classCus?: string,
    styleCus?: CSSProperties,
    valueCus?: string,
    onChageCus?: () => void,
    idCus?: string
}