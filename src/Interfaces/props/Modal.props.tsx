import { ReactNode } from "react";

export interface ModalPorps  {
    isOpen: boolean;
    children: ReactNode;
    onClickCus: ()=> void;
}