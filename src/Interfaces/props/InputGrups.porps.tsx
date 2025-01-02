import { CSSProperties } from "react";

export interface InputGrupsProps{
    classDivCus?: string;
    classLabelCus?: string;
    classInputCus?: string;
    placeholderCus?: string;
    styleLabelCus?: CSSProperties;
    styleInputCus?: CSSProperties;
    styleDevCus?: CSSProperties;
    onChageCus?: (text: string, key: string) => void;
    labelcus?: string;
    tagCus?: string;
    typeCus?: string;
    valueCus?:string;
    idCus?:string
}