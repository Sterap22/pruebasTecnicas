import React from 'react'

export const UIButton = ({
    children = {},
    classCus = '',
    styleCus = {},
    onClickCus = () => {}
}) => {
  return (
    <button
      className={classCus}
      style={styleCus}
      onClick={onClickCus}
    >
      {children}
    </button>
  )
}
