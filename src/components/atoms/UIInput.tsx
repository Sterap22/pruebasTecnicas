import { InputProps } from "../../Interfaces/props/Input.props"

export const UIInput = ({ 
    typeCus = 'text',
    placeholderCus = '',
    classCus = '',
    styleCus = {},
    valueCus = '',
    onChageCus = () => {},
    idCus=''
}:InputProps) => {
  return (
    <input 
        id={idCus}
        type={typeCus}
        placeholder={placeholderCus}
        className={classCus}
        style={styleCus}
        value={valueCus}
        onChange={onChageCus}
    />
  )
}
