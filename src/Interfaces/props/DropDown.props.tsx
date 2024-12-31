export interface DropDownProp {
    label?: string, 
    options?: string[], 
    valueDefault?: string, 
    onClickCus?:(text: string) => void
}