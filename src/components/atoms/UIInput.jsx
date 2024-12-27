import React from 'react'

export const UIInput = ({ 
    typeCus = 'text',
    placeholderCus = '',
    classCus = '',
    styleCus = {},
    valueCus = '',
    onChageCus = () => {},
    idCus=''
}) => {
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
